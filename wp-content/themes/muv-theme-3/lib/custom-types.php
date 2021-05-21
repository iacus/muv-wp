<?php

/*
 *
 * Custom Post Types
 *
 */

// Note that you only need the arguments and register_post_type function here. They are hooked into WordPress in functions.php.

register_post_type('expo', array(
  'labels'      => array(
      'name'          => __('Exposiciones', 'theme'),
      'singular_name' => __('Exposición', 'theme'),
  ),
  'public'      => true,
  'has_archive' => true,
  'show_in_rest' => true,
  'rewrite' => array( 'slug' => 'exposiciones' ),
  'supports' => array(
                'title',
                'editor',
                'custom-fields',
                'page-attributes',
                'thumbnail'
            )
  )
);

register_post_type('project', array(
  'labels'      => array(
      'name'          => __('Proyectos', 'theme'),
      'singular_name' => __('Proyecto', 'theme'),
  ),
  'public'      => true,
  'has_archive' => true,
  'show_in_rest' => true,
  'rewrite' => array( 'slug' => 'proyectos' ),
  'supports' => array(
                'title',
                'editor',
                'custom-fields',
                'page-attributes',
                'thumbnail'
            )
  )
);
