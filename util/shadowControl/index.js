/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

import {
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

import ColorControl from "../color-control";
import ResetControl from "../reset-control";

export default function ShadowControl({ resRequiredProps, controlName }) {
	const { setAttributes, attributes } = resRequiredProps;
	return (
		<>
			<SelectControl
				label={__("Border Style")}
				value={wrp_borderStyle}
				options={BORDER_STYLES}
				onChange={(wrp_borderStyle) => setAttributes({ wrp_borderStyle })}
			/>

			{wrp_borderStyle !== "none" && (
				<>
					<ColorControl
						label={__("Border Color")}
						color={wrp_borderColor}
						onChange={(wrp_borderColor) => setAttributes({ wrp_borderColor })}
					/>

					<ResponsiveDimensionsControl
						resRequiredProps={resRequiredProps}
						controlName={wrp_border}
						baseLabel="Border Width"
					/>
				</>
			)}

			<ResponsiveDimensionsControl
				forBorderRadius
				resRequiredProps={resRequiredProps}
				controlName={wrp_radius}
				baseLabel="Border Radius"
			/>

			<BaseControl label={__("Box Shadow")} className="eb-typography-base">
				<Dropdown
					className="eb-typography-dropdown"
					contentClassName="my-popover-content-classname"
					position="bottom right"
					renderToggle={({ isOpen, onToggle }) => (
						<Button isSmall onClick={onToggle} aria-expanded={isOpen}>
							<TypographyIcon />
						</Button>
					)}
					renderContent={() => (
						<>
							<div
								className="eb-panel-control"
								style={{ minWidth: "230px", padding: "10px" }}
							>
								<BaseControl id="eb-infobox-shadow-hover-ptions">
									<ButtonGroup id="eb-infobox-shadow-hover-ptions">
										{SHADOW_HOVER_OPTIONS.map(({ value, label }) => (
											<Button
												isLarge
												isSecondary={wrp_shadowType !== value}
												isPrimary={wrp_shadowType === value}
												onClick={() => setAttributes({ wrp_shadowType: value })}
											>
												{label}
											</Button>
										))}
									</ButtonGroup>{" "}
								</BaseControl>

								{wrp_shadowType === "normal" && (
									<>
										<ColorControl
											label={__("Shadow Color")}
											color={wrp_shadowColor}
											onChange={(wrp_shadowColor) =>
												setAttributes({ wrp_shadowColor })
											}
										/>

										<ResetControl
											onReset={() => setAttributes({ wrp_hOffset: undefined })}
										>
											<RangeControl
												label={__("Horizontal Offset")}
												value={wrp_hOffset}
												onChange={(wrp_hOffset) =>
													setAttributes({ wrp_hOffset })
												}
												min={0}
												max={20}
											/>
										</ResetControl>

										<ResetControl
											onReset={() => setAttributes({ wrp_vOffset: undefined })}
										>
											<RangeControl
												label={__("Vertical Offset")}
												value={wrp_vOffset}
												onChange={(wrp_vOffset) =>
													setAttributes({ wrp_vOffset })
												}
												min={0}
												max={20}
											/>
										</ResetControl>

										<ResetControl
											onReset={() => setAttributes({ wrp_blur: undefined })}
										>
											<RangeControl
												label={__("Shadow Blur")}
												value={wrp_blur}
												onChange={(wrp_blur) => setAttributes({ wrp_blur })}
												min={0}
												max={20}
											/>
										</ResetControl>

										<ResetControl
											onReset={() => setAttributes({ wrp_spread: undefined })}
										>
											<RangeControl
												label={__("Shadow Spread")}
												value={wrp_spread}
												onChange={(wrp_spread) => setAttributes({ wrp_spread })}
												min={0}
												max={20}
											/>
										</ResetControl>
									</>
								)}

								{wrp_shadowType === "hover" && (
									<>
										<ColorControl
											label={__("Hover Shadow Color")}
											color={wrp_hoverShadowColor}
											onChange={(wrp_hoverShadowColor) =>
												setAttributes({ wrp_hoverShadowColor })
											}
										/>

										<ResetControl
											onReset={() =>
												setAttributes({ wrp_hoverHOffset: undefined })
											}
										>
											<RangeControl
												label={__("Horizontal Offset")}
												value={wrp_hoverHOffset}
												onChange={(wrp_hoverHOffset) =>
													setAttributes({ wrp_hoverHOffset })
												}
												min={0}
												max={20}
											/>
										</ResetControl>

										<ResetControl
											onReset={() =>
												setAttributes({ wrp_hoverVOffset: undefined })
											}
										>
											<RangeControl
												label={__("Vertical Offset")}
												value={wrp_hoverVOffset}
												onChange={(wrp_hoverVOffset) =>
													setAttributes({ wrp_hoverVOffset })
												}
												min={0}
												max={20}
											/>
										</ResetControl>

										<ResetControl
											onReset={() =>
												setAttributes({ wrp_hoverBlur: undefined })
											}
										>
											<RangeControl
												label={__("Shadow Blur")}
												value={wrp_hoverBlur}
												onChange={(wrp_hoverBlur) =>
													setAttributes({ wrp_hoverBlur })
												}
												min={0}
												max={20}
											/>
										</ResetControl>

										<ResetControl
											onReset={() =>
												setAttributes({ wrp_hoverSpread: undefined })
											}
										>
											<RangeControl
												label={__("Shadow Spread")}
												value={wrp_hoverSpread}
												onChange={(wrp_hoverSpread) =>
													setAttributes({ wrp_hoverSpread })
												}
												min={0}
												max={20}
											/>
										</ResetControl>
									</>
								)}

								<ToggleControl
									label={__("Inset")}
									checked={wrp_inset}
									onChange={() => setAttributes({ wrp_inset: !wrp_inset })}
								/>

								<BaseControl id="eb-infobox-transition-time">
									<TextControl
										label={__("Transition")}
										value={wrp_transitionTime}
										type="number"
										onChange={(wrp_transitionTime) =>
											setAttributes({ wrp_transitionTime })
										}
									/>
								</BaseControl>
							</div>
						</>
					)}
				/>
			</BaseControl>
		</>
	);
}
