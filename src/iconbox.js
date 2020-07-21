const IconBox = ({ selectedIcon, iconStyle }) => (
  <span style={iconStyle}>
    <span
      className={`${selectedIcon} eb-infobox-icon`}
      data-icon={selectedIcon}
    />
  </span>
);

export default IconBox;
