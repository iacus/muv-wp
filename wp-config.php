<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'yCDbWdIOMhQ/oWfgim5KM/P/aK4Dzr3Llw6SquCNJKD5YT7EmOVsMErHncWoqZ7y3PduCB9B6ZnWPht0NdxCfg==');
define('SECURE_AUTH_KEY',  't26Lfl4H1Q97jcq0K8xrODMXAWYIuwD0ykiAhZNYDW+0JjHjKWq0dpPk6A+xz0a9I2x2T5IBQ/ueB5dhGi02lw==');
define('LOGGED_IN_KEY',    'x+IZC4wyJjHkIYO+sVueLS7jVf28YG3r+hShgg2GWLgEgIkzZCjJIeTAXVej/YftTPhTIbJFbganW2J8I9/YJw==');
define('NONCE_KEY',        'dvGS9AOH8ZJfD9r6VWdRLakw7bEifw5EyewH6zln3Bi6VtX8uCPtFPbBGh0bJ4Qp2feoy5lgr7amozRk1ycTBg==');
define('AUTH_SALT',        'AqyHW5XclWXK8B1xeiuELWv6P9k2jB7WSyeLCchwYdqS6qUe2YF4+i1StmUcqhwpe+sj59knNxzbwBml5JaJsQ==');
define('SECURE_AUTH_SALT', 'XPuOdKahTflPt1CDBOBLRS6A10ciNkQUExOqm4k9wRB0zJhx/5Cmn3oVKFLc1bKReovOma7QJGO8kcz7YXj80A==');
define('LOGGED_IN_SALT',   '5AnnbE0s5NdK3gqVa3RFbvUY+MyiwMVUQPrcIeoNxSivt0g/4z9Wg65oIlHTOLrQRHvfpLerFBSueT2H04pVVQ==');
define('NONCE_SALT',       '9hONrRU7g+ixgCK8R4X+HKRThx5RkYoRFFVMYAoMX8nZFg0rBPnDAqRS4lPtBYP9ZgQw/KrMYJLA+pWpuaMQYQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
