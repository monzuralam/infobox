const { __ } = wp.i18n;

const BACKGROUND_TYPE = [
  { label: "Image", value: "image" },
  { label: "Fill", value: "fill" },
  { label: "Gradient", value: "gradient" }
];

const INFOBOX_TYPES = ["image", "icon", "number"];

const POSITIONS = ["top", "bottom"];

const HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];

const TEXT_TRANSFORM = [
  { label: "None", value: "none" },
  { label: "Capitalize", value: "capitalize" },
  { label: "Upper Case", value: "uppercase" },
  { label: "Lower Case", value: "lowercase" }
];

const BUTTON_SIZES = [
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
  { label: "Extra Large", value: "extra-large" }
];

const BUTTON_ALIGN = [
  { label: "Left", value: "flex-start" },
  { label: "Center", value: "center" },
  { label: "Right", value: "flex-end" }
];

const BORDER_STYLES = [
  { label: __("None"), value: "none" },
  { label: __("Dashed"), value: "dashed" },
  { label: __("Solid"), value: "solid" },
  { label: __("Dotted"), value: "dotted" },
  { label: __("Double"), value: "double" },
  { label: __("Groove"), value: "groove" },
  { label: __("Inset"), value: "inset" },
  { label: __("Outset"), value: "outset" },
  { label: __("Ridge"), value: "ridge" }
];

const DEFAULT_BACKGROUND = "#edf1f7";

export {
  BACKGROUND_TYPE,
  INFOBOX_TYPES,
  POSITIONS,
  HEADER_TAGS,
  TEXT_TRANSFORM,
  BUTTON_SIZES,
  BUTTON_ALIGN,
  BORDER_STYLES,
  DEFAULT_BACKGROUND
};
