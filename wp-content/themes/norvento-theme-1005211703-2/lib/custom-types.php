<?php



/*
 *
 * Custom Post Types
 *
 */

// Note that you only need the arguments and register_post_type function here. They are hooked into WordPress in functions.php.

register_post_type('productos', array(
  'labels'      => array(
      'name'          => __('Productos', 'theme'),
      'singular_name' => __('Productos', 'theme'),
  ),
  'public'      => true,
  'has_archive' => true,
  'menu_position' => 5,
  'menu_icon' => 'dashicons-awards',
  'hierarchical' => true,
  // 'rewrite' => array( 'slug' => 'productos' ),
  'show_in_rest' => true,
  'capability_type'    => 'page',
  'supports' => array(
                  'title',
                  'editor',
                  'custom-fields',
                  'page-attributes',
                  'thumbnail'
              )
  )
);

register_post_type('autoconsumo', array(
  'labels'      => array(
      'name'          => __('Autoconsumo', 'theme'),
      'singular_name' => __('Autoconsumo', 'theme'),
  ),
  'public'      => true,
  'has_archive' => true,
  'menu_position' => 5,
  'menu_icon' => 'dashicons-awards',
  'hierarchical' => true,
  // 'rewrite' => array( 'slug' => '/' ),
  'show_in_rest' => true,
  'capability_type'    => 'page',
  'supports' => array(
                  'title',
                  'editor',
                  'custom-fields',
                  'page-attributes',
                  'thumbnail'
              )
  )
);

register_post_type('energia', array(
  'labels'      => array(
      'name'          => __('Energía', 'theme'),
      'singular_name' => __('Energía', 'theme'),
  ),
  'public'      => true,
  'has_archive' => true,
  'menu_position' => 5,
  'menu_icon' => 'dashicons-awards',
  // 'rewrite' => array( 'slug' => 'energia' ),
  'hierarchical' => true,
  'show_in_rest' => true,
  'capability_type'    => 'page',
  'supports' => array(
                  'title',
                  'editor',
                  'custom-fields',
                  'page-attributes',
                  'thumbnail'
              )
  )
);

register_post_type('ingenieria', array(
  'labels'      => array(
      'name'          => __('Ingeniería', 'theme'),
      'singular_name' => __('Ingeniería', 'theme'),
  ),
  'public'      => true,
  'has_archive' => true,
  'menu_position' => 5,
  'menu_icon' => 'dashicons-awards',
  'hierarchical' => true,
  'show_in_rest' => true,
  'capability_type'    => 'page',
  'supports' => array(
                  'title',
                  'editor',
                  'custom-fields',
                  'page-attributes',
                  'thumbnail'
              )
  )
);

register_post_type('press', array(
  'labels'      => array(
      'name'          => __('Área de prensa', 'theme'),
      'singular_name' => __('Área de prensa', 'theme'),
  ),
  'public'      => true,
  'has_archive' => true,
  'menu_position' => 6,
  'menu_icon' => 'dashicons-awards',
  'hierarchical' => true,
  'show_in_rest' => true,
  'capability_type'    => 'page',
  'supports' => array(
                  'title',
                  'editor',
                  'custom-fields',
                  'page-attributes',
                  'thumbnail'
              )
  )
);

register_post_type('blog', array(
  'labels'      => array(
      'name'          => __('Blog', 'theme'),
      'singular_name' => __('Blog', 'theme'),
  ),
  'public'      => true,
  'has_archive' => true,
  'menu_position' => 6,
  'menu_icon' => 'dashicons-awards',
  'hierarchical' => true,
  'show_in_rest' => true,
  // 'rewrite' => false,
  'capability_type'    => 'page',
  'supports' => array(
                  'title',
                  'editor',
                  'custom-fields',
                  'page-attributes',
                  'thumbnail',
                  'excerpt',
              )
  )
);

// register_post_type('news', array(
//   'labels'      => array(
//       'name'          => __('News', 'theme'),
//       'singular_name' => __('News', 'theme'),
//   ),
//   'public'      => true,
//   'has_archive' => true,
//   'menu_position' => 6,
//   'menu_icon' => 'dashicons-awards',
//   'hierarchical' => true,
//   'show_in_rest' => true,
//   'capability_type'    => 'page',
//   'supports' => array(
//                   'title',
//                   'editor',
//                   'custom-fields',
//                   'page-attributes',
//                   'thumbnail',
//                   'excerpt',
//               )
//   )
// );

register_post_type('support', array(
  'labels'      => array(
      'name'          => __('Apoyo institucional', 'theme'),
      'singular_name' => __('Apoyo institucional', 'theme'),
  ),
  'public'      => true,
  'has_archive' => true,
  'menu_position' => 6,
  'menu_icon' => 'dashicons-awards',
  'hierarchical' => true,
  'show_in_rest' => true,
  'capability_type'    => 'post',
  'supports' => array(
                  'title',
                  'editor',
                  'custom-fields',
                  'page-attributes',
                  'thumbnail',
                  'excerpt',
              )
  )
);

register_post_type('norvento', array(
  'labels'      => array(
      'name'          => __('Norvento', 'theme'),
      'singular_name' => __('Norvento', 'theme'),
  ),
  'public'      => true,
  'has_archive' => true,
  'menu_position' => 5,
  'menu_icon' => 'dashicons-awards',
  'hierarchical' => true,
  'show_in_rest' => true,
  'capability_type'    => 'page',
  'supports' => array(
                  'title',
                  'editor',
                  'custom-fields',
                  'page-attributes',
                  'thumbnail'
              )
  )
);
