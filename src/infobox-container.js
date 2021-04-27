import { RichText } from "@wordpress/block-editor";

const InfoboxContainer = ({ infoBoxProps }) => {
	const {
		imageUrl,
		selectedIcon,
		header,
		content,
		number,
		headerTag,
		imageOrIcon,
	} = infoBoxProps;

	return (
		<>
			{imageOrIcon === "image" ? (
				<div
					className="eb-infobox-image-wrapper"
					data-image-url={imageUrl ? imageUrl : ""}
				/>
			) : null}

			{imageOrIcon === "icon" ? (
				<span className="eb-infobox-icon">
					<span
						className={`${selectedIcon} eb-infobox-icon-data-selector `}
						data-icon={selectedIcon}
					/>
				</span>
			) : null}

			{imageOrIcon === "number" ? (
				<div className="eb-infobox-number">{number || "0"}</div>
			) : null}

			<RichText.Content
				tagName={headerTag}
				value={header}
				className="eb-infobox-header"
			/>
			<RichText.Content
				tagName="p"
				value={content}
				className="eb-infobox-content eb-infobox-content-main"
			/>
		</>
	);
};

export default InfoboxContainer;
