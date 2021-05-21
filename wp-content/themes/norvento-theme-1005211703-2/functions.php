<?php
header("Access-Control-Allow-Origin: *");
/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = __DIR__ . '/vendor/autoload.php';
if ( file_exists( $composer_autoload ) ) {
	require_once $composer_autoload;
	$timber = new Timber\Timber();
}

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

}

add_action( 'wp_enqueue_scripts', 'my_scripts' );

if( function_exists('acf_add_options_page') ) {
    acf_add_options_page('General settings');
}

add_filter( 'timber_context', 'mytheme_timber_context'  );
function mytheme_timber_context( $context ) {
    $context['options'] = get_fields('option');
    return $context;
}


// Insert 'styleselect' into the $buttons array
function my_mce_buttons_2( $buttons ) {
    array_unshift( $buttons, 'styleselect' );
    return $buttons;
}
// Use 'mce_buttons' for button row #1, mce_buttons_3' for button row #3
add_filter('mce_buttons_2', 'my_mce_buttons_2');

function my_mce_before_init_insert_formats( $init_array ) {
    $style_formats = array(
				array(
						'title' => 'Link', // Title to show in dropdown
						'selector' => 'a', // Element to add class to
						'classes' => 'text-link' // CSS class to add
				),
        // array(
        //     'title' => 'Lista con guiones', // Title to show in dropdown
        //     'selector' => 'ul', // Element to add class to
        //     'classes' => 'dashed' // CSS class to add
        // ),
				array(
						'title' => 'Display 1', // Title to show in dropdown
						'selector' => 'h1,h2,h3', // Element to add class to
						'classes' => 'display-01' // CSS class to add
				),
				array(
						'title' => 'Display 2', // Title to show in dropdown
						'selector' => 'h1,h2,h3,h4,h5,h6', // Element to add class to
						'classes' => 'display-02' // CSS class to add
				),
				array(
						'title' => 'Display 3', // Title to show in dropdown
						'selector' => 'h1,h2,h3,h4,h5,h6', // Element to add class to
						'classes' => 'display-03' // CSS class to add
				),
				array(
						'title' => 'Display 4', // Title to show in dropdown
						'selector' => 'h1,h2,h3,h4,h5,h6', // Element to add class to
						'classes' => 'display-04' // CSS class to add
				),
				array(
						'title' => 'Display 5', // Title to show in dropdown
						'selector' => 'h1,h2,h3,h4,h5,h6', // Element to add class to
						'classes' => 'display-05' // CSS class to add
				)
    );
    $init_array['style_formats'] = json_encode( $style_formats );
    return $init_array;
}
add_filter( 'tiny_mce_before_init', 'my_mce_before_init_insert_formats' );


function custom_image_size() {
    // Set default values for the upload media box
    update_option('image_default_size', 'large' );

}
add_action('after_setup_theme', 'custom_image_size');


add_action( 'init', 'cp_change_post_object' );
// Change dashboard Posts to News
function cp_change_post_object() {
    $get_post_type = get_post_type_object('post');
    $labels = $get_post_type->labels;
        $labels->name = 'Noticias';
        $labels->singular_name = 'Noticias';
        $labels->add_new = 'Añadir noticia';
        $labels->add_new_item = 'Añadir noticia';
        $labels->edit_item = 'Editar noticia';
        $labels->new_item = 'Noticias';
        $labels->view_item = 'Ver noticias';
        $labels->search_items = 'Buscar noticias';
        $labels->not_found = 'No noticias found';
        $labels->not_found_in_trash = 'No noticias found in Trash';
        $labels->all_items = 'Todas las noticias';
        $labels->menu_name = 'Noticias';
        $labels->name_admin_bar = 'Noticias';
}



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




//custom prev post within taxonomy term
function custom_archive_link($post_type){
	echo get_post_type_archive_link($post_type);
}
