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
import WithResBtns from "../withResBtns";

export default function BackgroundControl({ resRequiredProps, controlName }) {
	const { setAttributes, attributes, resOption } = resRequiredProps;

	const {
		// background attributes ⬇
		[`${controlName}backgroundType`]: backgroundType,
		[`${controlName}backgroundColor`]: backgroundColor,
		[`${controlName}gradientColor`]: gradientColor,
		[`${controlName}bgImageURL`]: bgImageURL,
		[`${controlName}bgImageID`]: bgImageID,
		[`${controlName}backgroundSize`]: backgroundSize,
		[`${controlName}bgImgCustomSize`]: bgImgCustomSize,
		[`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
		[`${controlName}bgImgPos`]: bgImgPos,
		[`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
		[`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
		[`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
		[`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
		[`${controlName}bgImgAttachment`]: bgImgAttachment,
		[`${controlName}bgImgRepeat`]: bgImgRepeat,

		[`TAB${controlName}backgroundSize`]: TABbackgroundSize,
		[`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
		[`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
		[`TAB${controlName}bgImgPos`]: TABbgImgPos,
		[`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
		[`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
		[`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
		[`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
		[`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,

		[`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
		[`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
		[`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
		[`MOB${controlName}bgImgPos`]: MOBbgImgPos,
		[`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
		[`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
		[`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
		[`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
		[`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat,
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
							isPrimary={backgroundType === value}
							isSecondary={backgroundType !== value}
							onClick={() =>
								setAttributes({
									[`${controlName}backgroundType`]: value,
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
					onChange={(backgroundColor) =>
						setAttributes({
							[`${controlName}backgroundColor`]: backgroundColor,
						})
					}
				/>
			)}

			{backgroundType === "gradient" && (
				<PanelBody title={__("Gradient")} initialOpen={false}>
					<GradientColorControl
						gradientColor={gradientColor}
						onChange={(gradientColor) =>
							setAttributes({ [`${controlName}gradientColor`]: gradientColor })
						}
					/>
				</PanelBody>
			)}

			{backgroundType === "image" && (
				<PanelBody title={__("Background Image")}>
					<MediaUpload
						onSelect={({ url, id }) =>
							setAttributes({
								[`${controlName}bgImageURL`]: url,
								[`${controlName}bgImageID`]: id,
							})
						}
						type="image"
						value={bgImageID}
						render={({ open }) =>
							!bgImageURL && (
								<Button
									className="eb-infobox-inspector-panel-img-btn components-button"
									label={__("Upload Image")}
									icon="format-image"
									onClick={open}
								/>
							)
						}
					/>

					{bgImageURL && (
						<>
							<ImageAvatar
								imageUrl={bgImageURL}
								onDeleteImage={() =>
									setAttributes({ [`${controlName}bgImageURL`]: null })
								}
							/>

							{resOption === "desktop" && (
								<>
									<WithResBtns
										resRequiredProps={resRequiredProps}
										label="position"
									>
										<SelectControl
											value={bgImgPos}
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
											onChange={(bgImgPos) =>
												setAttributes({ [`${controlName}bgImgPos`]: bgImgPos })
											}
										/>
									</WithResBtns>

									{bgImgPos === "custom" && (
										<>
											<UnitControl
												selectedUnit={bgImgcustomPosXUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(bgImgcustomPosXUnit) =>
													setAttributes({
														[`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
													})
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="X Position"
											>
												<RangeControl
													value={bgImgcustomPosX}
													min={0}
													max={bgImgcustomPosXUnit === "px" ? 2000 : 100}
													onChange={(bgImgcustomPosX) =>
														setAttributes({
															[`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
														})
													}
												/>
											</WithResBtns>

											<UnitControl
												selectedUnit={bgImgcustomPosYUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(bgImgcustomPosYUnit) =>
													setAttributes({
														[`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
													})
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Y Position"
											>
												<RangeControl
													value={bgImgcustomPosY}
													min={0}
													max={bgImgcustomPosYUnit === "px" ? 2000 : 100}
													step={bgImgcustomPosYUnit === "px" ? 1 : 0.1}
													onChange={(bgImgcustomPosY) =>
														setAttributes({
															[`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
														})
													}
												/>
											</WithResBtns>
										</>
									)}

									<SelectControl
										label="Attachment"
										value={bgImgAttachment}
										options={[
											{ label: __("Default"), value: "" },
											{ label: __("Scroll"), value: "scroll" },
											{ label: __("Fixed"), value: "fixed" },
										]}
										onChange={(bgImgAttachment) =>
											setAttributes({
												[`${controlName}bgImgAttachment`]: bgImgAttachment,
											})
										}
									/>

									{bgImgAttachment === "fixed" && (
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
											value={bgImgRepeat}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("No-repeat"), value: "no-repeat" },
												{ label: __("Repeat"), value: "repeat" },
												{ label: __("Repeat-x"), value: "repeat-x" },
												{ label: __("Repeat-y"), value: "repeat-y" },
											]}
											onChange={(bgImgRepeat) =>
												setAttributes({
													[`${controlName}bgImgRepeat`]: bgImgRepeat,
												})
											}
										/>
									</WithResBtns>

									<WithResBtns resRequiredProps={resRequiredProps} label="Size">
										<SelectControl
											value={backgroundSize}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("Auto"), value: "auto" },
												{ label: __("Cover"), value: "cover" },
												{ label: __("Contain"), value: "contain" },
												{ label: __("Custom"), value: "custom" },
											]}
											onChange={(backgroundSize) =>
												setAttributes({
													[`${controlName}backgroundSize`]: backgroundSize,
												})
											}
										/>
									</WithResBtns>

									{backgroundSize === "custom" && (
										<>
											<UnitControl
												selectedUnit={bgImgCustomSizeUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(bgImgCustomSizeUnit) =>
													setAttributes({
														[`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
													})
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Width"
											>
												<RangeControl
													value={bgImgCustomSize}
													min={0}
													max={bgImgCustomSizeUnit === "px" ? 2000 : 100}
													step={bgImgCustomSizeUnit === "px" ? 1 : 0.1}
													onChange={(bgImgCustomSize) =>
														setAttributes({
															[`${controlName}bgImgCustomSize`]: bgImgCustomSize,
														})
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
											value={TABbgImgPos}
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
											onChange={(TABbgImgPos) =>
												setAttributes({
													[`TAB${controlName}bgImgPos`]: TABbgImgPos,
												})
											}
										/>
									</WithResBtns>

									{TABbgImgPos === "custom" && (
										<>
											<UnitControl
												selectedUnit={TABbgImgcustomPosXUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(TABbgImgcustomPosXUnit) =>
													setAttributes({
														[`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
													})
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="X Position"
											>
												<RangeControl
													value={TABbgImgcustomPosX}
													min={0}
													max={TABbgImgcustomPosXUnit === "px" ? 2000 : 100}
													onChange={(TABbgImgcustomPosX) =>
														setAttributes({
															[`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
														})
													}
												/>
											</WithResBtns>

											<UnitControl
												selectedUnit={TABbgImgcustomPosYUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(TABbgImgcustomPosYUnit) =>
													setAttributes({
														[`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
													})
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Y Position"
											>
												<RangeControl
													value={TABbgImgcustomPosY}
													min={0}
													max={TABbgImgcustomPosYUnit === "px" ? 2000 : 100}
													step={TABbgImgcustomPosYUnit === "px" ? 1 : 0.1}
													onChange={(TABbgImgcustomPosY) =>
														setAttributes({
															[`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
														})
													}
												/>
											</WithResBtns>
										</>
									)}

									<SelectControl
										label="Attachment"
										value={bgImgAttachment}
										options={[
											{ label: __("Default"), value: "" },
											{ label: __("Scroll"), value: "scroll" },
											{ label: __("Fixed"), value: "fixed" },
										]}
										onChange={(bgImgAttachment) =>
											setAttributes({
												[`${controlName}bgImgAttachment`]: bgImgAttachment,
											})
										}
									/>

									{bgImgAttachment === "fixed" && (
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
											value={TABbgImgRepeat}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("No-repeat"), value: "no-repeat" },
												{ label: __("Repeat"), value: "repeat" },
												{ label: __("Repeat-x"), value: "repeat-x" },
												{ label: __("Repeat-y"), value: "repeat-y" },
											]}
											onChange={(TABbgImgRepeat) =>
												setAttributes({
													[`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,
												})
											}
										/>
									</WithResBtns>

									<WithResBtns resRequiredProps={resRequiredProps} label="Size">
										<SelectControl
											value={TABbackgroundSize}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("Auto"), value: "auto" },
												{ label: __("Cover"), value: "cover" },
												{ label: __("Contain"), value: "contain" },
												{ label: __("Custom"), value: "custom" },
											]}
											onChange={(TABbackgroundSize) =>
												setAttributes({
													[`TAB${controlName}backgroundSize`]: TABbackgroundSize,
												})
											}
										/>
									</WithResBtns>

									{TABbackgroundSize === "custom" && (
										<>
											<UnitControl
												selectedUnit={TABbgImgCustomSizeUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(TABbgImgCustomSizeUnit) =>
													setAttributes({
														[`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
													})
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Width"
											>
												<RangeControl
													value={TABbgImgCustomSize}
													min={0}
													max={TABbgImgCustomSizeUnit === "px" ? 2000 : 100}
													step={TABbgImgCustomSizeUnit === "px" ? 1 : 0.1}
													onChange={(TABbgImgCustomSize) =>
														setAttributes({
															[`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
														})
													}
												/>
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
											value={MOBbgImgPos}
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
											onChange={(MOBbgImgPos) =>
												setAttributes({
													[`MOB${controlName}bgImgPos`]: MOBbgImgPos,
												})
											}
										/>
									</WithResBtns>

									{MOBbgImgPos === "custom" && (
										<>
											<UnitControl
												selectedUnit={MOBbgImgcustomPosXUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(MOBbgImgcustomPosXUnit) =>
													setAttributes({
														[`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
													})
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="X Position"
											>
												<RangeControl
													value={MOBbgImgcustomPosX}
													min={0}
													max={MOBbgImgcustomPosXUnit === "px" ? 2000 : 100}
													onChange={(MOBbgImgcustomPosX) =>
														setAttributes({
															[`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
														})
													}
												/>
											</WithResBtns>

											<UnitControl
												selectedUnit={MOBbgImgcustomPosYUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(MOBbgImgcustomPosYUnit) =>
													setAttributes({
														[`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
													})
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Y Position"
											>
												<RangeControl
													value={MOBbgImgcustomPosY}
													min={0}
													max={MOBbgImgcustomPosYUnit === "px" ? 2000 : 100}
													step={MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1}
													onChange={(MOBbgImgcustomPosY) =>
														setAttributes({
															[`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
														})
													}
												/>
											</WithResBtns>
										</>
									)}

									<SelectControl
										label="Attachment"
										value={bgImgAttachment}
										options={[
											{ label: __("Default"), value: "" },
											{ label: __("Scroll"), value: "scroll" },
											{ label: __("Fixed"), value: "fixed" },
										]}
										onChange={(bgImgAttachment) =>
											setAttributes({
												[`${controlName}bgImgAttachment`]: bgImgAttachment,
											})
										}
									/>

									{bgImgAttachment === "fixed" && (
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
											value={MOBbgImgRepeat}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("No-repeat"), value: "no-repeat" },
												{ label: __("Repeat"), value: "repeat" },
												{ label: __("Repeat-x"), value: "repeat-x" },
												{ label: __("Repeat-y"), value: "repeat-y" },
											]}
											onChange={(MOBbgImgRepeat) =>
												setAttributes({
													[`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat,
												})
											}
										/>
									</WithResBtns>

									<WithResBtns resRequiredProps={resRequiredProps} label="Size">
										<SelectControl
											value={MOBbackgroundSize}
											options={[
												{ label: __("Default"), value: "" },
												{ label: __("Auto"), value: "auto" },
												{ label: __("Cover"), value: "cover" },
												{ label: __("Contain"), value: "contain" },
												{ label: __("Custom"), value: "custom" },
											]}
											onChange={(MOBbackgroundSize) =>
												setAttributes({
													[`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
												})
											}
										/>
									</WithResBtns>

									{MOBbackgroundSize === "custom" && (
										<>
											<UnitControl
												selectedUnit={MOBbgImgCustomSizeUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(MOBbgImgCustomSizeUnit) =>
													setAttributes({
														[`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
													})
												}
											/>

											<WithResBtns
												resRequiredProps={resRequiredProps}
												label="Width"
											>
												<RangeControl
													value={MOBbgImgCustomSize}
													min={0}
													max={MOBbgImgCustomSizeUnit === "px" ? 2000 : 100}
													step={MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1}
													onChange={(MOBbgImgCustomSize) =>
														setAttributes({
															[`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
														})
													}
												/>
											</WithResBtns>
										</>
									)}
								</>
							)}
						</>
					)}
				</PanelBody>
			)}
		</>
	);
}
