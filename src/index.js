import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("create-block/infobox", {
	title: __("Infobox", "essential-blocks"),
	description: __("", "essential-blocks"),
	category: "widgets",
	icon,
	attributes,
	edit: Edit,
	save,
});
