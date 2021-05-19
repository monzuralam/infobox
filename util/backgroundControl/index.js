/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { MediaUpload } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	Button,
	RangeControl,
	BaseControl,
	ButtonGroup,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import ImageAvatar from "../image-avatar";
import GradientColorControl from "../gradient-color-controller";
import UnitControl from "../unit-control";
import ColorControl from "../color-control";
import ResetControl from "../reset-control";
import WithResBtns from "../withResBtns";

export default function BackgroundControl({ resRequiredProps }) {
	const { setAttributes, attributes, resOption } = resRequiredProps;

	const {
		// background attributes ⬇
		wrp_backgroundType,
		wrp_backgroundColor,
		wrp_gradientColor,
		wrp_bgImageURL,
		wrp_bgImageID,

		wrp_backgroundSize,
		wrp_bgImgCustomSize,
		wrp_bgImgCustomSizeUnit,
		wrp_bgImgPos,
		wrp_bgImgcustomPosX,
		wrp_bgImgcustomPosXUnit,
		wrp_bgImgcustomPosY,
		wrp_bgImgcustomPosYUnit,
		wrp_bgImgAttachment,
		wrp_bgImgRepeat,

		TABwrp_backgroundSize,
		TABwrp_bgImgCustomSize,
		TABwrp_bgImgCustomSizeUnit,
		TABwrp_bgImgPos,
		TABwrp_bgImgcustomPosX,
		TABwrp_bgImgcustomPosXUnit,
		TABwrp_bgImgcustomPosY,
		TABwrp_bgImgcustomPosYUnit,
		TABwrp_bgImgRepeat,

		MOBwrp_backgroundSize,
		MOBwrp_bgImgCustomSize,
		MOBwrp_bgImgCustomSizeUnit,
		MOBwrp_bgImgPos,
		MOBwrp_bgImgcustomPosX,
		MOBwrp_bgImgcustomPosXUnit,
		MOBwrp_bgImgcustomPosY,
		MOBwrp_bgImgcustomPosYUnit,
		MOBwrp_bgImgRepeat,
	} = attributes;

	return (
		<>
			<BaseControl label={__("Background Type")}>
				<ButtonGroup>
					{[
						{ label: __("Fill"), value: "fill" },
						{ label: __("Gradient"), value: "gradient" },
						{ label: __("Image"), value: "image" },
					].map(({ value, label }) => (
						<Button
							isPrimary={wrp_backgroundType === value}
							isSecondary={wrp_backgroundType !== value}
							onClick={() =>
								setAttributes({
									wrp_backgroundType: value,
								})
							}
						>
							{label}
						</Button>
					))}
				</ButtonGroup>
			</BaseControl>

			{wrp_backgroundType === "image" && (
				<PanelBody title={__("Background Image")}>
					<MediaUpload
						onSelect={({ url, id }) =>
							setAttributes({
								wrp_bgImageURL: url,
								wrp_bgImageID: id,
							})
						}
						type="image"
						value={wrp_bgImageID}
						render={({ open }) =>
							!wrp_bgImageURL && (
								<Button
									className="eb-infobox-inspector-panel-img-btn components-button"
									label={__("Upload Image")}
									icon="format-image"
									onClick={open}
								/>
							)
						}
					/>

					{wrp_bgImageURL && (
						<>
							<ImageAvatar
								imageUrl={wrp_bgImageURL}
								onDeleteImage={() => setAttributes({ wrp_bgImageURL: null })}
							/>

							{resOption === "desktop" && (
								<>
									<WithResBtns
										resRequiredProps={resRequiredProps}
										label="position"
									>
										<SelectControl
											value={wrp_bgImgPos}
											options={[
												{ label: __("Default"), value: "" },
												{
													label: __("Center Center"),
													value: "center center",
												},
												{ label: __("Center Left"), value: "center left" },
												{
													label: __("Center Right"),
													value: "center right",
												},
												{ label: __("Top Center"), value: "top center" },
												{ label: __("Top Left"), value: "top left" },
												{ label: __("Top Right"), value: "top right" },
												{
													label: __("Bottom Center"),
													value: "bottom center",
												},
												{ label: __("Bottom Left"), value: "bottom left" },
												{
													label: __("Bottom Right"),
													value: "bottom right",
												},
												{ label: __("Custom"), value: "custom" },
											]}
											onChange={(wrp_bgImgPos) =>
												setAttributes({ wrp_bgImgPos })
											}
										/>
									</WithResBtns>

									{wrp_bgImgPos === "custom" && (
										<>
											<UnitControl
												selectedUnit={wrp_bgImgcustomPosXUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(wrp_bgImgcustomPosXUnit) =>
													setAttributes({ wrp_bgImgcustomPosXUnit })
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="X Position"
											>
												<RangeControl
													value={wrp_bgImgcustomPosX}
													onChange={(wrp_bgImgcustomPosX) =>
														setAttributes({ wrp_bgImgcustomPosX })
													}
												/>
											</WithResBtns>

											<UnitControl
												selectedUnit={wrp_bgImgcustomPosYUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(wrp_bgImgcustomPosYUnit) =>
													setAttributes({ wrp_bgImgcustomPosYUnit })
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Y Position"
											>
												<RangeControl
													value={wrp_bgImgcustomPosY}
													onChange={(wrp_bgImgcustomPosY) =>
														setAttributes({ wrp_bgImgcustomPosY })
													}
												/>
											</WithResBtns>
										</>
									)}

									<SelectControl
										label="Attachment"
										value={wrp_bgImgAttachment}
										options={[
											{ label: __("Default"), value: "" },
											{ label: __("Scroll"), value: "scroll" },
											{ label: __("Fixed"), value: "fixed" },
										]}
										onChange={(wrp_bgImgAttachment) =>
											setAttributes({ wrp_bgImgAttachment })
										}
									/>

									{wrp_bgImgAttachment === "fixed" && (
										<p
											style={{
												marginTop: "-10px",
												paddingBottom: "10px",
											}}
										>
											<i>Note: Attachment Fixed works only on desktop.</i>
										</p>
									)}

									<WithResBtns
										resRequiredProps={resRequiredProps}
										label="Repeat"
									>
										<SelectControl
											value={wrp_bgImgRepeat}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("No-repeat"), value: "no-repeat" },
												{ label: __("Repeat"), value: "repeat" },
												{ label: __("Repeat-x"), value: "repeat-x" },
												{ label: __("Repeat-y"), value: "repeat-y" },
											]}
											onChange={(wrp_bgImgRepeat) =>
												setAttributes({ wrp_bgImgRepeat })
											}
										/>
									</WithResBtns>

									<WithResBtns resRequiredProps={resRequiredProps} label="Size">
										<SelectControl
											value={wrp_backgroundSize}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("Auto"), value: "auto" },
												{ label: __("Cover"), value: "cover" },
												{ label: __("Contain"), value: "contain" },
												{ label: __("Custom"), value: "custom" },
											]}
											onChange={(wrp_backgroundSize) =>
												setAttributes({ wrp_backgroundSize })
											}
										/>
									</WithResBtns>

									{wrp_backgroundSize === "custom" && (
										<>
											<UnitControl
												selectedUnit={wrp_bgImgCustomSizeUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(wrp_bgImgCustomSizeUnit) =>
													setAttributes({ wrp_bgImgCustomSizeUnit })
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Width"
											>
												<RangeControl
													value={wrp_bgImgCustomSize}
													onChange={(wrp_bgImgCustomSize) =>
														setAttributes({ wrp_bgImgCustomSize })
													}
												/>
											</WithResBtns>
										</>
									)}
								</>
							)}

							{resOption === "tab" && (
								<>
									<WithResBtns
										resRequiredProps={resRequiredProps}
										label="position"
									>
										<SelectControl
											value={TABwrp_bgImgPos}
											options={[
												{ label: __("Default"), value: "" },
												{
													label: __("Center Center"),
													value: "center center",
												},
												{ label: __("Center Left"), value: "center left" },
												{
													label: __("Center Right"),
													value: "center right",
												},
												{ label: __("Top Center"), value: "top center" },
												{ label: __("Top Left"), value: "top left" },
												{ label: __("Top Right"), value: "top right" },
												{
													label: __("Bottom Center"),
													value: "bottom center",
												},
												{ label: __("Bottom Left"), value: "bottom left" },
												{
													label: __("Bottom Right"),
													value: "bottom right",
												},
												{ label: __("Custom"), value: "custom" },
											]}
											onChange={(TABwrp_bgImgPos) =>
												setAttributes({ TABwrp_bgImgPos })
											}
										/>
									</WithResBtns>

									{TABwrp_bgImgPos === "custom" && (
										<>
											<UnitControl
												selectedUnit={TABwrp_bgImgcustomPosXUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(TABwrp_bgImgcustomPosXUnit) =>
													setAttributes({ TABwrp_bgImgcustomPosXUnit })
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="X Position"
											>
												<ResetControl
													onReset={() =>
														setAttributes({
															TABwrp_bgImgcustomPosX: undefined,
														})
													}
												>
													<RangeControl
														value={TABwrp_bgImgcustomPosX}
														onChange={(TABwrp_bgImgcustomPosX) =>
															setAttributes({ TABwrp_bgImgcustomPosX })
														}
													/>
												</ResetControl>
											</WithResBtns>

											<UnitControl
												selectedUnit={TABwrp_bgImgcustomPosYUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(TABwrp_bgImgcustomPosYUnit) =>
													setAttributes({ TABwrp_bgImgcustomPosYUnit })
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Y Position"
											>
												<ResetControl
													onReset={() =>
														setAttributes({
															TABwrp_bgImgcustomPosY: undefined,
														})
													}
												>
													<RangeControl
														value={TABwrp_bgImgcustomPosY}
														onChange={(TABwrp_bgImgcustomPosY) =>
															setAttributes({ TABwrp_bgImgcustomPosY })
														}
													/>
												</ResetControl>
											</WithResBtns>
										</>
									)}

									<SelectControl
										label="Attachment"
										value={wrp_bgImgAttachment}
										options={[
											{ label: __("Default"), value: "" },
											{ label: __("Scroll"), value: "scroll" },
											{ label: __("Fixed"), value: "fixed" },
										]}
										onChange={(wrp_bgImgAttachment) =>
											setAttributes({ wrp_bgImgAttachment })
										}
									/>

									{wrp_bgImgAttachment === "fixed" && (
										<p
											style={{
												marginTop: "-10px",
												paddingBottom: "10px",
											}}
										>
											<i>Note: Attachment Fixed works only on desktop.</i>
										</p>
									)}

									<WithResBtns
										resRequiredProps={resRequiredProps}
										label="Repeat"
									>
										<SelectControl
											value={TABwrp_bgImgRepeat}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("No-repeat"), value: "no-repeat" },
												{ label: __("Repeat"), value: "repeat" },
												{ label: __("Repeat-x"), value: "repeat-x" },
												{ label: __("Repeat-y"), value: "repeat-y" },
											]}
											onChange={(TABwrp_bgImgRepeat) =>
												setAttributes({ TABwrp_bgImgRepeat })
											}
										/>
									</WithResBtns>

									<WithResBtns resRequiredProps={resRequiredProps} label="Size">
										<SelectControl
											value={TABwrp_backgroundSize}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("Auto"), value: "auto" },
												{ label: __("Cover"), value: "cover" },
												{ label: __("Contain"), value: "contain" },
												{ label: __("Custom"), value: "custom" },
											]}
											onChange={(TABwrp_backgroundSize) =>
												setAttributes({ TABwrp_backgroundSize })
											}
										/>
									</WithResBtns>

									{TABwrp_backgroundSize === "custom" && (
										<>
											<UnitControl
												selectedUnit={TABwrp_bgImgCustomSizeUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(TABwrp_bgImgCustomSizeUnit) =>
													setAttributes({ TABwrp_bgImgCustomSizeUnit })
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Width"
											>
												<ResetControl
													onReset={() =>
														setAttributes({
															TABwrp_bgImgCustomSize: undefined,
														})
													}
												>
													<RangeControl
														value={TABwrp_bgImgCustomSize}
														onChange={(TABwrp_bgImgCustomSize) =>
															setAttributes({ TABwrp_bgImgCustomSize })
														}
													/>
												</ResetControl>
											</WithResBtns>
										</>
									)}
								</>
							)}

							{resOption === "mobile" && (
								<>
									<WithResBtns
										resRequiredProps={resRequiredProps}
										label="position"
									>
										<SelectControl
											value={MOBwrp_bgImgPos}
											options={[
												{ label: __("Default"), value: "" },
												{
													label: __("Center Center"),
													value: "center center",
												},
												{ label: __("Center Left"), value: "center left" },
												{
													label: __("Center Right"),
													value: "center right",
												},
												{ label: __("Top Center"), value: "top center" },
												{ label: __("Top Left"), value: "top left" },
												{ label: __("Top Right"), value: "top right" },
												{
													label: __("Bottom Center"),
													value: "bottom center",
												},
												{ label: __("Bottom Left"), value: "bottom left" },
												{
													label: __("Bottom Right"),
													value: "bottom right",
												},
												{ label: __("Custom"), value: "custom" },
											]}
											onChange={(MOBwrp_bgImgPos) =>
												setAttributes({ MOBwrp_bgImgPos })
											}
										/>
									</WithResBtns>

									{MOBwrp_bgImgPos === "custom" && (
										<>
											<UnitControl
												selectedUnit={MOBwrp_bgImgcustomPosXUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(MOBwrp_bgImgcustomPosXUnit) =>
													setAttributes({ MOBwrp_bgImgcustomPosXUnit })
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="X Position"
											>
												<ResetControl
													onReset={() =>
														setAttributes({
															MOBwrp_bgImgcustomPosX: undefined,
														})
													}
												>
													<RangeControl
														value={MOBwrp_bgImgcustomPosX}
														onChange={(MOBwrp_bgImgcustomPosX) =>
															setAttributes({ MOBwrp_bgImgcustomPosX })
														}
													/>
												</ResetControl>
											</WithResBtns>

											<UnitControl
												selectedUnit={MOBwrp_bgImgcustomPosYUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(MOBwrp_bgImgcustomPosYUnit) =>
													setAttributes({ MOBwrp_bgImgcustomPosYUnit })
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Y Position"
											>
												<ResetControl
													onReset={() =>
														setAttributes({
															MOBwrp_bgImgcustomPosY: undefined,
														})
													}
												>
													<RangeControl
														value={MOBwrp_bgImgcustomPosY}
														onChange={(MOBwrp_bgImgcustomPosY) =>
															setAttributes({ MOBwrp_bgImgcustomPosY })
														}
													/>
												</ResetControl>
											</WithResBtns>
										</>
									)}

									<SelectControl
										label="Attachment"
										value={wrp_bgImgAttachment}
										options={[
											{ label: __("Default"), value: "" },
											{ label: __("Scroll"), value: "scroll" },
											{ label: __("Fixed"), value: "fixed" },
										]}
										onChange={(wrp_bgImgAttachment) =>
											setAttributes({ wrp_bgImgAttachment })
										}
									/>

									{wrp_bgImgAttachment === "fixed" && (
										<p
											style={{
												marginTop: "-10px",
												paddingBottom: "10px",
											}}
										>
											<i>Note: Attachment Fixed works only on desktop.</i>
										</p>
									)}

									<WithResBtns
										resRequiredProps={resRequiredProps}
										label="Repeat"
									>
										<SelectControl
											value={MOBwrp_bgImgRepeat}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("No-repeat"), value: "no-repeat" },
												{ label: __("Repeat"), value: "repeat" },
												{ label: __("Repeat-x"), value: "repeat-x" },
												{ label: __("Repeat-y"), value: "repeat-y" },
											]}
											onChange={(MOBwrp_bgImgRepeat) =>
												setAttributes({ MOBwrp_bgImgRepeat })
											}
										/>
									</WithResBtns>

									<WithResBtns resRequiredProps={resRequiredProps} label="Size">
										<SelectControl
											value={MOBwrp_backgroundSize}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("Auto"), value: "auto" },
												{ label: __("Cover"), value: "cover" },
												{ label: __("Contain"), value: "contain" },
												{ label: __("Custom"), value: "custom" },
											]}
											onChange={(MOBwrp_backgroundSize) =>
												setAttributes({ MOBwrp_backgroundSize })
											}
										/>
									</WithResBtns>

									{MOBwrp_backgroundSize === "custom" && (
										<>
											<UnitControl
												selectedUnit={MOBwrp_bgImgCustomSizeUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(MOBwrp_bgImgCustomSizeUnit) =>
													setAttributes({ MOBwrp_bgImgCustomSizeUnit })
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Width"
											>
												<ResetControl
													onReset={() =>
														setAttributes({
															MOBwrp_bgImgCustomSize: undefined,
														})
													}
												>
													<RangeControl
														value={MOBwrp_bgImgCustomSize}
														onChange={(MOBwrp_bgImgCustomSize) =>
															setAttributes({ MOBwrp_bgImgCustomSize })
														}
													/>
												</ResetControl>
											</WithResBtns>
										</>
									)}
								</>
							)}
						</>
					)}
				</PanelBody>
			)}

			{wrp_backgroundType === "fill" && (
				<ColorControl
					label={__("Background Color")}
					color={wrp_backgroundColor}
					onChange={(wrp_backgroundColor) =>
						setAttributes({ wrp_backgroundColor })
					}
				/>
			)}

			{wrp_backgroundType === "gradient" && (
				<PanelBody title={__("Gradient")} initialOpen={false}>
					<GradientColorControl
						gradientColor={wrp_gradientColor}
						onChange={(wrp_gradientColor) =>
							setAttributes({ wrp_gradientColor })
						}
					/>
				</PanelBody>
			)}
		</>
	);
}
