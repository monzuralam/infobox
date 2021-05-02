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
		isClickable,
		title,
		subTitle,
		description,
	} = attributes;

	const requiredProps = {
		blockId,
		selectedIcon,

		number,
		media,
		imageUrl,
		enableSubTitle,
		enableDescription,
		infoboxLink,
		enableButton,
		buttonText,
		isClickable,
		title,
		subTitle,
		description,
	};

	return (
		<div {...useBlockProps.save()}>
			<InfoboxContainer requiredProps={requiredProps} />
		</div>
	);
}
