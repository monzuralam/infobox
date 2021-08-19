/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, MediaUpload } = wp.blockEditor;
const { useEffect } = wp.element;
const { select } = wp.data;
const {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Button,
	RangeControl,
	BaseControl,
	ButtonGroup,
	TabPanel,
} = wp.components;

/**
 * Internal dependencies
 */

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import faIcons from "../util/faIcons.js";
import TypographyDropdown from "../util/typography-control-v2";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import ResponsiveRangeController from "../util/responsive-range-control";
import ImageAvatar from "../util/image-avatar/";
import GradientColorControl from "../util/gradient-color-controller";
import ColorControl from "../util/color-control";
import BorderShadowControl from "../util/border-shadow-control";
import BackgroundControl from "../util/background-control";

import { infoWrapBg } from "./constants/backgroundsConstants";
import { wrpBdShadow } from "./constants/borderShadowConstants";

import objAttributes from "./attributes";

import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

import {
	typoPrefix_title,
	typoPrefix_content,
	typoPrefix_number,
	typoPrefix_subTitle,
	typoPrefix_buttonText,
} from "./constants/typographyPrefixConstants";

import {
	mediaIconSize,
	mediaImageWidth,
	mediaImageHeight,
} from "./constants/rangeNames";

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
		isMediaImgHeightAuto,

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
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
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
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: "Styles",
							className: "eb-tab styles",
						},
						{
							name: "advance",
							title: "Advance",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody
										title={__("Infobox Settings")}
										// initialOpen={false}
									>
										<SelectControl
											label={__("Layout Preset ")}
											value={layoutPreset}
											options={LAYOUT_TYPES}
											onChange={(layoutPreset) =>
												setAttributes({ layoutPreset })
											}
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

									<PanelBody title={__("Alignments")}>
										{media !== "none" && (
											<>
												{(flexDirection === "row" ||
													flexDirection === "row-reverse") && (
													<BaseControl
														id="eb-infobox-alignments"
														label="Media alignments"
													>
														<ButtonGroup id="eb-infobox-alignments">
															{MEDIA_ALIGNMENTS_ON_FLEX_ROW.map(
																({ value, label }) => (
																	<Button
																		isLarge
																		isSecondary={mediaAlignment !== value}
																		isPrimary={mediaAlignment === value}
																		onClick={() =>
																			setAttributes({ mediaAlignment: value })
																		}
																	>
																		{label}
																	</Button>
																)
															)}
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
															{MEDIA_ALIGNMENTS_ON_FLEX_COLUMN.map(
																({ value, label }) => (
																	<Button
																		isLarge
																		isSecondary={mediaAlignment !== value}
																		isPrimary={mediaAlignment === value}
																		onClick={() =>
																			setAttributes({ mediaAlignment: value })
																		}
																	>
																		{label}
																	</Button>
																)
															)}
														</ButtonGroup>
													</BaseControl>
												)}
											</>
										)}

										<BaseControl
											id="eb-infobox-alignments"
											label="Contents alignments"
										>
											<ButtonGroup id="eb-infobox-alignments">
												{CONTENTS_ALIGNMENTS.map(({ value, label }) => (
													<Button
														isLarge
														isSecondary={contentsAlignment !== value}
														isPrimary={contentsAlignment === value}
														onClick={() =>
															setAttributes({ contentsAlignment: value })
														}
													>
														{label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody title={__("Media")}>
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
															onChange={(icon) =>
																setAttributes({ selectedIcon: icon })
															}
															value={selectedIcon}
															appendTo="body"
															isMulti={false}
														/>
													</BaseControl>
												)}

												{media === "icon" && selectedIcon && (
													<ResponsiveRangeController
														baseLabel={__("Icon Size", "Infobox")}
														controlName={mediaIconSize}
														resRequiredProps={resRequiredProps}
														min={8}
														max={100}
														step={1}
													/>
												)}

												{media === "number" && (
													<>
														<BaseControl
															label={__("Number")}
															id="eb-infobox-number-id"
														>
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
															resRequiredProps={resRequiredProps}
														/>
													</>
												)}

												{(media === "number" || media === "icon") && (
													<>
														<ColorControl
															label={__("Color")}
															color={numIconColor}
															onChange={(numIconColor) =>
																setAttributes({ numIconColor })
															}
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
																	resRequiredProps={resRequiredProps}
																	controlName={mediaBackground}
																	baseLabel="Background size"
																/>

																<BaseControl label={__("Background Type")}>
																	<ButtonGroup id="eb-infobox-infobox-background">
																		{ICON_IMAGE_BG_TYPES.map(
																			({ value, label }) => (
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
																			)
																		)}
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
																	<PanelBody
																		title={__("Gradient")}
																		// initialOpen={false}
																	>
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
																	className="eb-background-control-inspector-panel-img-btn components-button"
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
														<ResponsiveRangeController
															baseLabel={__("Image Width", "infobox")}
															controlName={mediaImageWidth}
															resRequiredProps={resRequiredProps}
															units={sizeUnitTypes}
														/>
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
																<ResponsiveRangeController
																	baseLabel={__("Image Height", "infobox")}
																	controlName={mediaImageHeight}
																	resRequiredProps={resRequiredProps}
																	units={sizeUnitTypes}
																/>
															</>
														)}
													</>
												)}

												<ResponsiveDimensionsControl
													forBorderRadius
													resRequiredProps={resRequiredProps}
													controlName={mediaBgRadius}
													baseLabel="Border Radius"
												/>

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
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
											resRequiredProps={resRequiredProps}
										/>

										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
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
											onChange={() =>
												setAttributes({ enableSubTitle: !enableSubTitle })
											}
										/>

										{enableSubTitle && (
											<>
												<BaseControl label={__("Subtitle Tag")}>
													<ButtonGroup className="infobox-button-group">
														{HEADER_TAGS.map((header) => (
															<Button
																isSecondary={subTitleTag !== header}
																isPrimary={subTitleTag === header}
																onClick={() =>
																	setAttributes({ subTitleTag: header })
																}
															>
																{header.toUpperCase()}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>

												<TypographyDropdown
													baseLabel="Typography"
													typographyPrefixConstant={typoPrefix_subTitle}
													resRequiredProps={resRequiredProps}
												/>

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={subTitlePadding}
													baseLabel="Subtitle Padding"
												/>

												<ColorControl
													label={__("Color")}
													color={subTitleColor}
													onChange={(subTitleColor) =>
														setAttributes({ subTitleColor })
													}
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
													resRequiredProps={resRequiredProps}
												/>

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
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
											onChange={() =>
												setAttributes({ enableButton: !enableButton })
											}
										/>

										{enableButton && (
											<>
												<TextControl
													label={__("Button Text")}
													value={buttonText}
													onChange={(buttonText) =>
														setAttributes({ buttonText })
													}
												/>

												<TextControl
													label={__("Link URL")}
													placeholder="https://your-link.com"
													value={infoboxLink}
													onChange={(infoboxLink) =>
														setAttributes({ infoboxLink })
													}
												/>

												<TypographyDropdown
													baseLabel="Typography"
													typographyPrefixConstant={typoPrefix_buttonText}
													resRequiredProps={resRequiredProps}
												/>

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={buttonPadding}
													baseLabel="Button Padding"
												/>

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={buttonRadius}
													baseLabel="Button Border Radius"
												/>

												<ColorControl
													label={__("Text Color")}
													color={buttonTextColor}
													onChange={(buttonTextColor) =>
														setAttributes({ buttonTextColor })
													}
												/>

												<ColorControl
													label={__("Button Color")}
													color={buttonBgColor}
													onChange={(buttonBgColor) =>
														setAttributes({ buttonBgColor })
													}
												/>
											</>
										)}
									</PanelBody>
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody title={__("Margin Padding")}>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={wrapperMargin}
											baseLabel="Container Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={wrapperPadding}
											baseLabel="Container Padding"
										/>
									</PanelBody>

									<PanelBody title={__("Background")} initialOpen={false}>
										<BackgroundControl
											controlName={infoWrapBg}
											resRequiredProps={resRequiredProps}
											// noOverlay
											// noMainBgi
											// noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
										/>
									</PanelBody>

									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={wrpBdShadow}
											resRequiredProps={resRequiredProps}
											// noShadow
											// noBorder
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
}
export default Inspector;
