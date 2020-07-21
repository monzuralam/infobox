/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { MediaUpload, RichText } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

/**
 * Internal dependencies
 */
import IconBox from "./iconbox.js";
import Inspector from "./inspector";
import { DEFAULT_BACKGROUND } from "./constants";

const Edit = ({ attributes, setAttributes, isSelected }) => {
	const {
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
	} = attributes;

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
		textTransform: headerTextTransform,
		color: headerColor || "#4a5059",
		paddingTop: `${headerPaddingTop || 0}${headerPaddingUnit}`,
		paddingRight: `${headerPaddingRight || 0}${headerPaddingUnit}`,
		paddingBottom: `${headerPaddingBottom || 0}${headerPaddingUnit}`,
		paddingLeft: `${headerPaddingLeft || 0}${headerPaddingUnit}`,
	};

	const contentStyle = {
		fontSize: `${contentFontSize || 16}${contentSizeUnit}`,
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

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		// Edit view
		<Fragment>
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
		</Fragment>,
	];
};

export default Edit;
