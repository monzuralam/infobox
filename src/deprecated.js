/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;
const { omit } = lodash;

import attributes from "./attributes";
import InfoboxContainer from "./components/infobox-save";

const deprecated = [
	{
		attributes: omit(
			{
				...attributes,

				mediaWrapperMargin: {
					type: "number",
					default: 20,
				},

				buttonBgColor: {
					type: "string",
				},

				//
				MOBbuttonRadiusBottom: {
					type: "string",
				},
				MOBbuttonRadiusLeft: {
					type: "string",
				},
				MOBbuttonRadiusRight: {
					type: "string",
				},
				MOBbuttonRadiusTop: {
					type: "string",
				},
				MOBbuttonRadiusUnit: {
					type: "string",
					default: "px",
				},
				TABbuttonRadiusBottom: {
					type: "string",
				},
				TABbuttonRadiusLeft: {
					type: "string",
				},
				TABbuttonRadiusRight: {
					type: "string",
				},
				TABbuttonRadiusTop: {
					type: "string",
				},
				TABbuttonRadiusUnit: {
					type: "string",
					default: "px",
				},
				buttonRadiusBottom: {
					type: "string",
				},
				buttonRadiusLeft: {
					type: "string",
				},
				buttonRadiusRight: {
					type: "string",
				},
				buttonRadiusTop: {
					type: "string",
				},
				buttonRadiusUnit: {
					type: "string",
					default: "px",
				},
				buttonRadiusisLinked: {
					type: "boolean",
					default: true,
				},
			},
			[
				"MOBmcSpRange",
				"TABmcSpRange",
				"mcSpRange",

				//
				"MOBbtbds_Bdr_Bottom",
				"MOBbtbds_Bdr_Left",
				"MOBbtbds_Bdr_Right",
				"MOBbtbds_Bdr_Top",
				"MOBbtbds_Bdr_Unit",
				"MOBbtbds_HBdr_Bottom",
				"MOBbtbds_HBdr_Left",
				"MOBbtbds_HBdr_Right",
				"MOBbtbds_HBdr_Top",
				"MOBbtbds_HBdr_Unit",
				"MOBbtbds_HRds_Bottom",
				"MOBbtbds_HRds_Left",
				"MOBbtbds_HRds_Right",
				"MOBbtbds_HRds_Top",
				"MOBbtbds_HRds_Unit",
				"MOBbtbds_Rds_Bottom",
				"MOBbtbds_Rds_Left",
				"MOBbtbds_Rds_Right",
				"MOBbtbds_Rds_Top",
				"MOBbtbds_Rds_Unit",
				"TABbtbds_Bdr_Bottom",
				"TABbtbds_Bdr_Left",
				"TABbtbds_Bdr_Right",
				"TABbtbds_Bdr_Top",
				"TABbtbds_Bdr_Unit",
				"TABbtbds_HBdr_Bottom",
				"TABbtbds_HBdr_Left",
				"TABbtbds_HBdr_Right",
				"TABbtbds_HBdr_Top",
				"TABbtbds_HBdr_Unit",
				"TABbtbds_HRds_Bottom",
				"TABbtbds_HRds_Left",
				"TABbtbds_HRds_Right",
				"TABbtbds_HRds_Top",
				"TABbtbds_HRds_Unit",
				"TABbtbds_Rds_Bottom",
				"TABbtbds_Rds_Left",
				"TABbtbds_Rds_Right",
				"TABbtbds_Rds_Top",
				"TABbtbds_Rds_Unit",
				"btbds_Bdr_Bottom",
				"btbds_Bdr_Left",
				"btbds_Bdr_Right",
				"btbds_Bdr_Top",
				"btbds_Bdr_Unit",
				"btbds_Bdr_isLinked",
				"btbds_BorderType",
				"btbds_HBdr_Bottom",
				"btbds_HBdr_Left",
				"btbds_HBdr_Right",
				"btbds_HBdr_Top",
				"btbds_HBdr_Unit",
				"btbds_HBdr_isLinked",
				"btbds_HRds_Bottom",
				"btbds_HRds_Left",
				"btbds_HRds_Right",
				"btbds_HRds_Top",
				"btbds_HRds_Unit",
				"btbds_HRds_isLinked",
				"btbds_HborderColor",
				"btbds_HborderStyle",
				"btbds_Rds_Bottom",
				"btbds_Rds_Left",
				"btbds_Rds_Right",
				"btbds_Rds_Top",
				"btbds_Rds_Unit",
				"btbds_Rds_isLinked",
				"btbds_blur",
				"btbds_borderColor",
				"btbds_borderStyle",
				"btbds_borderTransition",
				"btbds_hOffset",
				"btbds_hoverBlur",
				"btbds_hoverHOffset",
				"btbds_hoverInset",
				"btbds_hoverShadowColor",
				"btbds_hoverSpread",
				"btbds_hoverVOffset",
				"btbds_inset",
				"btbds_radiusTransition",
				"btbds_shadowColor",
				"btbds_shadowTransition",
				"btbds_shadowType",
				"btbds_spread",
				"btbds_vOffset",

				//
				"btbg_backgroundColor",
				"btbg_backgroundType",
				"btbg_bg_hoverType",
				"btbg_bg_transition",
				"btbg_gradientColor",
				"hov_btbg_backgroundColor",
				"hov_btbg_backgroundType",
				"hov_btbg_gradientColor",

				//
				"btnEffect",
			]
		),

		save: ({ attributes }) => {
			const {
				blockId,
				selectedIcon,

				number = 0,
				media,
				imageUrl,
				enableSubTitle,
				enableDescription,
				infoboxLink,
				enableButton,
				buttonText,
				title,
				subTitle,
				description,
				//
				titleTag,
				subTitleTag,
			} = attributes;

			const requiredProps = {
				selectedIcon,
				blockId,
				number,
				media,
				imageUrl,
				enableSubTitle,
				enableDescription,
				infoboxLink,
				enableButton,
				buttonText,
				title,
				subTitle,
				description,
				titleTag,
				subTitleTag,
			};

			return (
				<div {...useBlockProps.save()}>
					<InfoboxContainer requiredProps={requiredProps} />
				</div>
			);
		},
	},
	{
		attributes: omit(
			{
				...attributes,
			},
			["isInfoClick"]
		),

		save: ({ attributes }) => {
			const {
				blockId,
				selectedIcon,

				number = 0,
				media,
				imageUrl,
				enableSubTitle,
				enableDescription,
				infoboxLink,
				enableButton,
				buttonText,
				title,
				subTitle,
				description,
				//
				titleTag,
				subTitleTag,
			} = attributes;

			const requiredProps = {
				selectedIcon,
				blockId,
				number,
				media,
				imageUrl,
				enableSubTitle,
				enableDescription,
				infoboxLink,
				enableButton,
				buttonText,
				title,
				subTitle,
				description,
				titleTag,
				subTitleTag,
			};

			return (
				<div {...useBlockProps.save()}>
					<InfoboxContainer requiredProps={requiredProps} />
				</div>
			);
		},
	},
];

export default deprecated;
