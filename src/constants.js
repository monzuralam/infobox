const { __ } = wp.i18n;

export const BACKGROUND_TYPES = [
	{ label: "Image", value: "image" },
	{ label: "Fill", value: "fill" },
	{ label: "Gradient", value: "gradient" },
];

export const BACKGROUND_SIZES = [
	{ label: __("Auto"), value: "auto" },
	{ label: __("Cover"), value: "cover" },
	{ label: __("Contain"), value: "contain" },
];

export const INFOBOX_TYPES = ["image", "icon", "number"];

export const POSITIONS = ["top", "bottom"];

export const HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];

export const BUTTON_SIZES = [
	{ label: "Small", value: "small" },
	{ label: "Medium", value: "medium" },
	{ label: "Large", value: "large" },
	{ label: "Extra Large", value: "extra-large" },
];

export const BUTTON_ALIGN = [
	{ label: "Left", value: "flex-start" },
	{ label: "Center", value: "center" },
	{ label: "Right", value: "flex-end" },
];

export const BORDER_STYLES = [
	{ label: __("None"), value: "none" },
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Inset"), value: "inset" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
];

export const DEFAULT_BACKGROUND = "#edf1f7";

export const FONT_SIZES = [
	{ name: __("Small"), size: 12, slug: "s" },
	{ name: __("Medium"), size: 16, slug: "m" },
	{ name: __("Large"), size: 24, slug: "l" },
	{ name: __("Extra Large"), size: 36, slug: "xl" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Normal"), value: "normal" },
	{ label: __("Bold"), value: "bold" },
	{ label: __("Bolder"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Overline"), value: "overline" },
	{ label: __("Line Through"), value: "line-through" },
	{ label: __("Underline"), value: "underline" },
	{ label: __("Underline Oveline"), value: "underline overline" },
];
