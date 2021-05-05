import * as typoPrefixs from "./constants/typographyPrefixConstants";
import {
	mediaBackground,
	mediaBgRadius,
	mediaBgMargin,
} from "./constants/dimensionsConstants";
import {
	generateDimensionsAttributes,
	generateTypographyAttributes,
} from "./helpers";
import { number } from "prop-types";

const attributes = {
	// the following 4 attributes is must required for responsive options and asset generation for frontend
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "desktop",
	},

	// blockId attribute for making unique className and other uniqueness ⬇
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},

	// blockMeta is for keeping all the styles ⬇
	blockMeta: {
		type: "object",
	},

	// this attribute is for selecting the desired design preset from the layout design presets options ⬇
	layoutPreset: {
		type: "string",
		default: "preset1",
	},

	// media attribute is for checking which of these (image / icon / number) is chosen for head top media ⬇
	media: {
		type: "string",
		default: "icon",
	},

	//
	numIconColor: {
		type: "string",
	},

	// should icon number background
	useNumIconBg: {
		type: "boolean",
		default: true,
	},

	//
	numIconBgType: {
		type: "string",
		default: "gradient",
	},

	//
	numIconBgColor: {
		type: "string",
		default: "#33FF55",
	},

	//
	numIconBgGradient: {
		type: "string",
		default: "linear-gradient(45deg,#ff00a5,#1e268c)",
	},

	//
	imageUrl: {
		source: "attribute",
		selector: ".eb-infobox-image",
		attribute: "src",
		// default: "https://source.unsplash.com/user/cristofer",
	},

	//
	imageId: {
		type: "string",
	},

	//
	mediaImgWidthUnit: {
		type: "string",
		default: "px",
	},
	mediaImgWidth: {
		type: number,
		default: 300,
	},
	TABmediaImgWidth: {
		type: number,
	},
	MOBmediaImgWidth: {
		type: number,
	},

	//
	isMediaImgHeightAuto: {
		type: "boolean",
		default: true,
	},
	mediaImgHeightUnit: {
		type: "string",
		default: "px",
	},
	mediaImgHeight: {
		type: number,
	},
	TABmediaImgHeight: {
		type: number,
	},
	MOBmediaImgHeight: {
		type: number,
	},

	//
	selectedIcon: {
		type: "string",
		source: "attribute",
		selector: ".eb-infobox-icon-data-selector",
		attribute: "data-icon",
		default: "far fa-gem",
	},

	//
	number: {
		type: "number",
	},

	// this attribute is for checking whether subtitle should be shown or not ⬇
	enableSubTitle: {
		type: "boolean",
		default: false,
	},

	//  this attribute is for checking whether content should be shown or not ⬇
	enableDescription: {
		type: "boolean",
		default: true,
	},

	// this attribute is for checking whether a button should be shown or not ⬇
	enableButton: {
		type: "boolean",
		default: false,
	},

	//
	buttonText: {
		type: "string",
		default: "click me",
	},

	//
	infoboxLink: {
		type: "string",
	},

	// this attribute is for checking whether the infobox should be clickable or not ⬇
	isClickable: {
		type: "boolean",
		default: false,
	},

	//
	title: {
		type: "text",
		selector: ".title",
		default: "This is an info box",
	},

	//
	subTitle: {
		type: "text",
		selector: ".subtitle",
		default: "This is a Sub title",
	},

	//
	description: {
		type: "text",
		selector: ".description",
		default:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},

	//
	iconSize: {
		type: "number",
		default: 50,
	},
	TABiconSize: {
		type: "number",
	},
	MOBiconSize: {
		type: "number",
	},

	// .infobox-wrapper-inner flex-direction
	flexDirection: {
		type: "string",
	},

	// .icon-img-wrapper align-self property
	mediaAlignSelf: {
		type: "string",
	},

	// .contents-wrapper text-alignment
	contentAlignment: {
		type: "string",
	},

	// .icon-img-wrapper margin
	mediaWrapperMargin: {
		type: "number",
		default: 20,
	},

	//
	titleTag: {
		type: "string",
		default: "h2",
	},
	subTitleTag: {
		type: "string",
		default: "h3",
	},

	// typography attributes
	...generateTypographyAttributes(Object.values(typoPrefixs)),

	// dimensions Control related Attributes
	...generateDimensionsAttributes(mediaBackground, {
		top: 20,
		bottom: 20,
		right: 20,
		left: 20,
	}),
	...generateDimensionsAttributes(mediaBgRadius, {
		top: 20,
		bottom: 20,
	}),
	...generateDimensionsAttributes(mediaBgMargin),
};

export default attributes;
