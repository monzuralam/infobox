import { useBlockProps } from "@wordpress/block-editor";
import InfoboxContainer from "./components/infobox-container";

export default function save({ attributes }) {
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
		buttonText,
		title,
		subTitle,
		description,
		//
		titleTag,
		subTitleTag,
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
		buttonText,
		title,
		subTitle,
		description,
		titleTag,
		subTitleTag,
	};

	return (
		<div {...useBlockProps.save()}>
			<InfoboxContainer requiredProps={requiredProps} />
		</div>
	);
}
