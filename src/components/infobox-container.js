import { RichText } from "@wordpress/block-editor";

export default function InfoboxContainer({ requiredProps }) {
	const {
		blockId,
		selectedIcon,
		media,
		number,
		imageUrl,
		infoboxLink,
		enableSubTitle,
		enableDescription,
		enableButton,
		buttonText,
		isClickable,
		title,
		subTitle,
		description,
	} = requiredProps;

	return (
		<div className={`${blockId} eb-infobox-wrapper`}>
			<div className="infobox-wrapper-inner">
				{media === "icon" ? (
					<div className="icon-img-wrapper">
						<div className="eb-icon">
							<span
								data-icon={selectedIcon}
								className={`eb-infobox-icon-data-selector  ${selectedIcon}`}
							></span>
						</div>
					</div>
				) : null}

				{media === "image" ? (
					<div className="icon-img-wrapper">
						<div className="eb-infobox-img-wrapper">
							<img className="eb-infobox-image" src={imageUrl} alt="macbook" />
						</div>
					</div>
				) : null}

				{media === "number" ? (
					<div className="icon-img-wrapper">
						<div className="eb-infobox-num-wrapper">
							<span className="eb-infobox-number">{number}</span>
						</div>
					</div>
				) : null}

				<div className="contents-wrapper">
					<h2 className="title">{title}</h2>

					{enableSubTitle ? <h3 className="subtitle">{subTitle}</h3> : null}

					{enableDescription ? (
						<p className="description">{description}</p>
					) : null}

					{enableButton ? (
						<div className="eb-infobox-btn-wrapper">
							<a href={infoboxLink} className="infobox-btn">
								{buttonText}
							</a>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
