<?php

/*
 *
 * Taxonomies
 *
 */

// Same as with Custom Types, you only need the arguments and register_taxonomy function here. They are hooked into WordPress in functions.php.


$labels = array(
  'name'              => _x( 'Categorías', 'taxonomy general name', 'theme' ),
  'singular_name'     => _x( 'Categoría', 'taxonomy singular name', 'theme' ),
  'search_items'      => __( 'Buscar categoría', 'theme' ),
  'all_items'         => __( 'Todas las categorías', 'theme' ),
  'parent_item'       => __( 'Categoría padre', 'theme' ),
  'parent_item_colon' => __( 'Categoría padre:', 'theme' ),
  'edit_item'         => __( 'Editar categoría', 'theme' ),
  'update_item'       => __( 'Actualizar categoría', 'theme' ),
  'add_new_item'      => __( 'Añadir categoría', 'theme' ),
  'new_item_name'     => __( 'Nueva Name', 'theme' ),
  'menu_name'         => __( 'Categoria', 'theme' )
);

$args = array(
  'hierarchical'      => true,
  'labels'            => $labels,
  'show_ui'           => true,
  'show_admin_column' => true,
  'query_var'         => true,
  // 'rewrite' => [
  //   'slug' => '/',
  //   'with_front' => false
  // ]
);

register_taxonomy( 'cat', array( 'blog' ), $args );
