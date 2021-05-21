<?php
/**
 * Template Name: Template Blog a
 * Template Post Type: page, post, blog
 *
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['legal'] = new Timber\Menu( 'legal' );
$context['topNav'] = new Timber\Menu( 'topNav' );
$context['secNav'] = new Timber\Menu( 'secondaryNav' );
$context['social'] = new Timber\Menu( 'social' );


$args = array(
		'post_type' => 'blog',
		'posts_per_page' => 9,
		'paged' => $paged
	);

$context['posts'] = new Timber\PostQuery($args);


Timber::render( array( 'template-blog.twig', 'page.twig' ), $context );
