<?php
/**
 * Template Name: Template Cine (Full header image + Consumos)
 * Template Post Type: norvento,page
 *
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['customClass'] = "navbar-dark dark-theme header-full-image template-cine";
$context['legal'] = new Timber\Menu( 'legal' );
$context['topNav'] = new Timber\Menu( 'topNav' );
$context['secNav'] = new Timber\Menu( 'secondaryNav' );
$context['social'] = new Timber\Menu( 'social' );
Timber::render( array( 'template-cine.twig', 'page.twig' ), $context );
