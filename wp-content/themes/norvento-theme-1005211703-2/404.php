<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$context['legal'] = new Timber\Menu( 'legal' );
$context['topNav'] = new Timber\Menu( 'topNav' );
$context['secNav'] = new Timber\Menu( 'secondaryNav' );
$context['social'] = new Timber\Menu( 'social' );
Timber::render( '404.twig', $context );
