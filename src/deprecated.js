/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

import InfoboxContainer from "./components/infobox-save-depricated";

import attributes from "./attributes";

const deprecated = [
	{
		attributes: { ...attributes },
		supports: {
			align: ["wide", "full"],
		},
		save: ({ attributes }) => {
			const {
				blockId,
				selectedIcon,
				number = 0,
				media,
				imageUrl,
				enableSubTitle,
				enableDescription,
				infoboxLink,
				enableButton,
				isInfoClick,
				buttonText,
				title,
				subTitle,
				description,
				titleTag,
				subTitleTag,
				btnEffect,
			} = attributes;

			const requiredProps = {
				selectedIcon,
				blockId,
				number,
				media,
				imageUrl,
				enableSubTitle,
				enableDescription,
				infoboxLink,
				enableButton,
				isInfoClick,
				buttonText,
				title,
				subTitle,
				description,
				titleTag,
				subTitleTag,
				btnEffect,
			};

			return (
				<div {...useBlockProps.save()}>
					{isInfoClick ? (
						<a
							href={infoboxLink}
							rel="noopener noreferrer"
							className="info-click-link info-wrap-link"
						>
							<InfoboxContainer requiredProps={requiredProps} />
						</a>
					) : (
						<InfoboxContainer requiredProps={requiredProps} />
					)}
				</div>
			);
		},
	},
];

export default deprecated;
