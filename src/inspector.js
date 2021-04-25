/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Button,
	RangeControl,
	BaseControl,
	ButtonGroup,
	Dropdown,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import faIcons from "../util/faIcons.js";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
	INFOBOX_TYPES,
	POSITIONS,
	HEADER_TAGS,
	TEXT_TRANSFORM,
	BUTTON_SIZES,
	BUTTON_ALIGN,
	BORDER_STYLES,
	BACKGROUND_TYPES,
	BACKGROUND_SIZES,
	FONT_WEIGHTS,
	TEXT_DECORATION,
} from "./constants.js";
import FontPicker from "../util/typography-control/FontPicker";
import DimensionsControl from "../util/dimensions-control";
import ImageAvatar from "../util/image-avatar/ImageAvater.js";
import GradientColorControl from "../util/gradient-color-controller";
import UnitControl from "../util/unit-control";
import ColorControl from "../util/color-control";

function Inspector(props) {
	const { attributes, setAttributes } = props;

	const {
		// responsive control attributes ⬇
		resOption,

		backgroundType,
		backgroundSize,
		backgroundImageURL,
		backgroundImageID,
		backgroundColor,
		backgroundGradient,
		imageOrIcon,
		iconPosition,
		selectedIcon,
		isClickable,
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
		iconBackground,
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
		buttonSize,
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
		borderStyle,
		borderColor,
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
		headerFontFamily,
		headerFontSize,
		headerSizeUnit,
		headerFontWeight,
		headerTextDedocation,
		headerLetterSpacing,
		headerLetterSpacingUnit,
		headerLineHeight,
		headerLineHeightUnit,
		contentFontFamily,
		contentFontWeight,
		contentTextDedocation,
		contentTextTransform,
		contentLetterSpacing,
		contentLetterSpacingUnit,
		contentLineHeight,
		contentLineHeightUnit,
	} = attributes;

	const changeButtonSize = (newSize) => {
		switch (newSize) {
			case "small":
				setAttributes({
					buttonPaddingTop: 5,
					buttonPaddingRight: 10,
					buttonPaddingBottom: 5,
					buttonPaddingLeft: 10,
					buttonSize: newSize,
				});
				break;

			case "medium":
				setAttributes({
					buttonPaddingTop: 10,
					buttonPaddingRight: 20,
					buttonPaddingBottom: 10,
					buttonPaddingLeft: 30,
					buttonSize: newSize,
				});
				break;

			case "large":
				setAttributes({
					buttonPaddingTop: 20,
					buttonPaddingRight: 30,
					buttonPaddingBottom: 20,
					buttonPaddingLeft: 30,
					buttonSize: newSize,
				});
				break;

			case "extra-large":
				setAttributes({
					buttonPaddingTop: 20,
					buttonPaddingRight: 60,
					buttonPaddingBottom: 20,
					buttonPaddingLeft: 60,
					buttonSize: newSize,
				});
				break;
		}
	};

	// Change flex order based on icon position
	if (iconPosition === "top") {
		setAttributes({ order: 0, flexDirection: "column" });
	} else if (iconPosition === "bottom") {
		setAttributes({ order: 1, flexDirection: "column" });
	} else if (iconPosition === "left") {
		setAttributes({ order: 0, flexDirection: "row" });
	} else if (iconPosition === "right") {
		setAttributes({ order: 1, flexDirection: "row" });
	}

	const HEADER_SIZE_STEP = headerSizeUnit === "em" ? 0.1 : 1;
	const HEADER_SIZE_MAX = headerSizeUnit === "em" ? 10 : 100;

	const HEADER_SPACING_STEP = headerLetterSpacingUnit === "em" ? 0.1 : 1;
	const HEADER_SPACING_MAX = headerLetterSpacingUnit === "em" ? 10 : 100;

	const HEADER_LINE_HEIGHT_STEP = headerLineHeightUnit === "em" ? 0.1 : 1;
	const HEADER_LINE_HEIGHT_MAX = headerLineHeightUnit === "em" ? 10 : 100;

	const CONTENT_SIZE_STEP = contentSizeUnit === "em" ? 0.1 : 1;
	const CONTENT_SIZE_MAX = contentSizeUnit === "em" ? 10 : 100;

	const CONTENT_SPACING_STEP = contentLetterSpacingUnit === "em" ? 0.1 : 1;
	const CONTENT_SPACING_MAX = contentLetterSpacingUnit === "em" ? 10 : 100;

	const CONTENT_LINE_HEIGHT_STEP = contentLineHeightUnit === "em" ? 0.1 : 1;
	const CONTENT_LINE_HEIGHT_MAX = contentLineHeightUnit === "em" ? 10 : 100;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		const bodyClasses = document.body.className;
		// console.log("----log from inspector useEffect with empty []", {
		// 	bodyClasses,
		// });

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

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		const allEbBlocksWrapper = document.querySelectorAll(
			".eb-guten-block-main-parent-wrapper:not(.is-selected) > style"
		);
		// console.log("---inspector", { allEbBlocksWrapper });
		if (allEbBlocksWrapper.length < 1) return;
		allEbBlocksWrapper.forEach((styleTag) => {
			const cssStrings = styleTag.textContent;
			const minCss = cssStrings.replace(/\s+/g, " ");
			const regexCssMimmikSpace = /(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
			let newCssStrings = " ";
			if (resOption === "tab") {
				const tabCssStrings = (minCss.match(
					/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
				) || [" "])[0];
				// console.log({ tabCssStrings });
				newCssStrings = minCss.replace(regexCssMimmikSpace, tabCssStrings);
			} else if (resOption === "mobile") {
				const tabCssStrings = (minCss.match(
					/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
				) || [" "])[0];

				const mobCssStrings = (minCss.match(
					/(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i
				) || [" "])[0];

				// console.log({ tabCssStrings, mobCssStrings });

				newCssStrings = minCss.replace(
					regexCssMimmikSpace,
					`${tabCssStrings} ${mobCssStrings}`
				);
			} else {
				newCssStrings = minCss.replace(regexCssMimmikSpace, " ");
			}
			styleTag.textContent = newCssStrings;
		});
	}, [resOption]);

	const resRequiredProps = {
		setAttributes,
		resOption,
	};

	const typoRequiredProps = {
		attributes,
		setAttributes,
		resOption,
	};

	return (
		<InspectorControls key="controls">
			<span className="eb-panel-control">
				<PanelBody title={__("Infobox Settings")}>
					<BaseControl id="eb-infobox-image-icon" label={__("Image or Icon")}>
						<ButtonGroup id="eb-infobox-image-icon">
							{INFOBOX_TYPES.map((value) => (
								<Button
									isLarge
									isSecondary={imageOrIcon !== value}
									isPrimary={imageOrIcon === value}
									onClick={() => setAttributes({ imageOrIcon: value })}
								>
									{value}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					<BaseControl
						id="eb-infobox-position"
						label={__(`${imageOrIcon}  Position`)}
					>
						<ButtonGroup id="eb-infobox-position">
							{POSITIONS.map((value) => (
								<Button
									isLarge
									isSecondary={iconPosition !== value}
									isPrimary={iconPosition === value}
									onClick={() => setAttributes({ iconPosition: value })}
								>
									{value}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{imageOrIcon === "icon" && (
						<BaseControl label={__("Select Icon")}>
							<FontIconPicker
								icons={faIcons}
								onChange={(icon) => setAttributes({ selectedIcon: icon })}
								value={selectedIcon}
								appendTo="body"
								isMulti={false}
							/>
						</BaseControl>
					)}

					{imageOrIcon === "image" && imageUrl && (
						<ImageAvatar
							imageUrl={imageUrl}
							onDeleteImage={() => setAttributes({ imageUrl: null })}
						/>
					)}

					{imageOrIcon === "image" && imageId && (
						<>
							<RangeControl
								label={__("Image Height")}
								value={imageHeight}
								onChange={(newSize) => setAttributes({ imageHeight: newSize })}
								min={0}
								max={400}
							/>

							<RangeControl
								label={__("Image Width")}
								value={imageWidth}
								onChange={(newSize) => setAttributes({ imageWidth: newSize })}
								min={0}
								max={400}
							/>
						</>
					)}

					{imageOrIcon === "number" && (
						<BaseControl label={__("Number")} id="eb-infobox-number-id">
							<input
								type="number"
								value={number}
								id="eb-infobox-number-id"
								onChange={(event) =>
									setAttributes({
										number: parseInt(event.target.value, 10),
									})
								}
								min={0}
							/>
						</BaseControl>
					)}

					{!isClickable && (
						<ToggleControl
							label={__("Show Button")}
							checked={showButton}
							onChange={() => setAttributes({ showButton: !showButton })}
						/>
					)}

					{!showButton && (
						<ToggleControl
							label={__("Infobox Clickable")}
							checked={isClickable}
							onChange={() => setAttributes({ isClickable: !isClickable })}
						/>
					)}

					{showButton && (
						<PanelBody title={__("Button Settings")}>
							<TextControl
								label={__("Button Text")}
								value={buttonText}
								onChange={(newText) => setAttributes({ buttonText: newText })}
							/>

							<TextControl
								label={__("Link URL")}
								placeholder="https://your-link.com"
								value={clickableLink}
								onChange={(link) => setAttributes({ clickableLink: link })}
							/>

							<SelectControl
								label={__("Button Size")}
								value={buttonSize}
								options={BUTTON_SIZES}
								onChange={(newSize) => changeButtonSize(newSize)}
							/>

							<SelectControl
								label={__("Button Align")}
								value={buttonAlign}
								options={BUTTON_ALIGN}
								onChange={(buttonAlign) => setAttributes({ buttonAlign })}
							/>
						</PanelBody>
					)}

					{isClickable && (
						<TextControl
							label={__("Infobox Link")}
							placeholder="https://your-link.com"
							value={clickableLink}
							onChange={(link) => setAttributes({ clickableLink: link })}
						/>
					)}
				</PanelBody>

				<PanelBody title={__("Typography")} initialOpen={false}>
					<BaseControl label={__("Header")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<BaseControl label={__("Heading")}>
										<ButtonGroup className="infobox-button-group">
											{HEADER_TAGS.map((header) => (
												<Button
													isSmall
													isSecondary={headerTag !== header}
													isPrimary={headerTag === header}
													onClick={() => setAttributes({ headerTag: header })}
												>
													{header.toUpperCase()}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>

									<FontPicker
										label={__("Font Family")}
										value={headerFontFamily}
										onChange={(headerFontFamily) =>
											setAttributes({ headerFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={headerSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(headerSizeUnit) =>
											setAttributes({ headerSizeUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={headerFontSize}
										onChange={(headerFontSize) =>
											setAttributes({ headerFontSize })
										}
										step={HEADER_SIZE_STEP}
										min={0}
										max={HEADER_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={headerFontWeight}
										options={FONT_WEIGHTS}
										onChange={(headerFontWeight) =>
											setAttributes({ headerFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={headerTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(headerTextTransform) =>
											setAttributes({ headerTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={headerTextDedocation}
										options={TEXT_DECORATION}
										onChange={(headerTextDecoration) =>
											setAttributes({ headerTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={headerLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(headerLetterSpacingUnit) =>
											setAttributes({ headerLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={headerLetterSpacing}
										onChange={(headerLetterSpacing) =>
											setAttributes({ headerLetterSpacing })
										}
										min={0}
										max={HEADER_SPACING_MAX}
										step={HEADER_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={headerLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(headerLineHeightUnit) =>
											setAttributes({ headerLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={headerLineHeight}
										onChange={(headerLineHeight) =>
											setAttributes({ headerLineHeight })
										}
										min={0}
										max={HEADER_LINE_HEIGHT_MAX}
										step={HEADER_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<BaseControl label={__("Content")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={contentFontFamily}
										onChange={(contentFontFamily) =>
											setAttributes({ contentFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={contentSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(contentSizeUnit) =>
											setAttributes({ contentSizeUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={contentFontSize}
										onChange={(contentFontSize) =>
											setAttributes({ contentFontSize })
										}
										step={CONTENT_SIZE_STEP}
										min={0}
										max={CONTENT_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={contentFontWeight}
										options={FONT_WEIGHTS}
										onChange={(contentFontWeight) =>
											setAttributes({ contentFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={contentTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(contentTextTransform) =>
											setAttributes({ contentTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={contentTextDedocation}
										options={TEXT_DECORATION}
										onChange={(contentTextDecoration) =>
											setAttributes({ contentTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={contentLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(contentLetterSpacingUnit) =>
											setAttributes({ contentLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={contentLetterSpacing}
										onChange={(contentLetterSpacing) =>
											setAttributes({ contentLetterSpacing })
										}
										min={0}
										max={CONTENT_SPACING_MAX}
										step={CONTENT_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={contentLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(contentLineHeightUnit) =>
											setAttributes({ contentLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={contentLineHeight}
										onChange={(contentLineHeight) =>
											setAttributes({ contentLineHeight })
										}
										min={0}
										max={CONTENT_LINE_HEIGHT_MAX}
										step={CONTENT_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>

					{imageOrIcon === "icon" && selectedIcon && (
						<BaseControl label={__("Icon")} className="eb-typography-base">
							<Dropdown
								className="eb-typography-dropdown"
								contentClassName="my-popover-content-classname"
								position="bottom right"
								renderToggle={({ isOpen, onToggle }) => (
									<Button
										isSmall
										onClick={onToggle}
										aria-expanded={isOpen}
										icon="edit"
									></Button>
								)}
								renderContent={() => (
									<>
										<UnitControl
											selectedUnit={iconSizeUnit}
											unitTypes={[
												{ label: "px", value: "px" },
												{ label: "em", value: "em" },
												{ label: "%", value: "%" },
											]}
											onClick={(iconSizeUnit) =>
												setAttributes({ iconSizeUnit })
											}
										/>

										<RangeControl
											label={__("Icon Size")}
											value={iconSize}
											allowReset
											onChange={(newSize) =>
												setAttributes({ iconSize: newSize })
											}
											min={8}
											max={100}
										/>
									</>
								)}
							/>
						</BaseControl>
					)}

					{imageOrIcon === "number" && selectedIcon && (
						<BaseControl label={__("Number")} className="eb-typography-base">
							<Dropdown
								className="eb-typography-dropdown"
								contentClassName="my-popover-content-classname"
								position="bottom right"
								renderToggle={({ isOpen, onToggle }) => (
									<Button
										isSmall
										onClick={onToggle}
										aria-expanded={isOpen}
										icon="edit"
									></Button>
								)}
								renderContent={() => (
									<RangeControl
										label={__("Number Size")}
										value={numberSize}
										onChange={(newSize) =>
											setAttributes({ numberSize: newSize })
										}
										min={8}
										max={64}
									/>
								)}
							/>
						</BaseControl>
					)}
				</PanelBody>

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={marginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(marginUnit) => setAttributes({ marginUnit })}
					/>

					<DimensionsControl
						label={__("Margin")}
						top={marginTop}
						right={marginRight}
						bottom={marginBottom}
						left={marginLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								marginTop: top,
								marginRight: right,
								marginBottom: bottom,
								marginLeft: left,
							})
						}
					/>

					<UnitControl
						selectedUnit={paddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(paddingUnit) => setAttributes({ paddingUnit })}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={paddingTop}
						right={paddingRight}
						bottom={paddingBottom}
						left={paddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								paddingTop: top,
								paddingRight: right,
								paddingBottom: bottom,
								paddingLeft: left,
							})
						}
					/>
				</PanelBody>

				<PanelBody title={__("Colors")} initialOpen={false}>
					<ColorControl
						label={__("Header Color")}
						color={headerColor}
						onChange={(headerColor) => setAttributes({ headerColor })}
					/>

					<ColorControl
						label={__("Content Color")}
						color={contentColor}
						onChange={(contentColor) => setAttributes({ contentColor })}
					/>

					{imageOrIcon === "icon" && (
						<ColorControl
							label={__("Icon Color")}
							color={iconColor}
							onChange={(iconColor) => setAttributes({ iconColor })}
						/>
					)}

					{imageOrIcon === "number" && (
						<ColorControl
							label={__("Number Color")}
							color={numberColor}
							onChange={(numberColor) => setAttributes({ numberColor })}
						/>
					)}

					{showButton && (
						<>
							<ColorControl
								label={__("Button Color")}
								color={buttonColor}
								onChange={(buttonColor) => setAttributes({ buttonColor })}
							/>

							<ColorControl
								label={__("Button Text Color")}
								color={buttonTextColor}
								onChange={(buttonTextColor) =>
									setAttributes({ buttonTextColor })
								}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Spacing")} initialOpen={false}>
					<UnitControl
						selectedUnit={headerPaddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(headerPaddingUnit) =>
							setAttributes({ headerPaddingUnit })
						}
					/>

					<DimensionsControl
						label={__("Header Padding")}
						top={headerPaddingTop}
						right={headerPaddingRight}
						bottom={headerPaddingBottom}
						left={headerPaddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								headerPaddingTop: top,
								headerPaddingRight: right,
								headerPaddingBottom: bottom,
								headerPaddingLeft: left,
							})
						}
					/>

					{imageOrIcon === "image" && (
						<DimensionsControl
							label={__("Image Margin")}
							top={imageMarginTop}
							right={imageMarginTop}
							bottom={imageMarginBottom}
							left={imageMarginLeft}
							onChange={({ top, right, bottom, left }) =>
								setAttributes({
									imageMarginTop: top,
									imageMarginRight: right,
									imageMarginBottom: bottom,
									imageMarginLeft: left,
								})
							}
						/>
					)}

					{showButton && (
						<>
							<UnitControl
								selectedUnit={buttonPaddingUnit}
								unitTypes={[
									{ label: "px", value: "px" },
									{ label: "em", value: "em" },
									{ label: "%", value: "%" },
								]}
								onClick={(buttonPaddingUnit) =>
									setAttributes({ buttonPaddingUnit })
								}
							/>

							<DimensionsControl
								label={__("Button Padding")}
								top={buttonPaddingTop}
								right={buttonPaddingRight}
								bottom={buttonPaddingBottom}
								left={buttonPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										buttonPaddingTop: top,
										buttonPaddingRight: right,
										buttonPaddingBottom: bottom,
										buttonPaddingLeft: left,
									})
								}
							/>
						</>
					)}

					{imageOrIcon === "icon" && (
						<>
							<UnitControl
								selectedUnit={iconPaddingUnit}
								unitTypes={[
									{ label: "px", value: "px" },
									{ label: "em", value: "em" },
									{ label: "%", value: "%" },
								]}
								onClick={(iconPaddingUnit) =>
									setAttributes({ iconPaddingUnit })
								}
							/>
							<DimensionsControl
								label={__("Icon Padding")}
								top={iconPaddingTop}
								right={iconPaddingRight}
								bottom={iconPaddingBottom}
								left={iconPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										iconPaddingTop: top,
										iconPaddingRight: right,
										iconPaddingBottom: bottom,
										iconPaddingLeft: left,
									})
								}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Background")} initialOpen={false}>
					<BaseControl label={__("Background Type")}>
						<ButtonGroup id="eb-infobox-infobox-background">
							{BACKGROUND_TYPES.map(({ value, label }) => (
								<Button
									isLarge
									isPrimary={backgroundType === value}
									isSecondary={backgroundType !== value}
									onClick={() =>
										setAttributes({
											backgroundType: value,
										})
									}
								>
									{label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{backgroundType === "fill" && (
						<ColorControl
							label={__("Background Color")}
							color={backgroundColor}
							onChange={(backgroundColor) => setAttributes({ backgroundColor })}
						/>
					)}

					{backgroundType === "gradient" && (
						<PanelBody title={__("Gradient")} initialOpen={false}>
							<GradientColorControl
								gradientColor={backgroundGradient}
								onChange={(backgroundGradient) =>
									setAttributes({ backgroundGradient })
								}
							/>
						</PanelBody>
					)}

					{backgroundType === "image" && (
						<PanelBody title={__("Background Image")}>
							<MediaUpload
								onSelect={({ url, id }) =>
									setAttributes({
										backgroundImageURL: url,
										backgroundImageID: id,
									})
								}
								type="image"
								value={backgroundImageID}
								render={({ open }) =>
									!backgroundImageURL && (
										<Button
											className="eb-wrapper-upload-button eb-infobox-bg-upload-button components-button"
											label={__("Upload Image")}
											icon="format-image"
											onClick={open}
										/>
									)
								}
							/>

							{backgroundImageURL && (
								<>
									<ImageAvatar
										imageUrl={backgroundImageURL}
										onDeleteImage={() =>
											setAttributes({ backgroundImageURL: null })
										}
									/>
									<BaseControl label={__("Background Size")}>
										<ButtonGroup>
											{BACKGROUND_SIZES.map(({ value, label }) => (
												<Button
													isPrimary={backgroundSize === value}
													isSecondary={backgroundSize !== value}
													onClick={() =>
														setAttributes({
															backgroundSize: value,
														})
													}
												>
													{label}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>
								</>
							)}
						</PanelBody>
					)}
				</PanelBody>

				<PanelBody title={__("Border")} initialOpen={false}>
					<ColorControl
						label={__("Border Color")}
						color={borderColor}
						onChange={(borderColor) => setAttributes({ borderColor })}
					/>

					<SelectControl
						label={__("Border Style")}
						value={borderStyle}
						options={BORDER_STYLES}
						onChange={(borderStyle) => setAttributes({ borderStyle })}
					/>

					<UnitControl
						selectedUnit={borderWidthUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(borderWidthUnit) => setAttributes({ borderWidthUnit })}
					/>

					<RangeControl
						label={__("Border Width")}
						value={borderWidth}
						allowReset
						onChange={(borderWidth) => setAttributes({ borderWidth })}
						min={0}
						max={100}
					/>

					<UnitControl
						selectedUnit={radiusUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(radiusUnit) => setAttributes({ radiusUnit })}
					/>

					<RangeControl
						label={__("Border Radius")}
						value={borderRadius}
						allowReset
						onChange={(borderRadius) => setAttributes({ borderRadius })}
						min={0}
						max={100}
					/>
				</PanelBody>

				<PanelBody title={__("Shadow")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={shadowColor}
						onChange={(shadowColor) => setAttributes({ shadowColor })}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={shadowHOffset}
						allowReset
						onChange={(shadowHOffset) => setAttributes({ shadowHOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={shadowVOffset}
						allowReset
						onChange={(shadowVOffset) => setAttributes({ shadowVOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Blur")}
						value={shadowBlur}
						allowReset
						onChange={(shadowBlur) => setAttributes({ shadowBlur })}
						min={0}
						max={20}
					/>

					<RangeControl
						label={__("Spread")}
						value={shadowSpread}
						allowReset
						onChange={(shadowSpread) => setAttributes({ shadowSpread })}
						min={0}
						max={20}
					/>
				</PanelBody>
			</span>
		</InspectorControls>
	);
}
export default Inspector;
