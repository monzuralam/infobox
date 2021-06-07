export const handleDesktopBtnClick = ({ setAttributes }) => {
	document.body.classList.add("eb-res-option-desktop");
	document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
	setAttributes({
		resOption: "desktop",
	});
};
export const handleTabBtnClick = ({ setAttributes }) => {
	document.body.classList.add("eb-res-option-tab");
	document.body.classList.remove(
		"eb-res-option-desktop",
		"eb-res-option-mobile"
	);
	setAttributes({
		resOption: "tab",
	});
};
export const handleMobileBtnClick = ({ setAttributes }) => {
	document.body.classList.add("eb-res-option-mobile");
	document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
	setAttributes({
		resOption: "mobile",
	});
};
