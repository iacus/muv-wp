<?php

// If the Timber plugin isn't activated, print a notice in the admin.
if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		} );
	return;
}


// Create our version of the TimberSite object
class StarterSite extends TimberSite {

	// This function applies some fundamental WordPress setup, as well as our functions to include custom post types and taxonomies.
	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		add_action( 'init', array( $this, 'register_menus' ) );
		add_action( 'init', array( $this, 'register_widgets' ) );
		parent::__construct();
	}


	// Abstracting long chunks of code.

	// The following included files only need to contain the arguments and register_whatever functions. They are applied to WordPress in these functions that are hooked to init above.

	// The point of having separate files is solely to save space in this file. Think of them as a standard PHP include or require.

	function register_post_types(){
		require('lib/custom-types.php');
	}

	function register_taxonomies(){
		require('lib/taxonomies.php');
	}

	function register_menus(){
		require('lib/menus.php');
	}

	function register_widgets(){
		require('lib/widgets.php');
	}


	// Access data site-wide.

	// This function adds data to the global context of your site. In less-jargon-y terms, any values in this function are available on any view of your website. Anything that occurs on every page should be added here.

	function add_to_context( $context ) {


		$lang_dir = get_stylesheet_directory().'/languages';
		load_theme_textdomain('theme', $lang_dir);


		// Our menu occurs on every page, so we add it to the global context.
		$context['menu'] = new TimberMenu();

		// This 'site' context below allows you to access main site information like the site title or description.
		$context['site'] = $this;
		return $context;
	}

	// Here you can add your own fuctions to Twig. Don't worry about this section if you don't come across a need for it.
	// See more here: http://twig.sensiolabs.org/doc/advanced.html
	function add_to_twig( $twig ) {
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter( 'myfoo', new Twig_Filter_Function( 'myfoo' ) );
		return $twig;
	}



}

new StarterSite();


/*
 *
 * My Functions (not from Timber)
 *
 */

// Enqueue scripts
function my_scripts() {

	// Use jQuery from a CDN
	wp_deregister_script('jquery');

	// Enqueue our stylesheet and JS file with a jQuery dependency.
	// Note that we aren't using WordPress' default style.css, and instead enqueueing the file of compiled Sass.
	wp_enqueue_style( 'my-styles', get_template_directory_uri() . '/assets/css/style.css', 1.0);
	wp_enqueue_script( 'my-js', get_template_directory_uri() . '/assets/js/bundle.js', [], '1.0.0', true );
	// wp_enqueue_script( 'scrollreveal', '//unpkg.com/scrollreveal',[] , '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'my_scripts' );



/*
 *
 * Remove comments from backoffice
 *
 */

// Removes comments from admin menu
add_action( 'admin_menu', 'my_remove_admin_menus' );
function my_remove_admin_menus() {
    remove_menu_page( 'edit-comments.php' );
}

// Removes comments from post and pages
add_action('init', 'remove_comment_support', 100);

function remove_comment_support() {
    remove_post_type_support( 'post', 'comments' );
    remove_post_type_support( 'page', 'comments' );
}
// Removes comments from admin bar
function mytheme_admin_bar_render() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('comments');
}
add_action( 'wp_before_admin_bar_render', 'mytheme_admin_bar_render' );
