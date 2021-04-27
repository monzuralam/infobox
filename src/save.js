import { useBlockProps } from "@wordpress/block-editor";
/**
 * Internal dependencies
 */
import InfoboxContainer from "./infobox-container.js";

const Save = ({ attributes }) => {
	const {
		// blockId attribute for making unique className and other uniqueness
		blockId,

		selectedIcon,
		imageUrl,
		header,
		content,

		showButton,
		buttonText,
		clickableLink,

		number,
		isClickable,
		imageOrIcon,
		headerTag,
	} = attributes;

	const infoBoxProps = {
		imageUrl,
		selectedIcon,
		header,
		headerTag,
		content,
		imageOrIcon,
		number,
	};

	return (
		<div {...useBlockProps.save()}>
			{isClickable && clickableLink ? (
				<a
					href={clickableLink}
					className={`clickable-link-${blockId} eb-infobox-clickable-wrapper`}
				>
					<div className={`eb-infobox-container ${blockId}`}>
						<InfoboxContainer infoBoxProps={infoBoxProps} />
					</div>
				</a>
			) : (
				<div className={`eb-infobox-container ${blockId}`}>
					<InfoboxContainer infoBoxProps={infoBoxProps} />

					{showButton ? (
						<div className="eb-infobox-button">
							<a href={clickableLink} className="eb-infobox-link">
								{buttonText}
							</a>
						</div>
					) : null}
				</div>
			)}
		</div>
	);
};

export default Save;
