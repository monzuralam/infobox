/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, MediaUpload, RichText } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import "./editor.scss";

/**
 * Internal dependencies
 */

import {
	softMinifyCssStrings,
	isCssExists,
	generateBackgroundControlStyles,
	generateDimensionsControlStyles,
	generateTypographyStyles,
	generateBorderShadowStyles,
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
	wrp_border,
	wrp_radius,
} from "./constants/dimensionsConstants";

import { infoWrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";

const Edit = ({ attributes, setAttributes, isSelected, clientId }) => {
	const {
		// responsive control attributes ⬇
		resOption,

		// blockMeta is for keeping all the styles
		blockMeta,

		// blockId attribute for making unique className and other uniqueness
		blockId,

		// isOverly is to check if a overly on the block's background should exist
		isOverly,

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
		mediaImgWidthUnit,

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
		buttonTextColor = "#fff",

		//
		titleColor = "#fff",

		//
		subTitleColor = "#fff",

		//
		descriptionColor = "#fff",

		//
		buttonBgColor = "#7a137a",

		//
		mediaAlignment,

		//
		contentsAlignment,

		// // border attributes ⬇
		// wrp_borderColor,
		// wrp_borderStyle,
		// // wrp_borderWidth,
		// // wrp_borderRadius,
		// // wrp_radiusUnit,

		// // shadow attributes  ⬇
		// wrp_shadowColor,
		// wrp_hOffset = 0,
		// wrp_vOffset = 0,
		// wrp_blur = 0,
		// wrp_spread = 0,
		// wrp_inset,

		// wrp_hoverShadowColor = wrp_shadowColor,
		// wrp_hoverHOffset = wrp_hOffset,
		// wrp_hoverVOffset = wrp_vOffset,
		// wrp_hoverBlur = wrp_blur,
		// wrp_hoverSpread = wrp_spread,

		// // transition attributes ⬇
		// wrp_transitionTime,

		// // background attributes ⬇
		// wrp_backgroundType,
		// wrp_backgroundColor,
		// wrp_gradientColor,
		// wrp_bgImageURL,
		// wrp_backgroundSize,
		// wrp_bgImgCustomSize,
		// wrp_bgImgCustomSizeUnit,
		// wrp_bgImgPos,
		// wrp_bgImgcustomPosX,
		// wrp_bgImgcustomPosXUnit,
		// wrp_bgImgcustomPosY,
		// wrp_bgImgcustomPosYUnit,
		// wrp_bgImgAttachment,
		// wrp_bgImgRepeat,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

		if (!/eb\-res\-option\-/i.test(bodyClasses)) {
			document.body.classList.add("eb-res-option-desktop");
			setAttributes({
				resOption: "desktop",
			});
		} else {
			const resOption = bodyClasses
				.match(/eb-res-option-[^\s]+/g)[0]
				.split("-")[3];
			setAttributes({ resOption });
		}
	}, []);

	// this useEffect is for creating a unique blockId for each block's unique className
	useEffect(() => {
		// const current_block_id = attributes.blockId;

		const BLOCK_PREFIX = "eb-infobox";
		const unique_id =
			BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);

		/**
		 * Define and Generate Unique Block ID
		 */
		if (!blockId) {
			setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		 */
		const all_blocks = wp.data.select("core/block-editor").getBlocks();

		// console.log({ all_blocks });

		let duplicateFound = false;
		const fixDuplicateBlockId = (blocks) => {
			if (duplicateFound) return;
			for (const item of blocks) {
				const { innerBlocks } = item;
				if (item.attributes.blockId === blockId) {
					if (item.clientId !== clientId) {
						setAttributes({ blockId: unique_id });
						// console.log("found a duplicate");
						duplicateFound = true;
						return;
					} else if (innerBlocks.length > 0) {
						fixDuplicateBlockId(innerBlocks);
					}
				} else if (innerBlocks.length > 0) {
					fixDuplicateBlockId(innerBlocks);
				}
			}
		};

		fixDuplicateBlockId(all_blocks);

		// console.log({ blockId });
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

	// const {
	// 	dimensionStylesDesktop: wrp_borderStylesDesktop,
	// 	dimensionStylesTab: wrp_borderStylesTab,
	// 	dimensionStylesMobile: wrp_borderStylesMobile,
	// } = generateDimensionsControlStyles({
	// 	attributes,
	// 	controlName: wrp_border,
	// 	styleFor: "border",
	// });

	// const {
	// 	dimensionStylesDesktop: wrp_radiusStylesDesktop,
	// 	dimensionStylesTab: wrp_radiusStylesTab,
	// 	dimensionStylesMobile: wrp_radiusStylesMobile,
	// } = generateDimensionsControlStyles({
	// 	attributes,
	// 	controlName: wrp_radius,
	// 	styleFor: "border-radius",
	// });

	const {
		backgroundStylesDesktop,
		backgroundStylesTab,
		backgroundStylesMobile,
		overlyStyles,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: infoWrapBg,
	});

	const {
		styesDesktop: bdShadowStyesDesktop,
		styesTab: bdShadowStyesTab,
		styesMobile: bdShadowStyesMobile,
		stylesHover: bdShadowStylesHover,
	} = generateBorderShadowStyles({
		controlName: wrpBdShadow,
		attributes,
	});

	const wrapperStylesDesktop = `
		.${blockId} {
			position: relative;
			overflow: hidden;
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${bdShadowStyesDesktop}
			${backgroundStylesDesktop}		

		}

		.${blockId}:hover{		
			${bdShadowStylesHover}
		}

	
        .${blockId}:before{
			${overlyStyles}
		}
		

	`;

	const wrapperStylesTab = `
		.${blockId} {
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${backgroundStylesTab}
			${bdShadowStyesTab}
		}

	`;

	const wrapperStylesMobile = `
		.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}			
			${backgroundStylesMobile}
			${bdShadowStyesMobile}
		}
	`;

	const wrapperInnerStylesDesktop = `	
		.${blockId} .infobox-wrapper-inner {
			display: flex;
			${flexDirection ? `flex-direction: ${flexDirection};` : " "} 
			
		}
	
	`;

	const mediaStylesDesktop = `
	${
		media !== "none"
			? ` 
			
			.${blockId} .icon-img-wrapper {

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

					
				.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
					max-width: 100%;
					${
						mediaImgWidthUnit === "%" && mediaImgWidth
							? `width: ${mediaImgWidth}${mediaImgWidthUnit};`
							: " "
					}
				}
				
				.${blockId} .infobox-wrapper-inner img {
					max-width: 100%;
					object-fit: cover;
					display: inline-block;
					${imageUrl ? mediaRadiusStylesDesktop : " "}
					
					${
						mediaImgWidthUnit !== "%"
							? mediaImgWidth
								? `width: ${mediaImgWidth}${mediaImgWidthUnit};`
								: " "
							: mediaImgWidth
							? `width: 100${mediaImgWidthUnit};`
							: " "
					}

					
				
					${
						isMediaImgHeightAuto
							? `height:auto;`
							: mediaImgHeight
							? `height: ${mediaImgHeight}${mediaImgHeightUnit};`
							: " "
					}
					
				}
				

				.${blockId} .eb-infobox-image-wrapper{
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
				
					.${blockId} .number-or-icon {
					
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
		
					.${blockId} .number-or-icon > span{
						color: ${numIconColor || "#fff"};
					}
					
					`
					: " "
			}

		

			${
				media === "number"
					? `

				.${blockId} span.eb-infobox-number{
					${numTypoStylesDesktop}
				}				
				
				`
					: " "
			}

			${
				media === "icon"
					? `
				
					.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
						${iconSize ? `font-size: ${iconSize}px;` : " "}
						
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

			.${blockId} .icon-img-wrapper {

				${mediaBgMarginStylesTab}				
			}

			${
				media === "number" || media === "icon"
					? `
			
					.${blockId} .number-or-icon {
						${mediaRadiusStylesTab}
						${mediaBgPaddingTab}				
					}
					
					`
					: " "
			}


			${
				media === "number"
					? `

					.${blockId} span.eb-infobox-number{
						${numTypoStylesTab}
					}				
				
				`
					: " "
			}

			
			${
				media === "icon"
					? `
				
					.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
						${TABiconSize ? `font-size: ${TABiconSize}px;` : " "}
					}
				
				`
					: " "
			}

			
			${
				media === "image"
					? `
						
				.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
					${
						mediaImgWidthUnit === "%" && TABmediaImgWidth
							? `width: ${TABmediaImgWidth}${mediaImgWidthUnit};`
							: " "
					}
				}

				.${blockId} .infobox-wrapper-inner img {
					
					${
						mediaImgWidthUnit !== "%"
							? TABmediaImgWidth
								? `width: ${TABmediaImgWidth}${mediaImgWidthUnit};`
								: " "
							: TABmediaImgWidth
							? `width: 100${mediaImgWidthUnit};`
							: " "
					}
					
					${
						isMediaImgHeightAuto
							? `height:auto;`
							: TABmediaImgHeight
							? `height: ${TABmediaImgHeight}${mediaImgHeightUnit};`
							: " "
					}
					
				}

				
				.${blockId} .eb-infobox-image-wrapper{
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

			.${blockId} .icon-img-wrapper {
				
				${mediaBgMarginStylesMobile}
			}



			${
				media === "number" || media === "icon"
					? `

					.${blockId} .number-or-icon {
						${mediaRadiusStylesMobile}
						${mediaBgPaddingMobile}				
					}
					
					`
					: " "
			}





			${
				media === "number"
					? `

				.${blockId} span.eb-infobox-number{
					${numTypoStylesMobile}
				}				
				
				`
					: " "
			}



			${
				media === "icon"
					? `

					.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
						${MOBiconSize ? `font-size: ${MOBiconSize}px;` : " "}
					}			
				
				`
					: " "
			}

			
			
			${
				media === "image"
					? `

								
				.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
					${
						mediaImgWidthUnit === "%" && MOBmediaImgWidth
							? `width: ${MOBmediaImgWidth}${mediaImgWidthUnit};`
							: " "
					}
				}

				
				.${blockId} .infobox-wrapper-inner img {
					
					${
						mediaImgWidthUnit !== "%"
							? MOBmediaImgWidth
								? `width: ${MOBmediaImgWidth}${mediaImgWidthUnit};`
								: " "
							: MOBmediaImgWidth
							? `width: 100${mediaImgWidthUnit};`
							: " "
					}
					
					${
						isMediaImgHeightAuto
							? `height:auto;`
							: MOBmediaImgHeight
							? `height: ${MOBmediaImgHeight}${mediaImgHeightUnit};`
							: " "
					}

				}

				
				.${blockId} .eb-infobox-image-wrapper{
					
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
		.${blockId} .contents-wrapper {
			flex: 1;
			${contentAlignment ? `text-align: ${contentAlignment};` : " "} 

			${
				contentsAlignment
					? `text-align: ${contentsAlignment};`
					: `text-align: ${contentAlignment};`
			}
		}

		.${blockId} .title {
			margin: 0;
			padding: 10px 0;
			${titleTypoStylesDesktop}
			${titlePaddingStylesDesktop}
			${titleColor ? `color: ${titleColor};` : " "}
		}

		${
			enableSubTitle
				? `			
				.${blockId} .subtitle {
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
			
				.${blockId} .description {
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
			
				.${blockId} a{
					text-decoration:none;
				}

				.${blockId} .contents-wrapper .infobox-btn{
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
		.${blockId} .title {
			${titleTypoStylesTab}
			${titlePaddingStylesTab}

		}
		
		${
			enableSubTitle
				? `			
				.${blockId} .subtitle {
					${subTitleTypoStylesTab}
					${subTitlePaddingStylesTab}
		
				}			
				`
				: " "
		}

		${
			enableDescription
				? `
				.${blockId} .description {
					${contentTypoStylesTab}
					${contentPaddingStylesTab}
		
				}				
				`
				: " "
		}
		
		${
			enableButton
				? `
				.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesTab}
					${buttonPaddingStylesTab}
					${buttonRadiusStylesTab}
				}
				
				`
				: " "
		}
	
	`;

	const contentStylesMobile = `
		.${blockId} .title {
			${titleTypoStylesMobile}
			${titlePaddingStylesMobile}

		}
		
		${
			enableSubTitle
				? `
				.${blockId} .subtitle {
					${subTitleTypoStylesMobile}
					${subTitlePaddingStylesMobile}
		
				}				
				`
				: " "
		}

		${
			enableDescription
				? `
				.${blockId} .description {
					${contentTypoStylesMobile}
					${contentPaddingStylesMobile}
		
				}
				
				`
				: " "
		}
		
		${
			enableButton
				? `
			
				.${blockId} .contents-wrapper .infobox-btn{
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

	// console.log("--edit theke", { attributes });

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

				${resOption === "tab" ? tabAllStyles : " "}
				${resOption === "mobile" ? tabAllStyles + mobileAllStyles : " "}

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
				{isOverly ? <div className="overly"></div> : null}

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
