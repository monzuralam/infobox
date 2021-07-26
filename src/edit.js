/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useBlockProps, MediaUpload, RichText } = wp.blockEditor;
const { Button } = wp.components;
const { useEffect } = wp.element;

const { select } = wp.data;

/**
 * Internal dependencies
 */

import "./editor.scss";

import {
	softMinifyCssStrings,
	isCssExists,
	generateBackgroundControlStyles,
	generateDimensionsControlStyles,
	generateTypographyStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";
import Inspector from "./inspector";
import {
	typoPrefix_content,
	typoPrefix_title,
	typoPrefix_subTitle,
	typoPrefix_number,
	typoPrefix_buttonText,
} from "./constants/typographyPrefixConstants";

import {
	mediaBackground,
	mediaBgMargin,
	mediaBgRadius,
	buttonRadius,
	buttonPadding,
	titlePadding,
	contentPadding,
	subTitlePadding,
	wrapperPadding,
	wrapperMargin,
} from "./constants/dimensionsConstants";

import { infoWrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";

import {
	mediaIconSize,
	mediaImageWidth,
	mediaImageHeight,
} from "./constants/rangeNames";

const Edit = ({ attributes, setAttributes, isSelected, clientId }) => {
	const {
		// responsive control attributes ⬇
		resOption,

		// blockMeta is for keeping all the styles
		blockMeta,

		// blockId attribute for making unique className and other uniqueness
		blockId,

		// isOverlay is to check if a overlay on the block's background should exist
		isOverlay,

		selectedIcon,
		media,
		number = 0,
		imageUrl,
		infoboxLink,
		enableSubTitle,
		enableDescription,
		enableButton,
		buttonText,
		title,
		subTitle,
		description,

		//
		titleTag,
		subTitleTag,

		//
		imageId,

		//
		iconSize,
		TABiconSize,
		MOBiconSize,

		//
		flexDirection,

		//
		mediaAlignSelf,

		//
		contentAlignment,

		//
		mediaWrapperMargin,

		//
		useNumIconBg,

		//
		numIconColor,

		//
		numIconBgType,

		//
		numIconBgColor,

		//
		numIconBgGradient,

		//
		[`${mediaImageWidth}Unit`]: mediaImgWidthUnit,
		[`TAB${mediaImageWidth}Unit`]: TABmediaImgWidthUnit,
		[`MOB${mediaImageWidth}Unit`]: MOBmediaImgWidthUnit,

		//
		mediaImgWidth,

		//
		TABmediaImgWidth,

		//
		MOBmediaImgWidth,

		//
		isMediaImgHeightAuto,

		//
		mediaImgHeightUnit,

		//
		mediaImgHeight,

		//
		TABmediaImgHeight,

		//
		MOBmediaImgHeight,

		//
		buttonTextColor = "#30267A",

		//
		titleColor = "#fff",

		//
		subTitleColor = "#fff",

		//
		descriptionColor = "#fff",

		//
		buttonBgColor = "#E1D8FF",

		//
		mediaAlignment,

		//
		contentsAlignment,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating a unique blockId for each block's unique className
	useEffect(() => {
		const BLOCK_PREFIX = "eb-infobox";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	//
	// styling codes starts from here
	//

	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_title,
		defaultFontSize: 26,
	});

	const {
		typoStylesDesktop: subTitleTypoStylesDesktop,
		typoStylesTab: subTitleTypoStylesTab,
		typoStylesMobile: subTitleTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_subTitle,
		defaultFontSize: 22,
	});

	const {
		typoStylesDesktop: contentTypoStylesDesktop,
		typoStylesTab: contentTypoStylesTab,
		typoStylesMobile: contentTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_content,
		defaultFontSize: 20,
	});

	const {
		typoStylesDesktop: buttonTypoStylesDesktop,
		typoStylesTab: buttonTypoStylesTab,
		typoStylesMobile: buttonTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_buttonText,
		defaultFontSize: 20,
	});

	const {
		typoStylesDesktop: numTypoStylesDesktop,
		typoStylesTab: numTypoStylesTab,
		typoStylesMobile: numTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_number,
		defaultFontSize: 28,
	});

	const {
		dimensionStylesDesktop: mediaBgPaddingDesktop,
		dimensionStylesTab: mediaBgPaddingTab,
		dimensionStylesMobile: mediaBgPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: mediaBackground,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: mediaRadiusStylesDesktop,
		dimensionStylesTab: mediaRadiusStylesTab,
		dimensionStylesMobile: mediaRadiusStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: mediaBgRadius,
		styleFor: "border-radius",
	});

	const {
		dimensionStylesDesktop: mediaBgMarginStylesDesktop,
		dimensionStylesTab: mediaBgMarginStylesTab,
		dimensionStylesMobile: mediaBgMarginStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: mediaBgMargin,
		styleFor: "margin",
	});

	const {
		dimensionStylesDesktop: buttonPaddingStylesDesktop,
		dimensionStylesTab: buttonPaddingStylesTab,
		dimensionStylesMobile: buttonPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: buttonPadding,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: buttonRadiusStylesDesktop,
		dimensionStylesTab: buttonRadiusStylesTab,
		dimensionStylesMobile: buttonRadiusStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: buttonRadius,
		styleFor: "border-radius",
	});

	const {
		dimensionStylesDesktop: titlePaddingStylesDesktop,
		dimensionStylesTab: titlePaddingStylesTab,
		dimensionStylesMobile: titlePaddingStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: titlePadding,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: subTitlePaddingStylesDesktop,
		dimensionStylesTab: subTitlePaddingStylesTab,
		dimensionStylesMobile: subTitlePaddingStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: subTitlePadding,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: contentPaddingStylesDesktop,
		dimensionStylesTab: contentPaddingStylesTab,
		dimensionStylesMobile: contentPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: contentPadding,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: wrapperPaddingStylesDesktop,
		dimensionStylesTab: wrapperPaddingStylesTab,
		dimensionStylesMobile: wrapperPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: wrapperPadding,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: wrapperMarginStylesDesktop,
		dimensionStylesTab: wrapperMarginStylesTab,
		dimensionStylesMobile: wrapperMarginStylesMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: wrapperMargin,
		styleFor: "margin",
	});

	const {
		backgroundStylesDesktop,
		hoverBackgroundStylesDesktop,
		backgroundStylesTab,
		hoverBackgroundStylesTab,
		backgroundStylesMobile,
		hoverBackgroundStylesMobile,
		overlayStylesDesktop,
		hoverOverlayStylesDesktop,
		overlayStylesTab,
		hoverOverlayStylesTab,
		overlayStylesMobile,
		hoverOverlayStylesMobile,
		bgTransitionStyle,
		ovlTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: infoWrapBg,
		// noOverlay: true,
		// noMainBgi: true,
		// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
	});

	const {
		styesDesktop: bdShadowStyesDesktop,
		styesTab: bdShadowStyesTab,
		styesMobile: bdShadowStyesMobile,
		stylesHoverDesktop: bdShadowStylesHoverDesktop,
		stylesHoverTab: bdShadowStylesHoverTab,
		stylesHoverMobile: bdShadowStylesHoverMobile,
		transitionStyle: bdShadowTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: wrpBdShadow,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});

	const {
		rangeStylesDesktop: iconSizeDesktop,
		rangeStylesTab: iconSizeTab,
		rangeStylesMobile: iconSizeMobile,
	} = generateResponsiveRangeStyles({
		controlName: mediaIconSize,
		customUnit: "px",
		property: "font-size",
		attributes,
	});

	const {
		rangeStylesDesktop: mediaImgHeightDesktop,
		rangeStylesTab: mediaImgHeightTab,
		rangeStylesMobile: mediaImgHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: mediaImageHeight,
		property: "height",
		attributes,
	});

	const {
		rangeStylesDesktop: mediaImgWidthDesktop,
		rangeStylesTab: mediaImgWidthTab,
		rangeStylesMobile: mediaImgWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: mediaImageWidth,
		property: "width",
		attributes,
	});

	const wrapperStylesDesktop = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${bdShadowStyesDesktop}
			${backgroundStylesDesktop}
			overflow: hidden;
			transition: ${bgTransitionStyle}, ${bdShadowTransitionStyle};
		}

		.eb-infobox-wrapper.${blockId}:hover{	
			${hoverBackgroundStylesDesktop}
			${bdShadowStylesHoverDesktop}
		}
		
		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesDesktop}
			transition: ${ovlTransitionStyle};
		}

		.eb-infobox-wrapper.${blockId}:hover:before{	
			${hoverOverlayStylesDesktop}
		}

	`;

	const wrapperStylesTab = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${backgroundStylesTab}
			${bdShadowStyesTab}
		}

		.eb-infobox-wrapper.${blockId}:hover{		
			${hoverBackgroundStylesTab}
			${bdShadowStylesHoverTab}
		}

		
		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesTab}
		}

		.eb-infobox-wrapper.${blockId}:hover:before{	
			${hoverOverlayStylesTab}
		}
	`;

	const wrapperStylesMobile = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}			
			${backgroundStylesMobile}
			${bdShadowStyesMobile}
		}

		.eb-infobox-wrapper.${blockId}:hover{
			${hoverBackgroundStylesMobile}
			${bdShadowStylesHoverMobile}
		}

		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesMobile}
		}

		
		.eb-infobox-wrapper.${blockId}:hover:before{	
			${hoverOverlayStylesMobile}
		}
	`;

	const wrapperInnerStylesDesktop = `	
		.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner {
			display: flex;
			position: relative;
			${flexDirection ? `flex-direction: ${flexDirection};` : " "} 
		}
	`;

	const mediaStylesDesktop = `
	${
		media !== "none"
			? `
			.eb-infobox-wrapper.${blockId} .icon-img-wrapper {
				${
					mediaAlignment
						? `align-self: ${mediaAlignment};`
						: `align-self: ${mediaAlignSelf || "center"};`
				}

				${mediaBgMarginStylesDesktop}

				${
					flexDirection === "row"
						? `margin-right: ${mediaWrapperMargin}px;`
						: flexDirection === "row-reverse"
						? `margin-left: ${mediaWrapperMargin}px;`
						: flexDirection === "column"
						? `margin-bottom: ${mediaWrapperMargin}px;`
						: flexDirection === "column-reverse"
						? `margin-top: ${mediaWrapperMargin}px;`
						: " "
				}

				overflow: hidden;
			}


			${
				media === "image"
					? `

					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
						max-width: 100%;
						${mediaImgWidthUnit === "%" ? mediaImgWidthDesktop : " "}
					}
					
					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {
						max-width: 100%;
						object-fit: cover;
						display: inline-block;
						${imageUrl ? mediaRadiusStylesDesktop : " "}
						
						${mediaImgWidthUnit === "%" ? `width: 100%;` : mediaImgWidthDesktop}
						${isMediaImgHeightAuto ? `height:auto;` : mediaImgHeightDesktop}
						
					}

					.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
						overflow: hidden;
						display:flex;
						${imageUrl ? " " : mediaRadiusStylesDesktop}
					}
					`
					: " "
			}



			${
				media === "number" || media === "icon"
					? `
				
					.eb-infobox-wrapper.${blockId} .number-or-icon {
					
						${mediaBgPaddingDesktop}
						${mediaRadiusStylesDesktop}
		
						${
							useNumIconBg
								? `${
										numIconBgType === "fill"
											? `background-color: ${numIconBgColor};`
											: numIconBgType === "gradient"
											? `background-image: ${numIconBgGradient};`
											: " "
								  }`
								: " "
						}						
						
					}
		
					.eb-infobox-wrapper.${blockId} .number-or-icon > span{
						color: ${numIconColor || "#fff"};
					}
					
					`
					: " "
			}

		

			${
				media === "number"
					? `

				.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
					${numTypoStylesDesktop}
				}				
				
				`
					: " "
			}

			${
				media === "icon"
					? `
				
					.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
						${iconSizeDesktop}
						
					}

					`
					: " "
			}


		`
			: " "
	}

	`;

	const mediaStylesTab = `
	${
		media !== "none"
			? `

			.eb-infobox-wrapper.${blockId} .icon-img-wrapper {

				${mediaBgMarginStylesTab}				
			}

			${
				media === "number" || media === "icon"
					? `
			
					.eb-infobox-wrapper.${blockId} .number-or-icon {
						${mediaRadiusStylesTab}
						${mediaBgPaddingTab}				
					}
					
					`
					: " "
			}


			${
				media === "number"
					? `

					.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
						${numTypoStylesTab}
					}				
				
				`
					: " "
			}

			
			${
				media === "icon"
					? `
				
					.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
						${iconSizeTab}
					}
				
				`
					: " "
			}

			
			${
				media === "image"
					? `
						
				.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
					${
						TABmediaImgWidthUnit === "%"
							? mediaImgWidthTab
							: mediaImgWidthUnit === "%"
							? `width: auto;`
							: " "
					}
				}

				.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {
					
					${
						TABmediaImgWidthUnit === "%"
							? mediaImgWidthUnit === "%"
								? " "
								: `width: 100%;`
							: mediaImgWidthTab
					}
					
					${isMediaImgHeightAuto ? `height:auto;` : mediaImgHeightTab}
					
				}

				
				.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
					${mediaRadiusStylesTab}

				}
				
				`
					: " "
			}




		`
			: " "
	}
	
	`;

	const mediaStylesMobile = `
	${
		media !== "none"
			? `

			.eb-infobox-wrapper.${blockId} .icon-img-wrapper {
				
				${mediaBgMarginStylesMobile}
			}

			${
				media === "number" || media === "icon"
					? `

					.eb-infobox-wrapper.${blockId} .number-or-icon {
						${mediaRadiusStylesMobile}
						${mediaBgPaddingMobile}				
					}
					
					`
					: " "
			}

			${
				media === "number"
					? `

				.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
					${numTypoStylesMobile}
				}				
				
				`
					: " "
			}

			${
				media === "icon"
					? `

					.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
						${iconSizeMobile}
					}			
				
				`
					: " "
			}

			
			
			${
				media === "image"
					? `

								
				.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
					${
						MOBmediaImgWidthUnit === "%"
							? mediaImgWidthMobile
							: TABmediaImgWidthUnit === "%"
							? `width: auto;`
							: " "
					}
				}

				
				.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {
					
					${
						MOBmediaImgWidthUnit === "%"
							? TABmediaImgWidthUnit === "%"
								? " "
								: `width: 100%;`
							: mediaImgWidthMobile
					}
					
					${isMediaImgHeightAuto ? `height:auto;` : mediaImgHeightMobile}

				}

				
				.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
					${mediaRadiusStylesMobile}
				}
				
				`
					: " "
			}



		`
			: " "
	}
		
	
	`;

	const contentStylesDesktop = `
		.eb-infobox-wrapper.${blockId} .contents-wrapper {
			flex: 1;
			${contentAlignment ? `text-align: ${contentAlignment};` : " "} 

			${
				contentsAlignment
					? `text-align: ${contentsAlignment};`
					: `text-align: ${contentAlignment};`
			}
		}

		.eb-infobox-wrapper.${blockId} .title {
			margin: 0;
			padding: 10px 0;
			${titleTypoStylesDesktop}
			${titlePaddingStylesDesktop}
			${titleColor ? `color: ${titleColor};` : " "}
		}

		${
			enableSubTitle
				? `			
				.eb-infobox-wrapper.${blockId} .subtitle {
					margin: 0;
					padding: 10px 0;
					${subTitleTypoStylesDesktop}
					${subTitlePaddingStylesDesktop}
					${subTitleColor ? `color: ${subTitleColor};` : " "}
				}			
				`
				: " "
		}
		
		${
			enableDescription
				? `
			
				.eb-infobox-wrapper.${blockId} .description {
					margin: 0;
					padding: 10px 0;
					${contentTypoStylesDesktop}
					${contentPaddingStylesDesktop}
					${descriptionColor ? `color: ${descriptionColor};` : " "}

				}
				
				`
				: " "
		}

		
		${
			enableButton
				? `
			
				.eb-infobox-wrapper.${blockId} a{
					text-decoration:none;
				}

				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesDesktop}
					${buttonPaddingStylesDesktop}
					${buttonRadiusStylesDesktop}
					
					${buttonBgColor ? `background-color: ${buttonBgColor};` : " "}
					${buttonTextColor ? `color: ${buttonTextColor};` : " "}
					
				}
				
				`
				: " "
		}


	`;

	const contentStylesTab = `
		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesTab}
			${titlePaddingStylesTab}

		}
		
		${
			enableSubTitle
				? `			
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesTab}
					${subTitlePaddingStylesTab}
		
				}			
				`
				: " "
		}

		${
			enableDescription
				? `
				.eb-infobox-wrapper.${blockId} .description {
					${contentTypoStylesTab}
					${contentPaddingStylesTab}
		
				}				
				`
				: " "
		}
		
		${
			enableButton
				? `
				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesTab}
					${buttonPaddingStylesTab}
					${buttonRadiusStylesTab}
				}
				
				`
				: " "
		}
	
	`;

	const contentStylesMobile = `
		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesMobile}
			${titlePaddingStylesMobile}

		}
		
		${
			enableSubTitle
				? `
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesMobile}
					${subTitlePaddingStylesMobile}
		
				}				
				`
				: " "
		}

		${
			enableDescription
				? `
				.eb-infobox-wrapper.${blockId} .description {
					${contentTypoStylesMobile}
					${contentPaddingStylesMobile}
		
				}
				
				`
				: " "
		}
		
		${
			enableButton
				? `
			
				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesMobile}
					${buttonPaddingStylesMobile}
					${buttonRadiusStylesMobile}
		
				}
				
				`
				: " "
		}
		
		

	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`		
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(wrapperInnerStylesDesktop) ? wrapperInnerStylesDesktop : " "}
		${isCssExists(mediaStylesDesktop) ? mediaStylesDesktop : " "}
		${isCssExists(contentStylesDesktop) ? contentStylesDesktop : " "}	
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		${isCssExists(mediaStylesTab) ? mediaStylesTab : " "}
		${isCssExists(contentStylesTab) ? contentStylesTab : " "}
		
		
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
		${isCssExists(mediaStylesMobile) ? mediaStylesMobile : " "}
		${isCssExists(contentStylesMobile) ? contentStylesMobile : " "}
	
	`);

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		// Edit view
		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "Tablet" ? tabAllStyles : " "}
				${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>

			<div className={`${blockId} eb-infobox-wrapper`}>
				<div className="infobox-wrapper-inner">
					{media === "icon" ? (
						<div className="icon-img-wrapper">
							<div className="eb-icon number-or-icon">
								<span
									data-icon={selectedIcon}
									className={`eb-infobox-icon-data-selector  ${selectedIcon}`}
								></span>
							</div>
						</div>
					) : null}

					{media === "number" ? (
						<div className="icon-img-wrapper">
							<div className="eb-infobox-num-wrapper number-or-icon">
								<span className="eb-infobox-number">{number}</span>
							</div>
						</div>
					) : null}

					{media === "image" ? (
						<div className="icon-img-wrapper">
							<div className="eb-infobox-image-wrapper">
								<MediaUpload
									onSelect={({ id, url }) =>
										setAttributes({ imageUrl: url, imageId: id })
									}
									type="image"
									value={imageId}
									render={({ open }) => {
										if (!imageUrl) {
											return (
												<Button
													className="eb-infobox-img-btn components-button"
													label={__("Upload Image")}
													icon="format-image"
													onClick={open}
												/>
											);
										} else {
											return (
												<img className="eb-infobox-image" src={imageUrl} />
											);
										}
									}}
								/>
							</div>
						</div>
					) : null}

					<div className="contents-wrapper">
						<RichText
							tagName={titleTag}
							className="title"
							value={title}
							onChange={(title) => setAttributes({ title })}
						/>

						{enableSubTitle ? (
							<RichText
								tagName={subTitleTag}
								className="subtitle"
								value={subTitle}
								onChange={(subTitle) => setAttributes({ subTitle })}
							/>
						) : null}

						{enableDescription ? (
							<RichText
								tagName="p"
								className="description"
								value={description}
								onChange={(description) => setAttributes({ description })}
							/>
						) : null}

						{enableButton ? (
							<div className="eb-infobox-btn-wrapper">
								<a
									href={infoboxLink}
									// style={{ pointerEvents: "none" }}
									className="infobox-btn"
								>
									{buttonText}
								</a>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>,
	];
};

export default Edit;
