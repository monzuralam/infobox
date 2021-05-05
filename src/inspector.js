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
	typoPrefix_header,
	typoPrefix_content,
	typoPrefix_number,
} from "./constants/typographyPrefixConstants";

import {
	mediaBackground,
	mediaBgMargin,
	mediaBgRadius,
} from "./constants/dimensionsConstants";

import { LAYOUT_TYPES, MEDIA_TYPES, ICON_IMAGE_BG_TYPES } from "./constants";

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
					flexDirection: undefined,
					contentAlignment: undefined,
					mediaAlignSelf: undefined,
				});
				break;

			case "preset4":
				setAttributes({
					flexDirection: "row-reverse",
					contentAlignment: "right",
					mediaAlignSelf: undefined,
				});
				break;
		}
	}, [layoutPreset]);

	return (
		<InspectorControls key="controls">
			<span className="eb-panel-control">
				<PanelBody title={__("Notice Settings")}>
					<SelectControl
						label={__("Layout Preset ")}
						value={layoutPreset}
						options={LAYOUT_TYPES}
						onChange={(layoutPreset) => setAttributes({ layoutPreset })}
					/>
					{media !== "none" && (
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
					)}
				</PanelBody>

				<PanelBody
					title={__("Media")}
					// initialOpen={false}
				>
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
											<RangeControl
												allowReset
												label={__("Icon Size")}
												value={TABiconSize}
												onChange={(TABiconSize) =>
													setAttributes({ TABiconSize })
												}
												min={8}
												max={100}
											/>
										)}

										{resOption == "mobile" && (
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
								<ImageAvatar
									imageUrl={imageUrl}
									onDeleteImage={() =>
										setAttributes({
											imageUrl: null,
										})
									}
								/>
							)}

							{media === "image" && imageUrl && (
								<>
									{/* <WithResButtons
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
						 */}
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
					cool insoectors
				</PanelBody>
				<PanelBody title={__("Subtitle")} initialOpen={false}>
					<ToggleControl
						label={__("Enable")}
						checked={enableSubTitle}
						onChange={() => setAttributes({ enableSubTitle: !enableSubTitle })}
					/>
				</PanelBody>
				<PanelBody title={__("Content")} initialOpen={false}>
					<ToggleControl
						label={__("Show content")}
						checked={enableDescription}
						onChange={() =>
							setAttributes({ enableDescription: !enableDescription })
						}
					/>
				</PanelBody>
			</span>
		</InspectorControls>
	);
}
export default Inspector;
