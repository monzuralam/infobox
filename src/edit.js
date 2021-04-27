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
	generateTypographyStyles,
} from "./helpers";
import IconBox from "./iconbox.js";
import Inspector from "./inspector";
import { DEFAULT_BACKGROUND } from "./constants";
import {
	typoPrefix_content,
	typoPrefix_header,
} from "./constants/typographyPrefixConstants";

const Edit = ({ attributes, setAttributes, isSelected, clientId }) => {
	const {
		// responsive control attributes ⬇
		resOption,

		// blockMeta is for keeping all the styles
		blockMeta,

		// blockId attribute for making unique className and other uniqueness
		blockId,

		backgroundType,
		backgroundSize,
		backgroundImageURL,
		backgroundColor,
		backgroundGradient,
		imageOrIcon,
		selectedIcon,
		clickableLink,
		header,
		content,
		imageUrl,
		imageId,
		order,
		showButton,
		buttonAlign,
		buttonText,
		number,
		headerTag,

		// infobox head top icon size attributes ⬇
		numberSize,
		TABnumberSize,
		MOBnumberSize,

		// infobox head top number size attributes ⬇
		iconSize,
		TABiconSize,
		MOBiconSize,

		// infobox head top image height width attributes ⬇
		imageHeight,
		imageWidth,

		TABimageHeight,
		TABimageWidth,

		MOBimageHeight,
		MOBimageWidth,

		// color panel attributes ⬇
		contentColor = "#5b5b5b",
		headerColor = "#4a5059",
		numberColor = "#4a5059",
		iconBackground = "#3074ff",
		iconColor = "#fff",
		buttonColor = "#3074FF",
		buttonTextColor = "#fff",

		// margin padding attributes ⬇
		marginUnit,

		marginTop,
		marginRight,
		marginBottom,
		marginLeft,

		paddingUnit,

		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,

		TABmarginUnit,

		TABmarginTop,
		TABmarginRight,
		TABmarginBottom,
		TABmarginLeft,

		TABpaddingUnit,

		TABpaddingTop,
		TABpaddingRight,
		TABpaddingBottom,
		TABpaddingLeft,

		MOBmarginUnit,

		MOBmarginTop,
		MOBmarginRight,
		MOBmarginBottom,
		MOBmarginLeft,

		MOBpaddingUnit,

		MOBpaddingTop,
		MOBpaddingRight,
		MOBpaddingBottom,
		MOBpaddingLeft,

		//
		// spacing control attributes starts ⬇
		// header padding attributes ⬇
		headerPaddingUnit,
		headerPaddingTop,
		headerPaddingRight,
		headerPaddingBottom,
		headerPaddingLeft,

		TABheaderPaddingUnit,
		TABheaderPaddingTop,
		TABheaderPaddingRight,
		TABheaderPaddingBottom,
		TABheaderPaddingLeft,

		MOBheaderPaddingUnit,
		MOBheaderPaddingTop,
		MOBheaderPaddingRight,
		MOBheaderPaddingBottom,
		MOBheaderPaddingLeft,

		// content padding attributes ⬇
		contentPaddingUnit,
		contentPaddingTop,
		contentPaddingRight,
		contentPaddingBottom,
		contentPaddingLeft,

		TABcontentPaddingUnit,
		TABcontentPaddingTop,
		TABcontentPaddingRight,
		TABcontentPaddingBottom,
		TABcontentPaddingLeft,

		MOBcontentPaddingUnit,
		MOBcontentPaddingTop,
		MOBcontentPaddingRight,
		MOBcontentPaddingBottom,
		MOBcontentPaddingLeft,

		// image margin attributes ⬇
		imageMarginTop,
		imageMarginRight,
		imageMarginBottom,
		imageMarginLeft,

		TABimageMarginTop,
		TABimageMarginRight,
		TABimageMarginBottom,
		TABimageMarginLeft,

		MOBimageMarginTop,
		MOBimageMarginRight,
		MOBimageMarginBottom,
		MOBimageMarginLeft,

		// icon padding attributes ⬇
		iconPaddingUnit,
		iconPaddingTop,
		iconPaddingRight,
		iconPaddingBottom,
		iconPaddingLeft,

		TABiconPaddingUnit,
		TABiconPaddingTop,
		TABiconPaddingRight,
		TABiconPaddingBottom,
		TABiconPaddingLeft,

		MOBiconPaddingUnit,
		MOBiconPaddingTop,
		MOBiconPaddingRight,
		MOBiconPaddingBottom,
		MOBiconPaddingLeft,
		// spacing control attributes Ends
		//

		// Button padding attributes ⬇
		buttonPaddingUnit,
		buttonPaddingTop,
		buttonPaddingRight,
		buttonPaddingBottom,
		buttonPaddingLeft,

		TABbuttonPaddingUnit,
		TABbuttonPaddingTop,
		TABbuttonPaddingRight,
		TABbuttonPaddingBottom,
		TABbuttonPaddingLeft,

		MOBbuttonPaddingUnit,
		MOBbuttonPaddingTop,
		MOBbuttonPaddingRight,
		MOBbuttonPaddingBottom,
		MOBbuttonPaddingLeft,

		// Border attributes ⬇
		borderWidth,
		borderColor,
		borderStyle,
		borderRadius,

		// Shadow attributes ⬇
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowBlur,
		shadowSpread,

		radiusUnit,
		borderWidthUnit,
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

	const {
		typoStylesDesktop: headerTypoStylesDesktop,
		typoStylesTab: headerTypoStylesTab,
		typoStylesMobile: headerTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_header,
	});

	const {
		typoStylesDesktop: contentTypoStylesDesktop,
		typoStylesTab: contentTypoStylesTab,
		typoStylesMobile: contentTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_content,
		defaultFontSize: 16,
	});

	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `
	.${blockId}{

		display: flex;
		text-align: center;
		align-items: center;
		flex-direction: column;

		${marginTop ? `margin-top: ${parseFloat(marginTop)}${marginUnit};` : " "}
		${marginRight ? `margin-right: ${parseFloat(marginRight)}${marginUnit};` : " "}
		${marginLeft ? `margin-left: ${parseFloat(marginLeft)}${marginUnit};` : " "}
		${
			marginBottom
				? `margin-bottom: ${parseFloat(marginBottom)}${marginUnit};`
				: " "
		}

		padding: 
			${paddingTop || 0}${paddingUnit} 
			${paddingRight || 0}${paddingUnit} 
			${paddingBottom || 0}${paddingUnit} 
			${paddingLeft || 0}${paddingUnit};

		${
			(backgroundType === "image" && backgroundImageURL) ||
			(backgroundType === "gradient" && backgroundGradient)
				? `background-image: ${
						backgroundType === "image" && backgroundImageURL
							? `url('${backgroundImageURL}')`
							: (backgroundType === "gradient" && backgroundGradient) || "none"
				  };`
				: " "
		}

		background-color: ${backgroundColor || DEFAULT_BACKGROUND};
		
		${
			backgroundType === "image" && backgroundImageURL
				? `background-size: ${backgroundSize || "cover"};`
				: " "
		}
		
		${
			shadowColor
				? `box-shadow: 
					${shadowHOffset || 0}px 
					${shadowVOffset || 0}px 
					${shadowBlur || 0}px 
					${shadowSpread || 0}px 
					${shadowColor};`
				: " "
		}

		${
			borderWidth && borderColor
				? `border: ${borderWidth}${borderWidthUnit} ${borderStyle} ${borderColor};`
				: " "
		}

		${borderRadius ? `border-radius: ${borderRadius}${radiusUnit};` : " "}
	
	}
	`;

	const wrapperStylesTab = `
	.${blockId}{
		${
			TABmarginTop
				? `margin-top: ${parseFloat(TABmarginTop)}${TABmarginUnit};`
				: " "
		}
		${
			TABmarginRight
				? `margin-right: ${parseFloat(TABmarginRight)}${TABmarginUnit};`
				: " "
		}
		${
			TABmarginLeft
				? `margin-left: ${parseFloat(TABmarginLeft)}${TABmarginUnit};`
				: " "
		}
		${
			TABmarginBottom
				? `margin-bottom: ${parseFloat(TABmarginBottom)}${TABmarginUnit};`
				: " "
		}
		${
			TABpaddingTop
				? `padding-top: ${parseFloat(TABpaddingTop)}${TABpaddingUnit};`
				: " "
		}
		${
			TABpaddingRight
				? `padding-right: ${parseFloat(TABpaddingRight)}${TABpaddingUnit};`
				: " "
		}
		${
			TABpaddingLeft
				? `padding-left: ${parseFloat(TABpaddingLeft)}${TABpaddingUnit};`
				: " "
		}
		${
			TABpaddingBottom
				? `padding-bottom: ${parseFloat(TABpaddingBottom)}${TABpaddingUnit};`
				: " "
		}
	
	}
	`;

	const wrapperStylesMobile = `
	.${blockId}{
		${
			MOBmarginTop
				? `margin-top: ${parseFloat(MOBmarginTop)}${MOBmarginUnit};`
				: " "
		}
		${
			MOBmarginRight
				? `margin-right: ${parseFloat(MOBmarginRight)}${MOBmarginUnit};`
				: " "
		}
		${
			MOBmarginLeft
				? `margin-left: ${parseFloat(MOBmarginLeft)}${MOBmarginUnit};`
				: " "
		}
		${
			MOBmarginBottom
				? `margin-bottom: ${parseFloat(MOBmarginBottom)}${MOBmarginUnit};`
				: " "
		}
		${
			MOBpaddingTop
				? `padding-top: ${parseFloat(MOBpaddingTop)}${MOBpaddingUnit};`
				: " "
		}
		${
			MOBpaddingRight
				? `padding-right: ${parseFloat(MOBpaddingRight)}${MOBpaddingUnit};`
				: " "
		}
		${
			MOBpaddingLeft
				? `padding-left: ${parseFloat(MOBpaddingLeft)}${MOBpaddingUnit};`
				: " "
		}
		${
			MOBpaddingBottom
				? `padding-bottom: ${parseFloat(MOBpaddingBottom)}${MOBpaddingUnit};`
				: " "
		}
	
	}
	`;

	const imageWrapperStyleDesktop = `
		${
			imageOrIcon === "image"
				? `		
			.${blockId} .eb-infobox-image-wrapper{
				${
					imageOrIcon === "image" && imageUrl
						? `background-image: url("${imageUrl}");`
						: " "
				}

				height: ${imageHeight}px;
				width: ${imageWidth}px;
				order: ${order};

				${imageMarginTop ? `margin-top: ${parseFloat(imageMarginTop)}px;` : " "}
				${imageMarginRight ? `margin-right: ${parseFloat(imageMarginRight)}px;` : " "}
				${imageMarginLeft ? `margin-left: ${parseFloat(imageMarginLeft)}px;` : " "}
				${
					imageMarginBottom
						? `margin-bottom: ${parseFloat(imageMarginBottom)}px;`
						: " "
				}
				
				background-size: cover;

			}	
		
			`
				: " "
		}
	
	`;

	const imageWrapperStyleTab = `
		${
			imageOrIcon === "image"
				? `			
				.${blockId} .eb-infobox-image-wrapper{		
					${TABimageMarginTop ? `margin-top: ${parseFloat(TABimageMarginTop)}px;` : " "}
					${
						TABimageMarginRight
							? `margin-right: ${parseFloat(TABimageMarginRight)}px;`
							: " "
					}
					${
						TABimageMarginLeft
							? `margin-left: ${parseFloat(TABimageMarginLeft)}px;`
							: " "
					}
					${
						TABimageMarginBottom
							? `margin-bottom: ${parseFloat(TABimageMarginBottom)}px;`
							: " "
					}
				
					${TABimageHeight ? `height: ${TABimageHeight}px;` : " "}
					${TABimageWidth ? `width: ${TABimageWidth}px;` : " "}
				
				}	
				`
				: " "
		}

	`;

	const imageWrapperStyleMobile = `
	
		${
			imageOrIcon === "image"
				? `			
				.${blockId} .eb-infobox-image-wrapper{		
					${MOBimageMarginTop ? `margin-top: ${parseFloat(MOBimageMarginTop)}px;` : " "}
					${
						MOBimageMarginRight
							? `margin-right: ${parseFloat(MOBimageMarginRight)}px;`
							: " "
					}
					${
						MOBimageMarginLeft
							? `margin-left: ${parseFloat(MOBimageMarginLeft)}px;`
							: " "
					}
					${
						MOBimageMarginBottom
							? `margin-bottom: ${parseFloat(MOBimageMarginBottom)}px;`
							: " "
					}
				
					${MOBimageHeight ? `height: ${MOBimageHeight}px;` : " "}
					${MOBimageWidth ? `width: ${MOBimageWidth}px;` : " "}
				
				}
				`
				: " "
		}

		
	`;

	const iconStyleDesktop = `
		${
			imageOrIcon === "icon" && selectedIcon
				? `			
				.${blockId} .eb-infobox-icon{
					display: block;
					order: ${order};
					color: ${iconColor};
					background: ${iconBackground};
					font-size: ${iconSize}px;

					${
						iconPaddingTop
							? `padding-top: ${parseFloat(iconPaddingTop)}${iconPaddingUnit};`
							: " "
					}
					${
						iconPaddingRight
							? `padding-right: ${parseFloat(
									iconPaddingRight
							  )}${iconPaddingUnit};`
							: " "
					}
					${
						iconPaddingLeft
							? `padding-left: ${parseFloat(
									iconPaddingLeft
							  )}${iconPaddingUnit};`
							: " "
					}
					${
						iconPaddingBottom
							? `padding-bottom: ${parseFloat(
									iconPaddingBottom
							  )}${iconPaddingUnit};`
							: " "
					}
					
					line-height: 1em;
					border-radius: 5px;
				}
				`
				: " "
		}

	`;

	const iconStyleTab = `

	${
		imageOrIcon === "icon" && selectedIcon
			? `			
			.${blockId} .eb-infobox-icon{		
				${
					TABiconPaddingTop
						? `padding-top: ${parseFloat(
								TABiconPaddingTop
						  )}${TABiconPaddingUnit};`
						: " "
				}
				${
					TABiconPaddingRight
						? `padding-right: ${parseFloat(
								TABiconPaddingRight
						  )}${TABiconPaddingUnit};`
						: " "
				}
				${
					TABiconPaddingLeft
						? `padding-left: ${parseFloat(
								TABiconPaddingLeft
						  )}${TABiconPaddingUnit};`
						: " "
				}
				${
					TABiconPaddingBottom
						? `padding-bottom: ${parseFloat(
								TABiconPaddingBottom
						  )}${TABiconPaddingUnit};`
						: " "
				}

				${TABiconSize ? `font-size: ${TABiconSize}px;` : " "}
				
			}
			`
			: " "
	}

	`;

	const iconStyleMobile = `

	${
		imageOrIcon === "icon" && selectedIcon
			? `	

			.${blockId} .eb-infobox-icon{		
				${
					MOBiconPaddingTop
						? `padding-top: ${parseFloat(
								MOBiconPaddingTop
						  )}${MOBiconPaddingUnit};`
						: " "
				}
				${
					MOBiconPaddingRight
						? `padding-right: ${parseFloat(
								MOBiconPaddingRight
						  )}${MOBiconPaddingUnit};`
						: " "
				}
				${
					MOBiconPaddingLeft
						? `padding-left: ${parseFloat(
								MOBiconPaddingLeft
						  )}${MOBiconPaddingUnit};`
						: " "
				}
				${
					MOBiconPaddingBottom
						? `padding-bottom: ${parseFloat(
								MOBiconPaddingBottom
						  )}${MOBiconPaddingUnit};`
						: " "
				}
	
				${MOBiconSize ? `font-size: ${MOBiconSize}px;` : " "}
				
			}

			`
			: " "
	}


	`;

	const numberStylesDesktop = `

	${
		imageOrIcon === "number"
			? `	

			.${blockId} .eb-infobox-number{
				display: block;
				${numberColor ? `color: ${numberColor};` : " "} 
				order: ${order};
				font-size: ${numberSize}px;
			}
		

			`
			: " "
	}


	`;

	const numberStylesTab = `

	${
		imageOrIcon === "number"
			? `	

		.${blockId} .eb-infobox-number{	
			${TABnumberSize ? `font-size: ${TABnumberSize}px;` : " "}
		}

			`
			: " "
	}

	
	`;

	const numberStylesMobile = `

	${
		imageOrIcon === "number"
			? `	
			.${blockId} .eb-infobox-number{	
				${MOBnumberSize ? `font-size: ${MOBnumberSize}px;` : " "}
			}

			`
			: " "
	}

		
	
	`;

	const headerStylesDesktop = `
		.${blockId} .eb-infobox-header{
			${headerTypoStylesDesktop}
			${
				headerPaddingTop
					? `padding-top: ${parseFloat(headerPaddingTop)}${headerPaddingUnit};`
					: " "
			}
			${
				headerPaddingRight
					? `padding-right: ${parseFloat(
							headerPaddingRight
					  )}${headerPaddingUnit};`
					: " "
			}
			${
				headerPaddingLeft
					? `padding-left: ${parseFloat(
							headerPaddingLeft
					  )}${headerPaddingUnit};`
					: " "
			}
			${
				headerPaddingBottom
					? `padding-bottom: ${parseFloat(
							headerPaddingBottom
					  )}${headerPaddingUnit};`
					: " "
			}
			
			${headerColor ? `color: ${headerColor};` : " "}
		

			margin: 0;
		}
	
	`;

	const headerStylesTab = `
	.${blockId} .eb-infobox-header{
		${headerTypoStylesTab}
		${
			TABheaderPaddingTop
				? `padding-top: ${parseFloat(
						TABheaderPaddingTop
				  )}${TABheaderPaddingUnit};`
				: " "
		}
		${
			TABheaderPaddingRight
				? `padding-right: ${parseFloat(
						TABheaderPaddingRight
				  )}${TABheaderPaddingUnit};`
				: " "
		}
		${
			TABheaderPaddingLeft
				? `padding-left: ${parseFloat(
						TABheaderPaddingLeft
				  )}${TABheaderPaddingUnit};`
				: " "
		}
		${
			TABheaderPaddingBottom
				? `padding-bottom: ${parseFloat(
						TABheaderPaddingBottom
				  )}${TABheaderPaddingUnit};`
				: " "
		}
	}
	
	`;

	const headerStylesMobile = `
	.${blockId} .eb-infobox-header{
		${headerTypoStylesMobile}

		${
			MOBheaderPaddingTop
				? `padding-top: ${parseFloat(
						MOBheaderPaddingTop
				  )}${MOBheaderPaddingUnit};`
				: " "
		}
		${
			MOBheaderPaddingRight
				? `padding-right: ${parseFloat(
						MOBheaderPaddingRight
				  )}${MOBheaderPaddingUnit};`
				: " "
		}
		${
			MOBheaderPaddingLeft
				? `padding-left: ${parseFloat(
						MOBheaderPaddingLeft
				  )}${MOBheaderPaddingUnit};`
				: " "
		}
		${
			MOBheaderPaddingBottom
				? `padding-bottom: ${parseFloat(
						MOBheaderPaddingBottom
				  )}${MOBheaderPaddingUnit};`
				: " "
		}
	}
	
	`;

	const contentStylesDesktop = `
		.${blockId} .eb-infobox-content-main{
			${contentTypoStylesDesktop}
			${contentColor ? `color: ${contentColor};` : " "}
			${
				contentPaddingTop
					? `padding-top: ${parseFloat(
							contentPaddingTop
					  )}${contentPaddingUnit};`
					: " "
			}
			${
				contentPaddingRight
					? `padding-right: ${parseFloat(
							contentPaddingRight
					  )}${contentPaddingUnit};`
					: " "
			}
			${
				contentPaddingLeft
					? `padding-left: ${parseFloat(
							contentPaddingLeft
					  )}${contentPaddingUnit};`
					: " "
			}
			${
				contentPaddingBottom
					? `padding-bottom: ${parseFloat(
							contentPaddingBottom
					  )}${contentPaddingUnit};`
					: " "
			}
		}
	
	`;

	const contentStylesTab = `
		.${blockId} .eb-infobox-content-main{
			${contentTypoStylesTab}
			${
				TABcontentPaddingTop
					? `padding-top: ${parseFloat(
							TABcontentPaddingTop
					  )}${TABcontentPaddingUnit};`
					: " "
			}
			${
				TABcontentPaddingRight
					? `padding-right: ${parseFloat(
							TABcontentPaddingRight
					  )}${TABcontentPaddingUnit};`
					: " "
			}
			${
				TABcontentPaddingLeft
					? `padding-left: ${parseFloat(
							TABcontentPaddingLeft
					  )}${TABcontentPaddingUnit};`
					: " "
			}
			${
				TABcontentPaddingBottom
					? `padding-bottom: ${parseFloat(
							TABcontentPaddingBottom
					  )}${TABcontentPaddingUnit};`
					: " "
			}
		}
	
	`;

	const contentStylesMobile = `
		.${blockId} .eb-infobox-content-main{
			${contentTypoStylesMobile}
			${
				MOBcontentPaddingTop
					? `padding-top: ${parseFloat(
							MOBcontentPaddingTop
					  )}${MOBcontentPaddingUnit};`
					: " "
			}
			${
				MOBcontentPaddingRight
					? `padding-right: ${parseFloat(
							MOBcontentPaddingRight
					  )}${MOBcontentPaddingUnit};`
					: " "
			}
			${
				MOBcontentPaddingLeft
					? `padding-left: ${parseFloat(
							MOBcontentPaddingLeft
					  )}${MOBcontentPaddingUnit};`
					: " "
			}
			${
				MOBcontentPaddingBottom
					? `padding-bottom: ${parseFloat(
							MOBcontentPaddingBottom
					  )}${MOBcontentPaddingUnit};`
					: " "
			}
		}
	
	`;

	const buttonWrapperStylesDesktop = `
		.${blockId} .eb-infobox-button{
			display: ${showButton ? "flex" : "none"};			
			align-self: ${buttonAlign};
			margin-top: 10px;			
			text-align: center;
		}
			
	`;

	const linkStylesDesktop = `
		.eb-infobox-container.${blockId} .eb-infobox-link{
			${buttonColor ? `background: ${buttonColor};` : " "} 
			${buttonTextColor ? `color: ${buttonTextColor};` : " "} 
			${
				buttonPaddingTop
					? `padding-top: ${parseFloat(buttonPaddingTop)}${buttonPaddingUnit};`
					: " "
			}
			${
				buttonPaddingRight
					? `padding-right: ${parseFloat(
							buttonPaddingRight
					  )}${buttonPaddingUnit};`
					: " "
			}
			${
				buttonPaddingLeft
					? `padding-left: ${parseFloat(
							buttonPaddingLeft
					  )}${buttonPaddingUnit};`
					: " "
			}
			${
				buttonPaddingBottom
					? `padding-bottom: ${parseFloat(
							buttonPaddingBottom
					  )}${buttonPaddingUnit};`
					: " "
			}
			
			text-decoration: none;
		}
	
	`;

	const linkStylesTab = `
		.eb-infobox-container.${blockId} .eb-infobox-link{
			${
				TABbuttonPaddingTop
					? `padding-top: ${parseFloat(
							TABbuttonPaddingTop
					  )}${TABbuttonPaddingUnit};`
					: " "
			}
			${
				TABbuttonPaddingRight
					? `padding-right: ${parseFloat(
							TABbuttonPaddingRight
					  )}${TABbuttonPaddingUnit};`
					: " "
			}
			${
				TABbuttonPaddingLeft
					? `padding-left: ${parseFloat(
							TABbuttonPaddingLeft
					  )}${TABbuttonPaddingUnit};`
					: " "
			}
			${
				TABbuttonPaddingBottom
					? `padding-bottom: ${parseFloat(
							TABbuttonPaddingBottom
					  )}${TABbuttonPaddingUnit};`
					: " "
			}
			
			text-decoration: none;
		}
	
	`;

	const linkStylesMobile = `
		.eb-infobox-container.${blockId} .eb-infobox-link{
			${
				MOBbuttonPaddingTop
					? `padding-top: ${parseFloat(
							MOBbuttonPaddingTop
					  )}${MOBbuttonPaddingUnit};`
					: " "
			}
			${
				MOBbuttonPaddingRight
					? `padding-right: ${parseFloat(
							MOBbuttonPaddingRight
					  )}${MOBbuttonPaddingUnit};`
					: " "
			}
			${
				MOBbuttonPaddingLeft
					? `padding-left: ${parseFloat(
							MOBbuttonPaddingLeft
					  )}${MOBbuttonPaddingUnit};`
					: " "
			}
			${
				MOBbuttonPaddingBottom
					? `padding-bottom: ${parseFloat(
							MOBbuttonPaddingBottom
					  )}${MOBbuttonPaddingUnit};`
					: " "
			}
			
			text-decoration: none;
		}
	
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(imageWrapperStyleDesktop) ? imageWrapperStyleDesktop : " "}
		${isCssExists(iconStyleDesktop) ? iconStyleDesktop : " "}
		${isCssExists(numberStylesDesktop) ? numberStylesDesktop : " "}
		${isCssExists(headerStylesDesktop) ? headerStylesDesktop : " "}
		${isCssExists(contentStylesDesktop) ? contentStylesDesktop : " "}
		${isCssExists(buttonWrapperStylesDesktop) ? buttonWrapperStylesDesktop : " "}
		${isCssExists(linkStylesDesktop) ? linkStylesDesktop : " "}
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		${isCssExists(headerStylesTab) ? headerStylesTab : " "}
		${isCssExists(contentStylesTab) ? contentStylesTab : " "}
		${isCssExists(linkStylesTab) ? linkStylesTab : " "}
		${isCssExists(imageWrapperStyleTab) ? imageWrapperStyleTab : " "}
		${isCssExists(iconStyleTab) ? iconStyleTab : " "}
		${isCssExists(numberStylesTab) ? numberStylesTab : " "}
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
		${isCssExists(headerStylesMobile) ? headerStylesMobile : " "}
		${isCssExists(contentStylesMobile) ? contentStylesMobile : " "}
		${isCssExists(linkStylesMobile) ? linkStylesMobile : " "}
		${isCssExists(imageWrapperStyleMobile) ? imageWrapperStyleMobile : " "}
		${isCssExists(iconStyleMobile) ? iconStyleMobile : " "}
		${isCssExists(numberStylesMobile) ? numberStylesMobile : " "}
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

	console.log("--edit theke", { attributes });

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
			<div className={`eb-infobox-container ${blockId}`}>
				{imageOrIcon === "icon" && selectedIcon ? (
					<IconBox selectedIcon={selectedIcon} />
				) : null}
				{imageOrIcon === "image" ? (
					<div className="eb-infobox-image-wrapper">
						<MediaUpload
							onSelect={(media) =>
								setAttributes({ imageUrl: media.url, imageId: media.id })
							}
							type="image"
							value={imageId}
							render={({ open }) =>
								!imageUrl && (
									<Button
										className="eb-infobox-image components-button"
										label={__("Upload Image")}
										icon="format-image"
										onClick={open}
									/>
								)
							}
						/>
					</div>
				) : null}
				{imageOrIcon === "number" ? (
					<div className="eb-infobox-number">
						{isNaN(number) ? "0" : number}
					</div>
				) : null}

				<RichText
					tagName={headerTag}
					keepPlaceholderOnFocus
					className="eb-infobox-header"
					value={header}
					placeholder={__("Add Title")}
					onChange={(newHeader) => setAttributes({ header: newHeader })}
					allowedFormats={["italic", "strikethrough", "link"]}
				/>

				<span className="eb-infobox-content-main">
					<RichText
						className="eb-infobox-content"
						keepPlaceholderOnFocus
						value={content}
						placeholder={__("Add Body")}
						onChange={(newContent) => setAttributes({ content: newContent })}
					/>
				</span>

				<div className="eb-infobox-button">
					<a href={clickableLink} className="eb-infobox-link">
						{buttonText}
					</a>
				</div>
			</div>
		</div>,
	];
};

export default Edit;
