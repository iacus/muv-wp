<?php
/**
 * Template Name: Template B (Plantilla Imagen de Fondo)
 * Template Post Type: post, page, product, autoconsumo, energia, productos, ingenieria
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
$context['customClass'] = "navbar-dark header-full-image";
$context['topNav'] = new Timber\Menu( 'topNav' );
$context['secNav'] = new Timber\Menu( 'secondaryNav' );
$context['social'] = new Timber\Menu( 'social' );
Timber::render( array( 'template-b.twig', 'page.twig' ), $context );
