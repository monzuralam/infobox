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
import IconBox from "./iconbox.js";
import Inspector from "./inspector";
import { DEFAULT_BACKGROUND } from "./constants";

const Edit = ({ attributes, setAttributes, isSelected, clientId }) => {
	const {
		// blockMeta is for keeping all the styles
		blockMeta,

		// blockId attribute for making unique className and other uniqueness
		blockId,

		backgroundType,
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
		iconPaddingTop,
		iconPaddingRight,
		iconPaddingBottom,
		iconPaddingLeft,
		headerPaddingTop,
		headerPaddingRight,
		headerPaddingBottom,
		headerPaddingLeft,
		imageMarginTop,
		imageMarginRight,
		imageMarginBottom,
		imageMarginLeft,
		buttonPaddingTop,
		buttonPaddingRight,
		buttonPaddingBottom,
		buttonPaddingLeft,
		buttonAlign,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
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
		marginUnit,
		paddingUnit,
		radiusUnit,
		headerPaddingUnit,
		iconPaddingUnit,
		borderWidthUnit,
		buttonPaddingUnit,
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

	const boxWrapperStyle = {
		flexDirection: flexDirection,
		backgroundImage:
			backgroundType === "image" && backgroundImageURL
				? `url('${backgroundImageURL}')`
				: (backgroundType === "gradient" && backgroundGradient) || "none",
		backgroundColor: backgroundColor || DEFAULT_BACKGROUND,
		backgroundSize:
			backgroundType === "image" && backgroundImageURL ? "cover" : "unset",
		margin: `${marginTop || 0}${marginUnit} ${marginRight || 0}${marginUnit} ${
			marginBottom || 0
		}${marginUnit} ${marginLeft || 0}${marginUnit} `,
		padding: `${paddingTop || 30}${paddingUnit} ${
			paddingRight || 70
		}${paddingUnit} ${paddingBottom || 30}${paddingUnit} ${
			paddingLeft || 70
		}${paddingUnit} `,
		border: `${borderWidth || 0}${borderWidthUnit} ${borderStyle} ${
			borderColor || "#000000"
		}`,
		borderRadius: `${borderRadius || 0}${radiusUnit}`,
		boxShadow: `${shadowHOffset || 0}px ${shadowVOffset || 0}px ${
			shadowBlur || 0
		}px ${shadowSpread || 0}px ${shadowColor || "#000000"}`,
	};

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

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: `
			.infobox-container{
				color: #6c40f7 !important;
				background: #f0f !important;
			}
			`,
			tab: `
			.infobox-container{
				color: #ff0 !important;
				background: #0ff !important;
			}
			`,
			mobile: `
			.infobox-container{
				color: #34f !important;
				background: #ccc !important;
			}
			`,
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
			<div className="infobox-container" style={boxWrapperStyle}>
				<IconBox selectedIcon={selectedIcon} iconStyle={iconStyle} />

				<div style={imageWrapperStyle}>
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

				<div style={numberStyle}>{isNaN(number) ? "0" : number}</div>

				<RichText
					tagName={headerTag}
					style={headerStyle}
					keepPlaceholderOnFocus
					className="eb-infobox-header"
					value={header}
					placeholder={__("Add Title")}
					onChange={(newHeader) => setAttributes({ header: newHeader })}
					allowedFormats={["italic", "strikethrough", "link"]}
				/>

				<span style={contentStyle}>
					<RichText
						className="eb-infobox-content"
						keepPlaceholderOnFocus
						value={content}
						placeholder={__("Add Body")}
						onChange={(newContent) => setAttributes({ content: newContent })}
					/>
				</span>

				<div className="infobox-button" style={buttonWrapperStyles}>
					<a
						href={clickableLink}
						className="eb-infobox-link"
						style={linkStyles}
					>
						{buttonText}
					</a>
				</div>
			</div>
		</div>,
	];
};

export default Edit;
