<?php
/**
 * Template Name: Template A (Plantilla Producto)
 * Template Post Type: page, product, autoconsumo, energia, productos, ingenieria
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
Timber::render( array( 'template-a.twig' , 'page-' . $post->post_name . '.twig', 'page.twig' ), $context );
// Timber::render( array( 'template-a.twig', 'page.twig' ), $context );
