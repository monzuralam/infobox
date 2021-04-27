const IconBox = ({ selectedIcon }) => (
	<span className="eb-infobox-icon">
		<span
			className={`${selectedIcon} eb-infobox-icon-data-selector`}
			data-icon={selectedIcon}
		/>
	</span>
);

export default IconBox;
