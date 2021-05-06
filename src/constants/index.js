import { __ } from "@wordpress/i18n";

export const LAYOUT_TYPES = [
	{ label: __("preset-1"), value: "preset1" },
	{ label: __("preset-2"), value: "preset2" },
	{ label: __("preset-3"), value: "preset3" },
	{ label: __("preset-4"), value: "preset4" },
];

export const MEDIA_TYPES = ["image", "icon", "number", "none"];

export const CONTENTS_ALIGNMENTS = [
	{ label: __("Left"), value: "left" },
	{ label: __("Center"), value: "center" },
	{ label: __("Right"), value: "right" },
];

export const MEDIA_ALIGNMENTS_ON_FLEX_COLUMN = [
	{ label: __("Left"), value: "flex-start" },
	{ label: __("Center"), value: "center" },
	{ label: __("Right"), value: "flex-end" },
];

export const MEDIA_ALIGNMENTS_ON_FLEX_ROW = [
	{ label: __("Top"), value: "flex-start" },
	{ label: __("Middle"), value: "center" },
	{ label: __("Bottom"), value: "flex-end" },
];

export const ICON_IMAGE_BG_TYPES = [
	{ label: "Gradient", value: "gradient" },
	{ label: "Fill", value: "fill" },
];

export const sizeUnitTypes = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];
