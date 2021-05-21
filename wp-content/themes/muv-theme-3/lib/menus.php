<?php

/*
 *
 * Custom Menus
 *
 */

// Registramos los menus a utilizar

register_nav_menus(
    array(
        'main-menu' => 'Main Menu',
        'social-menu' => 'Social Menu',
        'footer-menu' => 'Footer Menu',
    )
);


add_filter( 'timber/context', 'add_to_context' );

function add_to_context( $context ) {

    $context['footer'] = new \Timber\Menu( 'footer-menu' );
    $context['social'] = new \Timber\Menu( 'social-menu' );
    $context['main'] = new \Timber\Menu( 'main-menu' );

    return $context;
}
