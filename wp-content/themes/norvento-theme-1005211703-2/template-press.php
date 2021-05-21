<?php
/**
 * Template Name: Template Área de Prensa
 * Template Post Type: page
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
		'post_type' => 'press',
		'posts_per_page' => 9,
		'paged' => $paged
	);

$context['pressNotes'] = new Timber\PostQuery($args);


Timber::render( array( 'template-press.twig', 'page.twig' ), $context );
