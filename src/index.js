import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("infobox/infobox", {
	apiVersion: 2,
	title: __("Infobox", "block"),
	description: __(
		"Deliver your content beautifully to grab attention with an animated Infobox block.",
		"block"
	),
	category: "widgets",
	keywords: [
		__("EB infobox", "essential-blocks"),
		__("infobox", "essential-blocks"),
		__("infobox block", "essential-blocks"),
	],
	icon,
	attributes,
	edit: Edit,
	save,
});
