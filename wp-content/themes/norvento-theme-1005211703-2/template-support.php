<?php
/**
 * Template Name: Template Apoyo institucional
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
    'post_type' => 'support'
);

$context['support'] = Timber::get_posts( $args );


Timber::render( array( 'template-support.twig', 'page.twig' ), $context );
