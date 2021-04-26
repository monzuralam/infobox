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
		headerTag,
	} = attributes;

	const infoBoxProps = {
		imageUrl,
		selectedIcon,
		header,
		headerTag,
		content,
		number,
	};

	return (
		<div {...useBlockProps.save()}>
			{isClickable && clickableLink ? (
				<a href={clickableLink}>
					<div className={`infobox-container ${blockId}`}>
						<InfoboxContainer infoBoxProps={infoBoxProps} />
					</div>
				</a>
			) : (
				<div className={`infobox-container ${blockId}`}>
					<InfoboxContainer infoBoxProps={infoBoxProps} />

					{showButton ? (
						<div className="infobox-button">
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
