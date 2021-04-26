const IconBox = ({ selectedIcon, iconStyle }) => (
	<span className="eb-infobox-icon" style={iconStyle}>
		<span className={`${selectedIcon} `} data-icon={selectedIcon} />
	</span>
);

export default IconBox;
