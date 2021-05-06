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
} from "@wordpress/components";

/**
 * Internal dependencies
 */

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import faIcons from "../util/faIcons.js";

import TypographyDropdown from "../util/typography-control-v2";

import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import ImageAvatar from "../util/image-avatar/ImageAvater";
import GradientColorControl from "../util/gradient-color-controller";
import UnitControl from "../util/unit-control";
import ColorControl from "../util/color-control";
import ResetControl from "../util/reset-control";

import WithResButtons from "../util/withResButtons";

import {
	typoPrefix_title,
	typoPrefix_content,
	typoPrefix_number,
	typoPrefix_subTitle,
	typoPrefix_buttonText,
} from "./constants/typographyPrefixConstants";

import {
	mediaBackground,
	mediaBgMargin,
	mediaBgRadius,
	buttonPadding,
	buttonRadius,
	subTitlePadding,
	contentPadding,
	titlePadding,
	wrapperMargin,
	wrapperPadding,
} from "./constants/dimensionsConstants";

import {
	LAYOUT_TYPES,
	MEDIA_TYPES,
	ICON_IMAGE_BG_TYPES,
	sizeUnitTypes,
	HEADER_TAGS,
	CONTENTS_ALIGNMENTS,
	MEDIA_ALIGNMENTS_ON_FLEX_COLUMN,
	MEDIA_ALIGNMENTS_ON_FLEX_ROW,
} from "./constants";

function Inspector(props) {
	const { attributes, setAttributes } = props;

	const {
		// responsive control attributes ⬇
		resOption,

		//
		layoutPreset,

		//
		media,

		//
		enableSubTitle,

		//
		number,

		//
		imageUrl,

		//
		selectedIcon,

		//
		iconSize,
		TABiconSize,
		MOBiconSize,

		//
		flexDirection,

		//
		mediaWrapperMargin,

		//
		enableDescription,

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
		imageId,

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
		titleTag,
		subTitleTag,

		//
		enableButton,

		//
		buttonText,
		infoboxLink,

		//
		buttonTextColor,

		//
		titleColor,

		//
		subTitleColor,

		//
		descriptionColor,

		//
		buttonBgColor,

		//
		mediaAlignment,

		//
		contentsAlignment,
	} = attributes;

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

	useEffect(() => {
		switch (layoutPreset) {
			case "preset1":
				setAttributes({
					flexDirection: "column",
					contentAlignment: "center",
					mediaAlignSelf: "center",
				});
				break;

			case "preset2":
				setAttributes({
					flexDirection: "column-reverse",
					contentAlignment: "center",
					mediaAlignSelf: "center",
				});
				break;

			case "preset3":
				setAttributes({
					flexDirection: "row",
					contentAlignment: "left",
					mediaAlignSelf: "flex-start",
				});
				break;

			case "preset4":
				setAttributes({
					flexDirection: "row-reverse",
					contentAlignment: "right",
					mediaAlignSelf: "flex-start",
				});
				break;
		}
	}, [layoutPreset]);

	return (
		<InspectorControls key="controls">
			<span className="eb-panel-control">
				<PanelBody title={__("Notice Settings")} initialOpen={false}>
					<SelectControl
						label={__("Layout Preset ")}
						value={layoutPreset}
						options={LAYOUT_TYPES}
						onChange={(layoutPreset) => setAttributes({ layoutPreset })}
					/>

					{media !== "none" && (
						<>
							<BaseControl label={__("Media & content spacing")}>
								<RangeControl
									value={mediaWrapperMargin}
									onChange={(mediaWrapperMargin) =>
										setAttributes({ mediaWrapperMargin })
									}
									min={0}
									max={200}
								/>
							</BaseControl>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Media Contents Alignment")} initialOpen={false}>
					{media !== "none" && (
						<>
							{(flexDirection === "row" || flexDirection === "row-reverse") && (
								<BaseControl
									id="eb-infobox-alignments"
									label="Media alignments"
								>
									<ButtonGroup id="eb-infobox-alignments">
										{MEDIA_ALIGNMENTS_ON_FLEX_ROW.map(({ value, label }) => (
											<Button
												isLarge
												isSecondary={mediaAlignment !== value}
												isPrimary={mediaAlignment === value}
												onClick={() => setAttributes({ mediaAlignment: value })}
											>
												{label}
											</Button>
										))}
									</ButtonGroup>
								</BaseControl>
							)}

							{(flexDirection === "column" ||
								flexDirection === "column-reverse") && (
								<BaseControl
									id="eb-infobox-alignments"
									label="Media alignments"
								>
									<ButtonGroup id="eb-infobox-alignments">
										{MEDIA_ALIGNMENTS_ON_FLEX_COLUMN.map(({ value, label }) => (
											<Button
												isLarge
												isSecondary={mediaAlignment !== value}
												isPrimary={mediaAlignment === value}
												onClick={() => setAttributes({ mediaAlignment: value })}
											>
												{label}
											</Button>
										))}
									</ButtonGroup>
								</BaseControl>
							)}
						</>
					)}

					<BaseControl id="eb-infobox-alignments" label="Contents alignments">
						<ButtonGroup id="eb-infobox-alignments">
							{CONTENTS_ALIGNMENTS.map(({ value, label }) => (
								<Button
									isLarge
									isSecondary={contentsAlignment !== value}
									isPrimary={contentsAlignment === value}
									onClick={() => setAttributes({ contentsAlignment: value })}
								>
									{label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__("Media")} initialOpen={false}>
					<BaseControl id="eb-infobox-image-icon">
						<ButtonGroup id="eb-infobox-image-icon">
							{MEDIA_TYPES.map((value) => (
								<Button
									isLarge
									isSecondary={media !== value}
									isPrimary={media === value}
									onClick={() => setAttributes({ media: value })}
								>
									{value}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{media !== "none" && (
						<>
							{media === "icon" && (
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

							{media === "icon" && selectedIcon && (
								<>
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
											<ResetControl
												onReset={() =>
													setAttributes({ TABiconSize: undefined })
												}
											>
												<RangeControl
													label={__("Icon Size")}
													value={TABiconSize}
													onChange={(TABiconSize) =>
														setAttributes({ TABiconSize })
													}
													min={8}
													max={100}
												/>
											</ResetControl>
										)}

										{resOption == "mobile" && (
											<ResetControl
												onReset={() =>
													setAttributes({ MOBiconSize: undefined })
												}
											>
												<RangeControl
													allowReset
													label={__("Icon Size")}
													value={MOBiconSize}
													onChange={(MOBiconSize) =>
														setAttributes({ MOBiconSize })
													}
													min={8}
													max={100}
												/>
											</ResetControl>
										)}
									</WithResButtons>
								</>
							)}

							{media === "number" && (
								<>
									<BaseControl label={__("Number")} id="eb-infobox-number-id">
										<input
											type="number"
											value={number}
											id="eb-infobox-number-id"
											onChange={(e) =>
												setAttributes({
													number: parseInt(e.target.value, 10) || 0,
												})
											}
											min={0}
										/>
									</BaseControl>

									<TypographyDropdown
										baseLabel="Number Typography"
										typographyPrefixConstant={typoPrefix_number}
										typoRequiredProps={typoRequiredProps}
									/>
								</>
							)}

							{(media === "number" || media === "icon") && (
								<>
									<ColorControl
										label={__("Color")}
										color={numIconColor}
										onChange={(numIconColor) => setAttributes({ numIconColor })}
									/>

									<ToggleControl
										label={__("Use Background")}
										checked={useNumIconBg}
										onChange={() =>
											setAttributes({ useNumIconBg: !useNumIconBg })
										}
									/>

									{useNumIconBg && (
										<>
											<ResponsiveDimensionsControl
												resRequiredProps={typoRequiredProps}
												controlName={mediaBackground}
												baseLabel="Background size"
											/>

											<BaseControl label={__("Background Type")}>
												<ButtonGroup id="eb-infobox-infobox-background">
													{ICON_IMAGE_BG_TYPES.map(({ value, label }) => (
														<Button
															isLarge
															isPrimary={numIconBgType === value}
															isSecondary={numIconBgType !== value}
															onClick={() =>
																setAttributes({
																	numIconBgType: value,
																})
															}
														>
															{label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{numIconBgType === "fill" && (
												<ColorControl
													label={__("Background Color")}
													color={numIconBgColor}
													onChange={(numIconBgColor) =>
														setAttributes({ numIconBgColor })
													}
												/>
											)}

											{numIconBgType === "gradient" && (
												<PanelBody title={__("Gradient")} initialOpen={false}>
													<GradientColorControl
														gradientColor={numIconBgGradient}
														onChange={(numIconBgGradient) =>
															setAttributes({ numIconBgGradient })
														}
													/>
												</PanelBody>
											)}
										</>
									)}
								</>
							)}

							{media === "image" && !imageUrl && (
								<MediaUpload
									onSelect={({ id, url }) =>
										setAttributes({ imageUrl: url, imageId: id })
									}
									type="image"
									value={imageId}
									render={({ open }) => {
										return (
											<Button
												className="eb-infobox-inspector-panel-img-btn components-button"
												label={__("Upload Image")}
												icon="format-image"
												onClick={open}
											/>
										);
									}}
								/>
							)}

							{media === "image" && imageUrl && (
								<>
									<ImageAvatar
										imageUrl={imageUrl}
										onDeleteImage={() =>
											setAttributes({
												imageUrl: null,
											})
										}
									/>

									<UnitControl
										selectedUnit={mediaImgWidthUnit}
										unitTypes={sizeUnitTypes}
										onClick={(mediaImgWidthUnit) =>
											setAttributes({ mediaImgWidthUnit })
										}
									/>
									<WithResButtons
										className="for-media-image-width"
										resRequiredProps={resRequiredProps}
									>
										{resOption == "desktop" && (
											<RangeControl
												label={__("Image Width")}
												value={mediaImgWidth}
												onChange={(mediaImgWidth) =>
													setAttributes({ mediaImgWidth })
												}
												min={0}
												max={2000}
											/>
										)}

										{resOption == "tab" && (
											<ResetControl
												onReset={() =>
													setAttributes({ TABmediaImgWidth: undefined })
												}
											>
												<RangeControl
													label={__("Image Width")}
													value={TABmediaImgWidth}
													onChange={(TABmediaImgWidth) =>
														setAttributes({ TABmediaImgWidth })
													}
													min={0}
													max={1030}
												/>
											</ResetControl>
										)}

										{resOption == "mobile" && (
											<ResetControl
												onReset={() =>
													setAttributes({ MOBmediaImgWidth: undefined })
												}
											>
												<RangeControl
													label={__("Image Width")}
													value={MOBmediaImgWidth}
													onChange={(MOBmediaImgWidth) =>
														setAttributes({ MOBmediaImgWidth })
													}
													min={0}
													max={780}
												/>
											</ResetControl>
										)}
									</WithResButtons>

									<ToggleControl
										label={__("Auto Image Height")}
										checked={isMediaImgHeightAuto}
										onChange={() =>
											setAttributes({
												isMediaImgHeightAuto: !isMediaImgHeightAuto,
											})
										}
									/>

									{!isMediaImgHeightAuto && (
										<>
											<UnitControl
												selectedUnit={mediaImgHeightUnit}
												unitTypes={sizeUnitTypes}
												onClick={(mediaImgHeightUnit) =>
													setAttributes({ mediaImgHeightUnit })
												}
											/>
											<WithResButtons
												className="for-media-image-height"
												resRequiredProps={resRequiredProps}
											>
												{resOption == "desktop" && (
													<RangeControl
														label={__("Image Height")}
														value={mediaImgHeight}
														onChange={(mediaImgHeight) =>
															setAttributes({ mediaImgHeight })
														}
														min={0}
														max={2000}
													/>
												)}

												{resOption == "tab" && (
													<ResetControl
														onReset={() =>
															setAttributes({ TABmediaImgHeight: undefined })
														}
													>
														<RangeControl
															label={__("Image Height")}
															value={TABmediaImgHeight}
															onChange={(TABmediaImgHeight) =>
																setAttributes({ TABmediaImgHeight })
															}
															min={0}
															max={1030}
														/>
													</ResetControl>
												)}

												{resOption == "mobile" && (
													<ResetControl
														onReset={() =>
															setAttributes({ MOBmediaImgHeight: undefined })
														}
													>
														<RangeControl
															label={__("Image Height")}
															value={MOBmediaImgHeight}
															onChange={(MOBmediaImgHeight) =>
																setAttributes({ MOBmediaImgHeight })
															}
															min={0}
															max={780}
														/>
													</ResetControl>
												)}
											</WithResButtons>
										</>
									)}
								</>
							)}

							<ResponsiveDimensionsControl
								forBorderRadius
								resRequiredProps={typoRequiredProps}
								controlName={mediaBgRadius}
								baseLabel="Border Radius"
							/>

							<ResponsiveDimensionsControl
								resRequiredProps={typoRequiredProps}
								controlName={mediaBgMargin}
								baseLabel="Margin"
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Title")} initialOpen={false}>
					<BaseControl label={__("Title Tag")}>
						<ButtonGroup className="infobox-button-group">
							{HEADER_TAGS.map((header) => (
								<Button
									isSecondary={titleTag !== header}
									isPrimary={titleTag === header}
									onClick={() => setAttributes({ titleTag: header })}
								>
									{header.toUpperCase()}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					<TypographyDropdown
						baseLabel="Typography"
						typographyPrefixConstant={typoPrefix_title}
						typoRequiredProps={typoRequiredProps}
					/>

					<ResponsiveDimensionsControl
						resRequiredProps={typoRequiredProps}
						controlName={titlePadding}
						baseLabel="Title Padding"
					/>

					<ColorControl
						label={__("Color")}
						color={titleColor}
						onChange={(titleColor) => setAttributes({ titleColor })}
					/>
				</PanelBody>

				<PanelBody title={__("Subtitle")} initialOpen={false}>
					<ToggleControl
						label={__("Enable")}
						checked={enableSubTitle}
						onChange={() => setAttributes({ enableSubTitle: !enableSubTitle })}
					/>

					{enableSubTitle && (
						<>
							<BaseControl label={__("Subtitle Tag")}>
								<ButtonGroup className="infobox-button-group">
									{HEADER_TAGS.map((header) => (
										<Button
											isSecondary={subTitleTag !== header}
											isPrimary={subTitleTag === header}
											onClick={() => setAttributes({ subTitleTag: header })}
										>
											{header.toUpperCase()}
										</Button>
									))}
								</ButtonGroup>
							</BaseControl>

							<TypographyDropdown
								baseLabel="Typography"
								typographyPrefixConstant={typoPrefix_subTitle}
								typoRequiredProps={typoRequiredProps}
							/>

							<ResponsiveDimensionsControl
								resRequiredProps={typoRequiredProps}
								controlName={subTitlePadding}
								baseLabel="Subtitle Padding"
							/>

							<ColorControl
								label={__("Color")}
								color={subTitleColor}
								onChange={(subTitleColor) => setAttributes({ subTitleColor })}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Content")} initialOpen={false}>
					<ToggleControl
						label={__("Show content")}
						checked={enableDescription}
						onChange={() =>
							setAttributes({ enableDescription: !enableDescription })
						}
					/>

					{enableDescription && (
						<>
							<TypographyDropdown
								baseLabel="Typography"
								typographyPrefixConstant={typoPrefix_content}
								typoRequiredProps={typoRequiredProps}
							/>

							<ResponsiveDimensionsControl
								resRequiredProps={typoRequiredProps}
								controlName={contentPadding}
								baseLabel="Content Padding"
							/>

							<ColorControl
								label={__("Color")}
								color={descriptionColor}
								onChange={(descriptionColor) =>
									setAttributes({ descriptionColor })
								}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Button")} initialOpen={false}>
					<ToggleControl
						label={__("Show button")}
						checked={enableButton}
						onChange={() => setAttributes({ enableButton: !enableButton })}
					/>

					{enableButton && (
						<>
							<TextControl
								label={__("Button Text")}
								value={buttonText}
								onChange={(buttonText) => setAttributes({ buttonText })}
							/>

							<TextControl
								label={__("Link URL")}
								placeholder="https://your-link.com"
								value={infoboxLink}
								onChange={(infoboxLink) => setAttributes({ infoboxLink })}
							/>

							<TypographyDropdown
								baseLabel="Typography"
								typographyPrefixConstant={typoPrefix_buttonText}
								typoRequiredProps={typoRequiredProps}
							/>

							<ResponsiveDimensionsControl
								resRequiredProps={typoRequiredProps}
								controlName={buttonPadding}
								baseLabel="Button Padding"
							/>

							<ResponsiveDimensionsControl
								resRequiredProps={typoRequiredProps}
								controlName={buttonRadius}
								baseLabel="Button Border Radius"
							/>

							<ColorControl
								label={__("Text Color")}
								color={buttonTextColor || "#fff"}
								onChange={(buttonTextColor) =>
									setAttributes({ buttonTextColor })
								}
							/>

							<ColorControl
								label={__("Button Color")}
								color={buttonBgColor || "#3074FF"}
								onChange={(buttonBgColor) => setAttributes({ buttonBgColor })}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Margin Padding")} initialOpen={false}>
					<ResponsiveDimensionsControl
						resRequiredProps={typoRequiredProps}
						controlName={wrapperMargin}
						baseLabel="Container Margin"
					/>
					<ResponsiveDimensionsControl
						resRequiredProps={typoRequiredProps}
						controlName={wrapperPadding}
						baseLabel="Container Padding"
					/>
				</PanelBody>
			</span>
		</InspectorControls>
	);
}
export default Inspector;
