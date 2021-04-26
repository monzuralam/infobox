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
				className="eb-infobox-image-wrapper"
				style={{
					...imageWrapperStyle,
				}}
				data-image-url={imageUrl ? imageUrl : ""}
			/>

			<span
				className="eb-infobox-icon"
				style={{
					...iconStyle,
				}}
			>
				<span className={`${selectedIcon} `} data-icon={selectedIcon} />
			</span>

			<div
				className="eb-infobox-number"
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
				className="eb-infobox-header"
			/>
			<RichText.Content
				tagName="p"
				value={content}
				style={contentStyle}
				className="eb-infobox-content-main"
			/>
		</>
	);
};

export default InfoboxContainer;
