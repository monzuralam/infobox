import { RichText } from "@wordpress/block-editor";

const InfoboxContainer = ({ infoBoxProps }) => {
	const {
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
	} = infoBoxProps;

	return (
		<>
			<div
				className="infobox-image-wrapper"
				style={{
					...imageWrapperStyle,
				}}
				data-image-url={imageUrl ? imageUrl : ""}
			/>

			<span
				style={{
					...iconStyle,
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
				}}
			>
				{number || "0"}
			</div>

			<RichText.Content
				tagName={headerTag}
				value={header}
				style={headerStyle}
			/>
			<RichText.Content tagName="p" value={content} style={contentStyle} />
		</>
	);
};

export default InfoboxContainer;
