/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, MediaUpload, RichText } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import "./editor.scss";

/**
 * Internal dependencies
 */
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
} from "./helpers";
import Inspector from "./inspector";
import {
	typoPrefix_content,
	typoPrefix_header,
} from "./constants/typographyPrefixConstants";

const Edit = ({ attributes, setAttributes, isSelected, clientId }) => {
	const {
		// responsive control attributes ⬇
		resOption,

		// blockMeta is for keeping all the styles
		blockMeta,

		// blockId attribute for making unique className and other uniqueness
		blockId,

		selectedIcon,
		media,
		number = 0,
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

		//
		imageId,

		//
		iconSize,
		TABiconSize,
		MOBiconSize,

		//
		flexDirection,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

		if (!/eb\-res\-option\-/i.test(bodyClasses)) {
			document.body.classList.add("eb-res-option-desktop");
			setAttributes({
				resOption: "desktop",
			});
		} else {
			const resOption = bodyClasses
				.match(/eb-res-option-[^\s]+/g)[0]
				.split("-")[3];
			setAttributes({ resOption });
		}
	}, []);

	// this useEffect is for creating a unique blockId for each block's unique className
	useEffect(() => {
		// const current_block_id = attributes.blockId;

		const BLOCK_PREFIX = "eb-infobox";
		const unique_id =
			BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);

		/**
		 * Define and Generate Unique Block ID
		 */
		if (!blockId) {
			setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		 */
		const all_blocks = wp.data.select("core/block-editor").getBlocks();

		// console.log({ all_blocks });

		let duplicateFound = false;
		const fixDuplicateBlockId = (blocks) => {
			if (duplicateFound) return;
			for (const item of blocks) {
				const { innerBlocks } = item;
				if (item.attributes.blockId === blockId) {
					if (item.clientId !== clientId) {
						setAttributes({ blockId: unique_id });
						// console.log("found a duplicate");
						duplicateFound = true;
						return;
					} else if (innerBlocks.length > 0) {
						fixDuplicateBlockId(innerBlocks);
					}
				} else if (innerBlocks.length > 0) {
					fixDuplicateBlockId(innerBlocks);
				}
			}
		};

		fixDuplicateBlockId(all_blocks);

		// console.log({ blockId });
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	const wrapperStylesDesktop = `
		.${blockId} {
			margin: auto;
			padding: 30px;
			background-color: #f4f9;
		}
		
		.${blockId} .infobox-wrapper-inner img {
			max-width: 100%;
			height: auto;
			object-fit: cover;
		}
		
		.${blockId} .infobox-wrapper-inner {
			display: flex;
			flex-direction: ${flexDirection};
		}
		
		.${blockId} .title {
			font-size: 26px;
			line-height: 1.3em;
			margin: 0;
			padding: 10px 0;
		}
		
		.${blockId} .subtitle {
			font-size: 16px;
			line-height: 2;
			margin: 0;
			padding: 10px 0;
		}
		
		.${blockId} .description {
			font-size: 20px;
			line-height: 2em;
			margin: 0;
			padding: 10px 0;

		}

		.${blockId} .eb-icon {
			background-color: #3f5;
			padding: 20px;
			border-top-left-radius: 20px;
			border-bottom-right-radius: 20px;
		}

		.${blockId} .icon-img-wrapper {
			align-self: center;
			padding: 10px 0;
		}

		.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
			font-size: ${iconSize}px;
			color: #fff;
		}

		.${blockId} .contents-wrapper {
			text-align: center;
		}
	`;

	const wrapperStylesTab = `
		.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
			font-size: ${TABiconSize}px;
		}
	
	
	`;

	const wrapperStylesMobile = `
		.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
			font-size: ${MOBiconSize}px;
		}
	
	
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`		
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
	
	`);

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	console.log("--edit theke", { attributes });

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		// Edit view
		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "tab" ? tabAllStyles : " "}
				${resOption === "mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>

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
							<div className="eb-infobox-image-wrapper">
								<MediaUpload
									onSelect={({ id, url }) =>
										setAttributes({ imageUrl: url, imageId: id })
									}
									type="image"
									value={imageId}
									render={({ open }) => {
										if (!imageUrl) {
											return (
												<Button
													className="eb-infobox-img-btn components-button"
													label={__("Upload Image")}
													icon="format-image"
													onClick={open}
												/>
											);
										} else {
											return (
												<img className="eb-infobox-image" src={imageUrl} />
											);
										}
									}}
								/>
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
		</div>,
	];
};

export default Edit;
