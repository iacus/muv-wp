<?php
/**
 * Template Name: Template (Plantilla estandar)
 * Template Post Type: page, norvento
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
Timber::render( array( 'template-navlocal.twig', 'page.twig' ), $context );
