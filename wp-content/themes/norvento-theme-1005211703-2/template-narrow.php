<?php
/**
 * Template Name: Template Columna Estrecha (Textos legales)
 * Template Post Type: page
 *
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['legal'] = new Timber\Menu( 'legal' );
$context['topNav'] = new Timber\Menu( 'topNav' );
$context['secNav'] = new Timber\Menu( 'secondaryNav' );
$context['social'] = new Timber\Menu( 'social' );
$context['post'] = $post;
Timber::render( array( 'template-narrow.twig', 'page.twig' ), $context );
