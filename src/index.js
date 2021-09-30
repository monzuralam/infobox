/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import { InfoboxIcon } from "../util/icons";
import Edit from "./edit";
import deprecated from "./deprecated";
import Save from "./save";
import attributes from "./attributes";
import metadata from "../block.json";
import "./style.scss";

import example from "./example";

const { name, category } = metadata;

registerBlockType(name, {
	apiVersion: 2,
	title: __("Infobox", "block"),
	description: __(
		"Deliver your content beautifully to grab attention with an animated Infobox block.",
		"block"
	),
	category,
	keywords: [
		__("EB infobox", "essential-blocks"),
		__("info box", "essential-blocks"),
		__("infobox block", "essential-blocks"),
	],
	icon: InfoboxIcon,
	attributes,
	edit: Edit,
	save: Save,
	example: example,
	deprecated,
});
