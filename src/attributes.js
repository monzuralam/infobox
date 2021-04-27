import * as prefixObjs from "./constants/typographyPrefixConstants";
import { generateTypographyAttributes } from "./helpers";

const attributes = {
	// the following 4 attributes is must required for responsive options and asset generation for frontend
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "desktop",
	},

	// blockId attribute for making unique className and other uniqueness
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},

	// blockMeta is for keeping all the styles
	blockMeta: {
		type: "object",
	},

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(prefixObjs)),

	// background attributes ⬇
	backgroundType: {
		type: "string",
		default: "fill",
	},
	backgroundSize: {
		type: "string",
	},
	backgroundImageURL: {
		type: "string",
	},
	backgroundColor: {
		type: "string",
	},
	backgroundImageID: {
		type: "number",
	},
	backgroundGradient: {
		type: "string",
		default: "linear-gradient(45deg,#0072ff,#00c6ff)",
	},

	// infobox top head (image/icon/number) control attributes ⬇
	imageOrIcon: {
		type: "string",
		default: "icon",
	},
	iconPosition: {
		type: "string",
		default: "top",
	},
	selectedIcon: {
		source: "attribute",
		selector: ".eb-infobox-icon-data-selector",
		attribute: "data-icon",
		default: "far fa-sun",
	},
	isClickable: {
		type: "boolean",
		default: false,
	},
	clickableLink: {
		type: "string",
	},
	imageUrl: {
		source: "attribute",
		selector: ".eb-infobox-image-wrapper",
		attribute: "data-image-url",
	},
	imageId: {
		type: "string",
	},

	header: {
		type: "text",
		selector: ".eb-infobox-header",
		default: "This is an info box",
	},
	content: {
		type: "text",
		selector: ".eb-infobox-content",
		default:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	order: {
		type: "number",
		default: 0,
	},

	// Button settings attributes ⬇
	showButton: {
		type: "boolean",
		default: false,
	},

	buttonText: {
		type: "string",
		default: "Click Me",
	},
	buttonSize: {
		type: "string",
		default: "normal",
	},
	buttonAlign: {
		type: "string",
		default: "center",
	},

	// Button padding attributes ⬇
	buttonPaddingUnit: {
		type: "string",
		default: "px",
	},

	buttonPaddingTop: {
		type: "string",
		default: "12",
	},
	buttonPaddingRight: {
		type: "string",
		default: "28",
	},
	buttonPaddingBottom: {
		type: "string",
		default: "12",
	},
	buttonPaddingLeft: {
		type: "string",
		default: "28",
	},

	TABbuttonPaddingUnit: {
		type: "string",
		default: "px",
	},

	TABbuttonPaddingTop: {
		type: "string",
	},
	TABbuttonPaddingRight: {
		type: "string",
	},
	TABbuttonPaddingBottom: {
		type: "string",
	},
	TABbuttonPaddingLeft: {
		type: "string",
	},

	MOBbuttonPaddingUnit: {
		type: "string",
		default: "px",
	},

	MOBbuttonPaddingTop: {
		type: "string",
	},
	MOBbuttonPaddingRight: {
		type: "string",
	},
	MOBbuttonPaddingBottom: {
		type: "string",
	},
	MOBbuttonPaddingLeft: {
		type: "string",
	},

	// infobox head top image height width attributes ⬇
	imageHeight: {
		type: "number",
		default: 150,
	},
	imageWidth: {
		type: "number",
		default: 150,
	},

	TABimageHeight: {
		type: "number",
	},
	TABimageWidth: {
		type: "number",
	},

	MOBimageHeight: {
		type: "number",
	},
	MOBimageWidth: {
		type: "number",
	},

	number: {
		type: "number",
		selector: ".eb-infobox-number",
		default: 0,
	},
	headerTag: {
		type: "string",
		default: "h3",
	},

	boxBackground: {
		type: "string",
	},

	// infobox head top number size attributes ⬇
	numberSize: {
		type: "number",
		default: 36,
	},
	TABnumberSize: {
		type: "number",
	},
	MOBnumberSize: {
		type: "number",
	},

	// infobox head top icon size attributes ⬇
	iconSize: {
		type: "number",
		default: 36,
	},
	TABiconSize: {
		type: "number",
	},
	MOBiconSize: {
		type: "number",
	},

	// colors control attributes ⬇
	iconBackground: {
		type: "string",
	},
	iconColor: {
		type: "string",
	},
	buttonColor: {
		type: "string",
	},
	numberColor: {
		type: "string",
	},
	buttonTextColor: {
		type: "string",
	},
	contentColor: {
		type: "string",
	},
	headerColor: {
		type: "string",
	},

	// wrapper margin padding attributes ⬇
	marginUnit: {
		type: "string",
		default: "px",
	},

	marginTop: {
		type: "string",
	},
	marginRight: {
		type: "string",
	},
	marginBottom: {
		type: "string",
	},
	marginLeft: {
		type: "string",
	},

	paddingUnit: {
		type: "string",
		default: "px",
	},

	paddingTop: {
		type: "string",
		default: "30",
	},
	paddingRight: {
		type: "string",
		default: "70",
	},
	paddingBottom: {
		type: "string",
		default: "30",
	},
	paddingLeft: {
		type: "string",
		default: "70",
	},

	TABmarginUnit: {
		type: "string",
		default: "px",
	},

	TABmarginTop: {
		type: "string",
	},
	TABmarginRight: {
		type: "string",
	},
	TABmarginBottom: {
		type: "string",
	},
	TABmarginLeft: {
		type: "string",
	},

	TABpaddingUnit: {
		type: "string",
		default: "px",
	},

	TABpaddingTop: {
		type: "string",
	},
	TABpaddingRight: {
		type: "string",
	},
	TABpaddingBottom: {
		type: "string",
	},
	TABpaddingLeft: {
		type: "string",
	},

	MOBmarginUnit: {
		type: "string",
		default: "px",
	},

	MOBmarginTop: {
		type: "string",
	},
	MOBmarginRight: {
		type: "string",
	},
	MOBmarginBottom: {
		type: "string",
	},
	MOBmarginLeft: {
		type: "string",
	},

	MOBpaddingUnit: {
		type: "string",
		default: "px",
	},

	MOBpaddingTop: {
		type: "string",
	},
	MOBpaddingRight: {
		type: "string",
	},
	MOBpaddingBottom: {
		type: "string",
	},
	MOBpaddingLeft: {
		type: "string",
	},

	//
	// spacing control attributes ⬇
	// header padding attributes ⬇
	headerPaddingUnit: {
		type: "string",
		default: "px",
	},
	headerPaddingTop: {
		type: "string",
		default: "20",
	},
	headerPaddingRight: {
		type: "string",
	},
	headerPaddingBottom: {
		type: "string",
		default: "20",
	},
	headerPaddingLeft: {
		type: "string",
	},

	TABheaderPaddingUnit: {
		type: "string",
		default: "px",
	},
	TABheaderPaddingTop: {
		type: "string",
	},
	TABheaderPaddingRight: {
		type: "string",
	},
	TABheaderPaddingBottom: {
		type: "string",
	},
	TABheaderPaddingLeft: {
		type: "string",
	},

	MOBheaderPaddingUnit: {
		type: "string",
		default: "px",
	},
	MOBheaderPaddingTop: {
		type: "string",
	},
	MOBheaderPaddingRight: {
		type: "string",
	},
	MOBheaderPaddingBottom: {
		type: "string",
	},
	MOBheaderPaddingLeft: {
		type: "string",
	},

	// content padding attributes ⬇
	contentPaddingUnit: {
		type: "string",
		default: "px",
	},
	contentPaddingTop: {
		type: "string",
	},
	contentPaddingRight: {
		type: "string",
	},
	contentPaddingBottom: {
		type: "string",
		default: "20",
	},
	contentPaddingLeft: {
		type: "string",
	},

	TABcontentPaddingUnit: {
		type: "string",
		default: "px",
	},
	TABcontentPaddingTop: {
		type: "string",
	},
	TABcontentPaddingRight: {
		type: "string",
	},
	TABcontentPaddingBottom: {
		type: "string",
	},
	TABcontentPaddingLeft: {
		type: "string",
	},

	MOBcontentPaddingUnit: {
		type: "string",
		default: "px",
	},
	MOBcontentPaddingTop: {
		type: "string",
	},
	MOBcontentPaddingRight: {
		type: "string",
	},
	MOBcontentPaddingBottom: {
		type: "string",
	},
	MOBcontentPaddingLeft: {
		type: "string",
	},

	// image margin attributes ⬇
	imageMarginTop: {
		type: "string",
	},
	imageMarginRight: {
		type: "string",
	},
	imageMarginBottom: {
		type: "string",
	},
	imageMarginLeft: {
		type: "string",
	},

	TABimageMarginTop: {
		type: "string",
	},
	TABimageMarginRight: {
		type: "string",
	},
	TABimageMarginBottom: {
		type: "string",
	},
	TABimageMarginLeft: {
		type: "string",
	},

	MOBimageMarginTop: {
		type: "string",
	},
	MOBimageMarginRight: {
		type: "string",
	},
	MOBimageMarginBottom: {
		type: "string",
	},
	MOBimageMarginLeft: {
		type: "string",
	},

	// icon padding attributes ⬇
	iconPaddingUnit: {
		type: "string",
		default: "px",
	},
	iconPaddingTop: {
		type: "string",
		default: "20",
	},
	iconPaddingRight: {
		type: "string",
		default: "30",
	},
	iconPaddingBottom: {
		type: "string",
		default: "20",
	},
	iconPaddingLeft: {
		type: "string",
		default: "30",
	},

	TABiconPaddingUnit: {
		type: "string",
		default: "px",
	},
	TABiconPaddingTop: {
		type: "string",
	},
	TABiconPaddingRight: {
		type: "string",
	},
	TABiconPaddingBottom: {
		type: "string",
	},
	TABiconPaddingLeft: {
		type: "string",
	},

	MOBiconPaddingUnit: {
		type: "string",
		default: "px",
	},
	MOBiconPaddingTop: {
		type: "string",
	},
	MOBiconPaddingRight: {
		type: "string",
	},
	MOBiconPaddingBottom: {
		type: "string",
	},
	MOBiconPaddingLeft: {
		type: "string",
	},
	// spacing control attributes Ends
	//

	// Border attributes ⬇
	borderWidth: {
		type: "number",
	},
	borderStyle: {
		type: "string",
		default: "solid",
	},
	borderColor: {
		type: "string",
	},
	borderRadius: {
		type: "number",
	},

	// Shadow attributes ⬇
	shadowColor: {
		type: "string",
	},
	shadowHOffset: {
		type: "number",
	},
	shadowVOffset: {
		type: "number",
	},
	shadowBlur: {
		type: "number",
	},
	shadowSpread: {
		type: "number",
	},
	contentSizeUnit: {
		type: "string",
		default: "px",
	},
	radiusUnit: {
		type: "string",
		default: "px",
	},
	borderWidthUnit: {
		type: "string",
		default: "px",
	},
};

export default attributes;
