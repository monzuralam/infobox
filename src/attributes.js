import * as typoPrefixs from "./constants/typographyPrefixConstants";
import {
	mediaBackground,
	mediaBgRadius,
	mediaBgMargin,
	buttonRadius,
	buttonPadding,
	contentPadding,
	titlePadding,
	subTitlePadding,
	wrapperMargin,
	wrapperPadding,
	wrp_border,
	wrp_radius,
} from "./constants/dimensionsConstants";
import {
	generateDimensionsAttributes,
	generateTypographyAttributes,
} from "../util/helpers";

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

	// isOverly is to check if a overly on the block's background should exist ⬇
	isOverly: {
		type: "boolean",
		default: false,
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
		type: "number",
		default: 300,
	},
	TABmediaImgWidth: {
		type: "number",
	},
	MOBmediaImgWidth: {
		type: "number",
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
		type: "number",
	},
	TABmediaImgHeight: {
		type: "number",
	},
	MOBmediaImgHeight: {
		type: "number",
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
		default: "Learn More",
	},

	//
	buttonTextColor: {
		type: "string",
	},

	//
	buttonBgColor: {
		type: "string",
	},

	//
	infoboxLink: {
		type: "string",
	},

	//
	title: {
		type: "text",
		selector: ".title",
		default: "This is an info box",
	},

	//
	titleColor: {
		type: "string",
	},

	//
	subTitle: {
		type: "text",
		selector: ".subtitle",
		default: "This is a Sub title",
	},

	//
	subTitleColor: {
		type: "string",
	},

	//
	description: {
		type: "text",
		selector: ".description",
		default:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
	},

	//
	descriptionColor: {
		type: "string",
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

	//
	mediaAlignment: {
		type: "string",
	},

	//
	contentsAlignment: {
		type: "string",
	},

	// background attributes ⬇
	wrp_backgroundType: {
		type: "string",
		default: "gradient",
	},
	wrp_backgroundColor: {
		type: "string",
	},
	wrp_gradientColor: {
		type: "string",
		default: "linear-gradient(45deg,#8200ff,#ff0071)",
	},
	wrp_bgImageURL: {
		type: "string",
	},
	wrp_bgImageID: {
		type: "string",
	},

	wrp_backgroundSize: {
		type: "string",
	},
	wrp_bgImgCustomSize: {
		type: "number",
		default: 100,
	},
	wrp_bgImgCustomSizeUnit: {
		type: "string",
		default: "%",
	},
	wrp_bgImgPos: {
		type: "string",
	},
	wrp_bgImgcustomPosX: {
		type: "number",
		default: 0,
	},
	wrp_bgImgcustomPosXUnit: {
		type: "string",
		default: "px",
	},
	wrp_bgImgcustomPosY: {
		type: "number",
		default: 0,
	},
	wrp_bgImgcustomPosYUnit: {
		type: "string",
		default: "px",
	},
	wrp_bgImgAttachment: {
		type: "string",
	},
	wrp_bgImgRepeat: {
		type: "string",
	},

	TABwrp_backgroundSize: {
		type: "string",
	},
	TABwrp_bgImgCustomSize: {
		type: "number",
	},
	TABwrp_bgImgCustomSizeUnit: {
		type: "string",
		default: "%",
	},
	TABwrp_bgImgPos: {
		type: "string",
	},
	TABwrp_bgImgcustomPosX: {
		type: "number",
	},
	TABwrp_bgImgcustomPosXUnit: {
		type: "string",
	},
	TABwrp_bgImgcustomPosY: {
		type: "number",
	},
	TABwrp_bgImgcustomPosYUnit: {
		type: "string",
		default: "px",
	},
	TABwrp_bgImgRepeat: {
		type: "string",
	},

	MOBwrp_backgroundSize: {
		type: "string",
	},
	MOBwrp_bgImgCustomSize: {
		type: "number",
	},
	MOBwrp_bgImgCustomSizeUnit: {
		type: "string",
		default: "%",
	},
	MOBwrp_bgImgPos: {
		type: "string",
	},
	MOBwrp_bgImgcustomPosX: {
		type: "number",
	},
	MOBwrp_bgImgcustomPosXUnit: {
		type: "string",
	},
	MOBwrp_bgImgcustomPosY: {
		type: "number",
	},
	MOBwrp_bgImgcustomPosYUnit: {
		type: "string",
		default: "px",
	},
	MOBwrp_bgImgRepeat: {
		type: "string",
	},

	// border attributes ⬇
	wrp_borderColor: {
		type: "string",
	},
	wrp_borderStyle: {
		type: "string",
		default: "solid",
	},

	// shadow attributes  ⬇
	wrp_hOffset: {
		type: "number",
	},
	wrp_vOffset: {
		type: "number",
	},
	wrp_blur: {
		type: "number",
	},
	wrp_spread: {
		type: "number",
	},
	wrp_shadowColor: {
		type: "string",
	},
	wrp_inset: {
		type: "boolean",
		default: false,
	},
	wrp_shadowType: {
		type: "string",
		default: "normal",
	},
	wrp_hoverHOffset: {
		type: "number",
	},
	wrp_hoverVOffset: {
		type: "number",
	},
	wrp_hoverBlur: {
		type: "number",
	},
	wrp_hoverSpread: {
		type: "number",
	},
	wrp_hoverShadowColor: {
		type: "string",
	},
	wrp_hoverInset: {
		type: "boolean",
		default: false,
	},
	wrp_transitionTime: {
		type: "string",
		default: "500",
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
	...generateDimensionsAttributes(mediaBgMargin, {
		top: 15,
	}),
	...generateDimensionsAttributes(buttonPadding, {
		top: 15,
		bottom: 15,
		right: 30,
		left: 30,
	}),
	...generateDimensionsAttributes(buttonRadius, {
		top: 10,
		bottom: 10,
		right: 10,
		left: 10,
	}),
	...generateDimensionsAttributes(titlePadding, {
		top: 10,
		bottom: 10,
	}),
	...generateDimensionsAttributes(subTitlePadding, {
		top: 10,
		bottom: 10,
	}),
	...generateDimensionsAttributes(contentPadding, {
		top: 10,
		bottom: 30,
	}),

	...generateDimensionsAttributes(wrapperMargin),
	...generateDimensionsAttributes(wrapperPadding, {
		top: 40,
		bottom: 40,
		right: 30,
		left: 30,
	}),
	...generateDimensionsAttributes(wrp_border, {
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	}),
	...generateDimensionsAttributes(wrp_radius),
};

export default attributes;
