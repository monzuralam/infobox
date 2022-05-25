<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Infobox_Helper
{

    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function enqueues($hook)
    {
        /**
         * Only for Admin Add/Edit Pages 
         */
        if ($hook == 'post-new.php' || $hook == 'post.php' || $hook == 'site-editor.php' || ($hook == 'themes.php' && !empty($_SERVER['QUERY_STRING']) && str_contains($_SERVER['QUERY_STRING'], 'gutenberg-edit-site'))) {

            $controls_dependencies = require INFOBOX_ADMIN_PATH . '/dist/controls.asset.php';

            wp_register_script(
                "infobox-controls-util",
                INFOBOX_ADMIN_URL . 'dist/controls.js',
                array_merge($controls_dependencies['dependencies'], array("essential-blocks-edit-post")),
                $controls_dependencies['version'],
                true
            );

            wp_localize_script('infobox-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
            ));

            if ($hook == 'post-new.php' || $hook == 'post.php') {
                wp_localize_script('infobox-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($hook == 'site-editor.php') {
                wp_localize_script('infobox-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

            wp_register_style(
                'infobox-editor-css',
                INFOBOX_ADMIN_URL . 'dist/controls.css',
                array(
                    'essential-blocks-hover-css',
                    'fontpicker-default-theme',
                    'fontpicker-matetial-theme',
                ),
                $controls_dependencies['version'],
                'all'
            );
        }
    }
    public static function get_block_register_path($blockname, $blockPath)
    {
        if ((float) get_bloginfo('version') <= 5.6) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }
}
Infobox_Helper::register();
