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
import { softMinifyCssStrings, isCssExists } from "./helpers";
import IconBox from "./iconbox.js";
import Inspector from "./inspector";
import { DEFAULT_BACKGROUND } from "./constants";

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
		flexDirection,
		order,
		showButton,
		buttonText,
		imageHeight,
		imageWidth,
		number,
		headerTag,
		contentFontSize,
		contentColor,
		headerColor,
		headerTextTransform,
		numberColor,
		numberSize,
		iconSize,
		iconColor,
		buttonColor,
		buttonTextColor,

		buttonAlign,

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

		iconPaddingUnit,
		iconPaddingTop,
		iconPaddingRight,
		iconPaddingBottom,
		iconPaddingLeft,

		headerPaddingUnit,
		headerPaddingTop,
		headerPaddingRight,
		headerPaddingBottom,
		headerPaddingLeft,

		imageMarginTop,
		imageMarginRight,
		imageMarginBottom,
		imageMarginLeft,

		buttonPaddingUnit,
		buttonPaddingTop,
		buttonPaddingRight,
		buttonPaddingBottom,
		buttonPaddingLeft,

		borderWidth,
		borderColor,
		borderStyle,
		borderRadius,
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowBlur,
		shadowSpread,
		contentSizeUnit,
		iconSizeUnit,

		radiusUnit,
		borderWidthUnit,
		iconBackground,
		headerFontFamily,
		headerFontSize,
		headerSizeUnit,
		headerFontWeight,
		headerTextDecoration,
		headerLetterSpacing,
		headerLetterSpacingUnit,
		headerLineHeight,
		headerLineHeightUnit,
		contentFontFamily,
		contentFontWeight,
		contentTextTransform,
		contentTextDecoration,
		contentLetterSpacing,
		contentLetterSpacingUnit,
		contentLineHeight,
		contentLineHeightUnit,
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

	console.log({ attributes });

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	const imageWrapperStyle = {
		display: imageOrIcon === "image" ? "block" : "none",
		backgroundImage:
			imageOrIcon === "image" && imageUrl ? `url(${imageUrl})` : "none",
		height: `${imageHeight}px`,
		width: `${imageWidth}px`,
		backgroundSize: "cover",
		order: order,
		marginTop: imageMarginTop ? `${imageMarginTop}px` : "10px",
		marginRight: imageMarginRight ? `${imageMarginRight}px` : 0,
		marginBottom: imageMarginBottom ? `${imageMarginBottom}px` : 0,
		marginLeft: imageMarginLeft ? `${imageMarginLeft}px` : 0,
	};

	const iconStyle = {
		display: imageOrIcon === "icon" && selectedIcon ? "block" : "none",
		order: order,
		color: iconColor || "#fff",
		background: iconBackground || "#3074ff",
		fontSize: `${iconSize || 36}${iconSizeUnit}`,
		paddingTop: `${iconPaddingTop || 20}${iconPaddingUnit}`,
		paddingRight: `${iconPaddingRight || 30}${iconPaddingUnit}`,
		paddingBottom: `${iconPaddingBottom || 20}${iconPaddingUnit}`,
		paddingLeft: `${iconPaddingLeft || 30}${iconPaddingUnit}`,
		lineHeight: 1,
		borderRadius: `5px`,
	};

	const numberStyle = {
		display: imageOrIcon === "number" ? "block" : "none",
		order: order,
		color: numberColor,
		fontSize: numberSize,
	};

	const headerStyle = {
		fontFamily: headerFontFamily,
		fontSize: headerFontSize ? headerFontSize + headerSizeUnit : undefined,
		fontWeight: headerFontWeight,
		textDecoration: headerTextDecoration,
		textTransform: headerTextTransform,
		letterSpacing: headerLetterSpacing
			? headerLetterSpacing + headerLetterSpacingUnit
			: undefined,
		lineHeight: headerLineHeight
			? headerLineHeight + headerLineHeightUnit
			: undefined,
		color: headerColor || "#4a5059",
		paddingTop: `${headerPaddingTop || 0}${headerPaddingUnit}`,
		paddingRight: `${headerPaddingRight || 0}${headerPaddingUnit}`,
		paddingBottom: `${headerPaddingBottom || 0}${headerPaddingUnit}`,
		paddingLeft: `${headerPaddingLeft || 0}${headerPaddingUnit}`,
	};

	const contentStyle = {
		fontFamily: contentFontFamily,
		fontSize: `${contentFontSize || 16}${contentSizeUnit}`,
		fontWeight: contentFontWeight,
		textDecoration: contentTextDecoration,
		textTransform: contentTextTransform,
		letterSpacing: contentLetterSpacing
			? contentLetterSpacing + contentLetterSpacingUnit
			: undefined,
		lineHeight: contentLineHeight
			? contentLineHeight + contentLineHeightUnit
			: undefined,
		color: contentColor || "#5b5b5b",
	};

	const buttonWrapperStyles = {
		display: showButton ? "flex" : "none",
		alignSelf: buttonAlign,
		marginTop: "10px",
	};

	const linkStyles = {
		textDecoration: "none",
		background: buttonColor || "#3074ff",
		color: buttonTextColor || "#ffffff",
		paddingTop: `${buttonPaddingTop}${buttonPaddingUnit}`,
		paddingRight: `${buttonPaddingRight}${buttonPaddingUnit}`,
		paddingBottom: `${buttonPaddingBottom}${buttonPaddingUnit}`,
		paddingLeft: `${buttonPaddingLeft}${buttonPaddingUnit}`,
	};

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
		.${blockId} .eb-infobox-image-wrapper{
			display: ${imageOrIcon === "image" && selectedIcon ? "block" : "none"};
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
	`;

	const iconStyleDesktop = `
		.${blockId} .eb-infobox-icon{
			display: ${imageOrIcon === "icon" && selectedIcon ? "block" : "none"};
			order: ${order};
			color: ${iconColor || "#fff"};
			background: ${iconBackground || "#3074ff"};
			font-size: ${iconSize}${iconSizeUnit};

			${
				iconPaddingTop
					? `padding-top: ${parseFloat(iconPaddingTop)}${iconPaddingUnit};`
					: " "
			}
			${
				iconPaddingRight
					? `padding-right: ${parseFloat(iconPaddingRight)}${iconPaddingUnit};`
					: " "
			}
			${
				iconPaddingLeft
					? `padding-left: ${parseFloat(iconPaddingLeft)}${iconPaddingUnit};`
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
	`;

	const numberStylesDesktop = `
		.${blockId} .eb-infobox-number{
			${numberColor ? `color: ${numberColor};` : " "} 
			display: ${imageOrIcon === "number" ? "block" : "none"};
			order: ${order};
			font-size: ${numberSize}px;
		}
	
	`;

	const headerStylesDesktop = `
		.${blockId} .eb-infobox-header{
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
		
		}
	
	`;

	const contentStylesDesktop = `
		.${blockId} .eb-infobox-content-main{
			${contentColor ? `color: ${contentColor};` : " "}

		}
	
	`;

	const buttonWrapperStylesDesktop = `
		.${blockId} .infobox-button{
			display: ${showButton ? "flex" : "none"};			
			align-self: ${buttonAlign};
			margin-top: 10px;
		}
			
	`;

	const linkStylesDesktop = `
		.${blockId} .eb-infobox-link{
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
		
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
	
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

	console.log({ attributes });

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
				<IconBox selectedIcon={selectedIcon} />

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

				<div className="eb-infobox-number">{isNaN(number) ? "0" : number}</div>

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

				<div className="infobox-button">
					<a href={clickableLink} className="eb-infobox-link">
						{buttonText}
					</a>
				</div>
			</div>
		</div>,
	];
};

export default Edit;
