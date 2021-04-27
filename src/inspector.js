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
	FONT_SIZE_UNITS,
} from "./constants.js";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import faIcons from "../util/faIcons.js";

import TypographyDropdown from "../util/typography-control";

import DimensionsControl from "../util/dimensions-control";
import ImageAvatar from "../util/image-avatar/ImageAvater.js";
import GradientColorControl from "../util/gradient-color-controller";
import UnitControl from "../util/unit-control";
import ColorControl from "../util/color-control";

import WithResButtons from "../util/withResButtons";

import ResPanelBody from "./ResPanelBody";

import {
	typoPrefix_header,
	typoPrefix_content,
} from "./constants/typographyPrefixConstants";

function Inspector(props) {
	const { attributes, setAttributes } = props;

	const {
		// responsive control attributes ⬇
		resOption,

		// background attributes
		backgroundType,
		backgroundSize,
		backgroundImageURL,
		backgroundImageID,
		backgroundColor,
		backgroundGradient,

		// infobox settings attributes
		imageOrIcon,
		iconPosition,
		selectedIcon,
		isClickable,
		clickableLink,
		header,
		content,
		imageUrl,
		imageId,
		order,

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
		contentColor,
		headerColor,
		numberColor,
		iconColor,
		iconBackground,
		buttonColor,
		buttonTextColor,

		// Button settings attributes ⬇
		showButton,
		buttonText,
		buttonSize,
		buttonAlign,

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

		// Border attributes ⬇
		borderWidth,
		borderStyle,
		borderColor,
		borderRadius,
		radiusUnit,

		// Shadow attributes ⬇
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowBlur,
		shadowSpread,

		borderWidthUnit,
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
		setAttributes({ order: 0 });
	} else if (iconPosition === "bottom") {
		setAttributes({ order: 1 });
	}

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
					<BaseControl label={__("Heading Tag")}>
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

					{imageOrIcon === "icon" && selectedIcon && (
						<WithResButtons
							className="for-icon-size"
							resRequiredProps={resRequiredProps}
						>
							{resOption == "desktop" && (
								<RangeControl
									label={__("Icon Size")}
									value={iconSize}
									onChange={(iconSize) => setAttributes({ iconSize })}
									min={8}
									max={100}
								/>
							)}

							{resOption == "tab" && (
								<RangeControl
									allowReset
									label={__("Icon Size")}
									value={TABiconSize}
									onChange={(TABiconSize) => setAttributes({ TABiconSize })}
									min={8}
									max={100}
								/>
							)}

							{resOption == "mobile" && (
								<RangeControl
									allowReset
									label={__("Icon Size")}
									value={MOBiconSize}
									onChange={(MOBiconSize) => setAttributes({ MOBiconSize })}
									min={8}
									max={100}
								/>
							)}
						</WithResButtons>
					)}

					{imageOrIcon === "image" && imageUrl && (
						<ImageAvatar
							imageUrl={imageUrl}
							onDeleteImage={() =>
								setAttributes({
									imageUrl: null,
									imageHeight: 150,
									imageWidth: 150,
								})
							}
						/>
					)}

					{imageOrIcon === "image" && imageUrl && (
						<>
							<WithResButtons
								className="for-head-img-height"
								resRequiredProps={resRequiredProps}
							>
								{resOption == "desktop" && (
									<RangeControl
										label={__("Image Height")}
										value={imageHeight}
										onChange={(imageHeight) => setAttributes({ imageHeight })}
										min={0}
										max={400}
									/>
								)}
								{resOption == "tab" && (
									<RangeControl
										allowReset
										label={__("Image Height")}
										value={TABimageHeight}
										onChange={(TABimageHeight) =>
											setAttributes({ TABimageHeight })
										}
										min={0}
										max={400}
									/>
								)}
								{resOption == "mobile" && (
									<RangeControl
										allowReset
										label={__("Image Height")}
										value={MOBimageHeight}
										onChange={(MOBimageHeight) =>
											setAttributes({ MOBimageHeight })
										}
										min={0}
										max={400}
									/>
								)}
							</WithResButtons>
							<WithResButtons
								className="for-head-img-width"
								resRequiredProps={resRequiredProps}
							>
								{resOption == "desktop" && (
									<RangeControl
										label={__("Image Width")}
										value={imageWidth}
										onChange={(imageWidth) => setAttributes({ imageWidth })}
										min={0}
										max={400}
									/>
								)}
								{resOption == "tab" && (
									<RangeControl
										allowReset
										label={__("Image Width")}
										value={TABimageWidth}
										onChange={(TABimageWidth) =>
											setAttributes({ TABimageWidth })
										}
										min={0}
										max={400}
									/>
								)}
								{resOption == "mobile" && (
									<RangeControl
										allowReset
										label={__("Image Width")}
										value={MOBimageWidth}
										onChange={(MOBimageWidth) =>
											setAttributes({ MOBimageWidth })
										}
										min={0}
										max={400}
									/>
								)}
							</WithResButtons>
						</>
					)}

					{imageOrIcon === "number" && (
						<>
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
							<WithResButtons
								className="for-number-size"
								resRequiredProps={resRequiredProps}
							>
								{resOption == "desktop" && (
									<RangeControl
										label={__("Number Size")}
										value={numberSize}
										onChange={(numberSize) => setAttributes({ numberSize })}
										min={8}
										max={64}
									/>
								)}

								{resOption == "tab" && (
									<RangeControl
										allowReset
										label={__("Number Size")}
										value={TABnumberSize}
										onChange={(TABnumberSize) =>
											setAttributes({ TABnumberSize })
										}
										min={8}
										max={64}
									/>
								)}

								{resOption == "mobile" && (
									<RangeControl
										allowReset
										label={__("Number Size")}
										value={MOBnumberSize}
										onChange={(MOBnumberSize) =>
											setAttributes({ MOBnumberSize })
										}
										min={8}
										max={64}
									/>
								)}
							</WithResButtons>
						</>
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
						<>
							<PanelBody title={__("Button Settings")} initialOpen={false}>
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

							<ResPanelBody
								title={__("Button Padding")}
								initialOpen={false}
								resRequiredProps={resRequiredProps}
							>
								{resOption == "desktop" && (
									<>
										<UnitControl
											selectedUnit={buttonPaddingUnit}
											unitTypes={FONT_SIZE_UNITS}
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

								{resOption == "tab" && (
									<>
										<UnitControl
											selectedUnit={TABbuttonPaddingUnit}
											unitTypes={FONT_SIZE_UNITS}
											onClick={(TABbuttonPaddingUnit) =>
												setAttributes({ TABbuttonPaddingUnit })
											}
										/>

										<DimensionsControl
											label={__("Button Padding")}
											top={TABbuttonPaddingTop}
											right={TABbuttonPaddingRight}
											bottom={TABbuttonPaddingBottom}
											left={TABbuttonPaddingLeft}
											onChange={({ top, right, bottom, left }) =>
												setAttributes({
													TABbuttonPaddingTop: top,
													TABbuttonPaddingRight: right,
													TABbuttonPaddingBottom: bottom,
													TABbuttonPaddingLeft: left,
												})
											}
										/>
									</>
								)}

								{resOption == "mobile" && (
									<>
										<UnitControl
											selectedUnit={MOBbuttonPaddingUnit}
											unitTypes={FONT_SIZE_UNITS}
											onClick={(MOBbuttonPaddingUnit) =>
												setAttributes({ MOBbuttonPaddingUnit })
											}
										/>

										<DimensionsControl
											label={__("Button Padding")}
											top={MOBbuttonPaddingTop}
											right={MOBbuttonPaddingRight}
											bottom={MOBbuttonPaddingBottom}
											left={MOBbuttonPaddingLeft}
											onChange={({ top, right, bottom, left }) =>
												setAttributes({
													MOBbuttonPaddingTop: top,
													MOBbuttonPaddingRight: right,
													MOBbuttonPaddingBottom: bottom,
													MOBbuttonPaddingLeft: left,
												})
											}
										/>
									</>
								)}
							</ResPanelBody>
						</>
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
					<TypographyDropdown
						baseLabel="Header"
						typographyPrefixConstant={typoPrefix_header}
						typoRequiredProps={typoRequiredProps}
					/>
					<TypographyDropdown
						baseLabel="Content"
						typographyPrefixConstant={typoPrefix_content}
						typoRequiredProps={typoRequiredProps}
					/>
				</PanelBody>

				<ResPanelBody
					title={__("Margin & Padding")}
					initialOpen={false}
					resRequiredProps={resRequiredProps}
				>
					{resOption == "desktop" && (
						<>
							<UnitControl
								selectedUnit={marginUnit}
								unitTypes={FONT_SIZE_UNITS}
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
								unitTypes={FONT_SIZE_UNITS}
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
						</>
					)}
					{resOption == "tab" && (
						<>
							<UnitControl
								selectedUnit={TABmarginUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(TABmarginUnit) => setAttributes({ TABmarginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={TABmarginTop}
								right={TABmarginRight}
								bottom={TABmarginBottom}
								left={TABmarginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										TABmarginTop: top,
										TABmarginRight: right,
										TABmarginBottom: bottom,
										TABmarginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={TABpaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(TABpaddingUnit) => setAttributes({ TABpaddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={TABpaddingTop}
								right={TABpaddingRight}
								bottom={TABpaddingBottom}
								left={TABpaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										TABpaddingTop: top,
										TABpaddingRight: right,
										TABpaddingBottom: bottom,
										TABpaddingLeft: left,
									})
								}
							/>
						</>
					)}
					{resOption == "mobile" && (
						<>
							<UnitControl
								selectedUnit={MOBmarginUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(MOBmarginUnit) => setAttributes({ MOBmarginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={MOBmarginTop}
								right={MOBmarginRight}
								bottom={MOBmarginBottom}
								left={MOBmarginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										MOBmarginTop: top,
										MOBmarginRight: right,
										MOBmarginBottom: bottom,
										MOBmarginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={MOBpaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(MOBpaddingUnit) => setAttributes({ MOBpaddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={MOBpaddingTop}
								right={MOBpaddingRight}
								bottom={MOBpaddingBottom}
								left={MOBpaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										MOBpaddingTop: top,
										MOBpaddingRight: right,
										MOBpaddingBottom: bottom,
										MOBpaddingLeft: left,
									})
								}
							/>
						</>
					)}
				</ResPanelBody>

				<PanelBody title={__("Colors")} initialOpen={false}>
					<ColorControl
						label={__("Header Color")}
						color={headerColor}
						onChange={(headerColor) => {
							console.log({ headerColor });
							setAttributes({ headerColor });
						}}
					/>

					<ColorControl
						label={__("Content Color")}
						color={contentColor}
						onChange={(contentColor) => setAttributes({ contentColor })}
					/>

					{imageOrIcon === "icon" && (
						<>
							<ColorControl
								label={__("Icon Color")}
								color={iconColor}
								onChange={(iconColor) => setAttributes({ iconColor })}
							/>
							<ColorControl
								label={__("Icon Background Color")}
								color={iconBackground}
								onChange={(iconBackground) => setAttributes({ iconBackground })}
							/>
						</>
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

				<ResPanelBody
					title={__("Spacing")}
					initialOpen={false}
					resRequiredProps={resRequiredProps}
				>
					{resOption == "desktop" && (
						<>
							<UnitControl
								selectedUnit={headerPaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
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

							<UnitControl
								selectedUnit={contentPaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(contentPaddingUnit) =>
									setAttributes({ contentPaddingUnit })
								}
							/>

							<DimensionsControl
								label={__("Content Padding")}
								top={contentPaddingTop}
								right={contentPaddingRight}
								bottom={contentPaddingBottom}
								left={contentPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										contentPaddingTop: top,
										contentPaddingRight: right,
										contentPaddingBottom: bottom,
										contentPaddingLeft: left,
									})
								}
							/>

							{imageOrIcon === "image" && (
								<DimensionsControl
									label={__("Image Margin")}
									top={imageMarginTop}
									right={imageMarginRight}
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

							{imageOrIcon === "icon" && (
								<>
									<UnitControl
										selectedUnit={iconPaddingUnit}
										unitTypes={FONT_SIZE_UNITS}
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
						</>
					)}

					{resOption == "tab" && (
						<>
							<UnitControl
								selectedUnit={TABheaderPaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(TABheaderPaddingUnit) =>
									setAttributes({ TABheaderPaddingUnit })
								}
							/>

							<DimensionsControl
								label={__("Header Padding")}
								top={TABheaderPaddingTop}
								right={TABheaderPaddingRight}
								bottom={TABheaderPaddingBottom}
								left={TABheaderPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										TABheaderPaddingTop: top,
										TABheaderPaddingRight: right,
										TABheaderPaddingBottom: bottom,
										TABheaderPaddingLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={TABcontentPaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(TABcontentPaddingUnit) =>
									setAttributes({ TABcontentPaddingUnit })
								}
							/>

							<DimensionsControl
								label={__("Content Padding")}
								top={TABcontentPaddingTop}
								right={TABcontentPaddingRight}
								bottom={TABcontentPaddingBottom}
								left={TABcontentPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										TABcontentPaddingTop: top,
										TABcontentPaddingRight: right,
										TABcontentPaddingBottom: bottom,
										TABcontentPaddingLeft: left,
									})
								}
							/>

							{imageOrIcon === "image" && (
								<DimensionsControl
									label={__("Image Margin")}
									top={TABimageMarginTop}
									right={TABimageMarginRight}
									bottom={TABimageMarginBottom}
									left={TABimageMarginLeft}
									onChange={({ top, right, bottom, left }) =>
										setAttributes({
											TABimageMarginTop: top,
											TABimageMarginRight: right,
											TABimageMarginBottom: bottom,
											TABimageMarginLeft: left,
										})
									}
								/>
							)}

							{imageOrIcon === "icon" && (
								<>
									<UnitControl
										selectedUnit={TABiconPaddingUnit}
										unitTypes={FONT_SIZE_UNITS}
										onClick={(TABiconPaddingUnit) =>
											setAttributes({ TABiconPaddingUnit })
										}
									/>
									<DimensionsControl
										label={__("Icon Padding")}
										top={TABiconPaddingTop}
										right={TABiconPaddingRight}
										bottom={TABiconPaddingBottom}
										left={TABiconPaddingLeft}
										onChange={({ top, right, bottom, left }) =>
											setAttributes({
												TABiconPaddingTop: top,
												TABiconPaddingRight: right,
												TABiconPaddingBottom: bottom,
												TABiconPaddingLeft: left,
											})
										}
									/>
								</>
							)}
						</>
					)}

					{resOption == "mobile" && (
						<>
							<UnitControl
								selectedUnit={MOBheaderPaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(MOBheaderPaddingUnit) =>
									setAttributes({ MOBheaderPaddingUnit })
								}
							/>

							<DimensionsControl
								label={__("Header Padding")}
								top={MOBheaderPaddingTop}
								right={MOBheaderPaddingRight}
								bottom={MOBheaderPaddingBottom}
								left={MOBheaderPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										MOBheaderPaddingTop: top,
										MOBheaderPaddingRight: right,
										MOBheaderPaddingBottom: bottom,
										MOBheaderPaddingLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={MOBcontentPaddingUnit}
								unitTypes={FONT_SIZE_UNITS}
								onClick={(MOBcontentPaddingUnit) =>
									setAttributes({ MOBcontentPaddingUnit })
								}
							/>

							<DimensionsControl
								label={__("Content Padding")}
								top={MOBcontentPaddingTop}
								right={MOBcontentPaddingRight}
								bottom={MOBcontentPaddingBottom}
								left={MOBcontentPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										MOBcontentPaddingTop: top,
										MOBcontentPaddingRight: right,
										MOBcontentPaddingBottom: bottom,
										MOBcontentPaddingLeft: left,
									})
								}
							/>

							{imageOrIcon === "image" && (
								<DimensionsControl
									label={__("Image Margin")}
									top={MOBimageMarginTop}
									right={MOBimageMarginRight}
									bottom={MOBimageMarginBottom}
									left={MOBimageMarginLeft}
									onChange={({ top, right, bottom, left }) =>
										setAttributes({
											MOBimageMarginTop: top,
											MOBimageMarginRight: right,
											MOBimageMarginBottom: bottom,
											MOBimageMarginLeft: left,
										})
									}
								/>
							)}

							{imageOrIcon === "icon" && (
								<>
									<UnitControl
										selectedUnit={MOBiconPaddingUnit}
										unitTypes={FONT_SIZE_UNITS}
										onClick={(MOBiconPaddingUnit) =>
											setAttributes({ MOBiconPaddingUnit })
										}
									/>
									<DimensionsControl
										label={__("Icon Padding")}
										top={MOBiconPaddingTop}
										right={MOBiconPaddingRight}
										bottom={MOBiconPaddingBottom}
										left={MOBiconPaddingLeft}
										onChange={({ top, right, bottom, left }) =>
											setAttributes({
												MOBiconPaddingTop: top,
												MOBiconPaddingRight: right,
												MOBiconPaddingBottom: bottom,
												MOBiconPaddingLeft: left,
											})
										}
									/>
								</>
							)}
						</>
					)}
				</ResPanelBody>

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
