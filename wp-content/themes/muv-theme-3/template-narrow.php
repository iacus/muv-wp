<?php
/**
 * Template Name: Columna estrecha
 *
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render( array( 'template-narrow.twig', 'page.twig' ), $context );
