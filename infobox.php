<?php

/**
 * Plugin Name:     Infobox
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Highlight Your Key Features & Hold Audience Attention with Info Box Block.
 * Version:         1.1.5
 * Author:          WPDeveloper
 * Author URI: 		https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     infobox
 *
 * @package         infobox
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

define('INFOBOX_VERSION', "1.1.0");
define('INFOBOX_ADMIN_URL', plugin_dir_url(__FILE__));
define('INFOBOX_ADMIN_PATH', dirname(__FILE__));

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_infobox_block_init()
{

	$script_asset_path = INFOBOX_ADMIN_PATH . "/dist/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "infobox/infobox" block first.'
		);
	}
	$script_asset = require($script_asset_path);
	$all_dependencies = array_merge($script_asset['dependencies'], array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-block-editor',
		'infobox-controls-util',
	));

	$index_js     = INFOBOX_ADMIN_URL . 'dist/index.js';
	wp_register_script(
		'create-block-infobox-block-editor',
		$index_js,
		$all_dependencies,
		$script_asset['version'],
		true
	);

	$style_css     = INFOBOX_ADMIN_URL . 'dist/style.css';
	wp_register_style(
		'create-block-infobox-block-editor',
		$style_css,
		array(),
		INFOBOX_VERSION,
		"all"
	);

	// 
	// 
	// 
	$controls_dependencies = require INFOBOX_ADMIN_PATH . '/dist/controls.asset.php';

	wp_register_script(
		"infobox-controls-util",
		INFOBOX_ADMIN_URL . '/dist/controls.js',
		array_merge($controls_dependencies['dependencies'], array("essential-blocks-edit-post")),
		$controls_dependencies['version'],
		true
	);

	wp_localize_script('infobox-controls-util', 'EssentialBlocksLocalize', array(
		'eb_wp_version' => (float) get_bloginfo('version'),
		'rest_rootURL' => get_rest_url(),
	));

	wp_register_style(
		'fontpicker-default-theme',
		INFOBOX_ADMIN_URL . '/assets/css/fonticonpicker.base-theme.react.css',
		array(),
		INFOBOX_VERSION,
		"all"
	);

	wp_register_style(
		'fontpicker-matetial-theme',
		INFOBOX_ADMIN_URL . '/assets/css/fonticonpicker.material-theme.react.css',
		array(),
		INFOBOX_VERSION,
		"all"
	);

	wp_register_style(
		'fontawesome-frontend-css',
		INFOBOX_ADMIN_URL . '/assets/css/font-awesome5.css',
		array(),
		INFOBOX_VERSION,
		"all"
	);


	wp_register_style(
		'essential-blocks-hover-css',
		INFOBOX_ADMIN_URL . '/assets/css/hover-min.css',
		array(),
		INFOBOX_VERSION,
		"all"
	);

	wp_register_style(
		'infobox-editor-css',
		INFOBOX_ADMIN_URL . '/dist/controls.css',
		array(
			'essential-blocks-hover-css',
			'fontpicker-default-theme',
			'fontpicker-matetial-theme',
			'fontawesome-frontend-css',
			"create-block-infobox-block-editor"
		),
		$controls_dependencies['version'],
		'all'
	);

	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/infobox')) {
		register_block_type(
			Infobox_Helper::get_block_register_path("infobox/infobox", INFOBOX_ADMIN_PATH),
			array(
				'editor_script'	=> 'create-block-infobox-block-editor',
				'editor_style' 	=> 'infobox-editor-css',
				'render_callback' => function ($attributes, $content) {
					if (!is_admin()) {
						wp_enqueue_style('fontawesome-frontend-css');
						wp_enqueue_style('essential-blocks-hover-css');
						wp_enqueue_style('create-block-infobox-block-editor');
					}
					return $content;
				}
			)
		);
	}
}

add_action('init', 'create_block_infobox_block_init');
