import { RichText } from "@wordpress/block-editor";

const InfoboxContainer = ({
	imageOrIcon,
	imageUrl,
	selectedIcon,
	header,
	content,
	imageWrapperStyle,
	number,
	headerTag,
	headerStyle,
	contentStyle,
	numberStyle,
	iconStyle,
}) => (
	<>
		<div
			className="infobox-image-wrapper"
			style={{
				...imageWrapperStyle,
				display: imageOrIcon === "image" ? "block" : "none",
			}}
			data-image-url={imageUrl ? imageUrl : ""}
		/>

		<span
			style={{
				...iconStyle,
				display: imageOrIcon === "icon" && selectedIcon ? "block" : "none",
			}}
		>
			<span
				className={`${selectedIcon} infobox-icon`}
				data-icon={selectedIcon}
			/>
		</span>

		<div
			className="infobox-number"
			style={{
				...numberStyle,
				display: imageOrIcon === "number" ? "block" : "none",
			}}
		>
			{number ? number : ""}
		</div>

		<RichText.Content tagName={headerTag} value={header} style={headerStyle} />
		<RichText.Content tagName="p" value={content} style={contentStyle} />
	</>
);

export default InfoboxContainer;
