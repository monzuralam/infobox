/**
 * Internal dependencies
 */
import InfoboxContainer from "./infobox-container.js";
import { DEFAULT_BACKGROUND } from "./constants";

const Save = ({ attributes }) => {
  const {
    backgroundType,
    backgroundImageURL,
    backgroundColor,
    backgroundGradient,
    imageOrIcon,
    selectedIcon,
    imageUrl,
    header,
    content,
    flexDirection,
    order,
    showButton,
    buttonText,
    clickableLink,
    imageHeight,
    imageWidth,
    number,
    isClickable,
    headerTag,
    contentFontSize,
    contentColor,
    headerColor,
    headerTextTransform,
    numberColor,
    numberSize,
    iconSize,
    iconColor,
    buttonColor,
    buttonTextColor,
    iconPaddingTop,
    iconPaddingRight,
    iconPaddingBottom,
    iconPaddingLeft,
    headerPaddingTop,
    headerPaddingRight,
    headerPaddingBottom,
    headerPaddingLeft,
    imageMarginTop,
    imageMarginRight,
    imageMarginBottom,
    imageMarginLeft,
    buttonPaddingTop,
    buttonPaddingRight,
    buttonPaddingBottom,
    buttonPaddingLeft,
    buttonAlign,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    borderWidth,
    borderColor,
    borderStyle,
    borderRadius,
    shadowColor,
    shadowHOffset,
    shadowVOffset,
    shadowBlur,
    shadowSpread,
    contentSizeUnit,
    iconSizeUnit,
    marginUnit,
    paddingUnit,
    radiusUnit,
    headerPaddingUnit,
    iconPaddingUnit,
    borderWidthUnit,
    buttonPaddingUnit,
    iconBackground
  } = attributes;

  const boxWrapperStyle = {
    flexDirection: flexDirection,
    backgroundImage:
      backgroundType === "image" && backgroundImageURL
        ? `url('${backgroundImageURL}')`
        : (backgroundType === "gradient" && backgroundGradient) || "none",
    backgroundColor: backgroundColor || DEFAULT_BACKGROUND,
    backgroundSize:
      backgroundType === "image" && backgroundImageURL ? "cover" : "unset",
    cursor: isClickable ? "pointer" : "default",
    margin: `${marginTop || 0}${marginUnit} ${marginRight ||
      0}${marginUnit} ${marginBottom || 0}${marginUnit} ${marginLeft ||
      0}${marginUnit} `,
    padding: `${paddingTop || 30}${paddingUnit} ${paddingRight ||
      70}${paddingUnit} ${paddingBottom || 30}${paddingUnit} ${paddingLeft ||
      70}${paddingUnit} `,
    border: `${borderWidth ||
      0}${borderWidthUnit} ${borderStyle} ${borderColor || "#000000"}`,
    borderRadius: `${borderRadius || 0}${radiusUnit}`,
    boxShadow: `${shadowHOffset || 0}px ${shadowVOffset || 0}px ${shadowBlur ||
      0}px ${shadowSpread || 0}px ${shadowColor || "#000000"}`
  };

  const imageWrapperStyle = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
    height: `${imageHeight}px`,
    width: `${imageWidth}px`,
    backgroundSize: "cover",
    order: order,
    marginTop: imageMarginTop ? `${imageMarginTop}px` : "10px",
    marginRight: imageMarginRight ? `${imageMarginRight}px` : 0,
    marginBottom: imageMarginBottom ? `${imageMarginBottom}px` : 0,
    marginLeft: imageMarginLeft ? `${imageMarginLeft}px` : 0
  };

  const iconStyle = {
    display: imageOrIcon === "icon" && selectedIcon ? "block" : "none",
    order: order,
    color: iconColor || "#fff",
    background: iconBackground || "#3074ff",
    fontSize: `${iconSize || 36}${iconSizeUnit}`,
    paddingTop: `${iconPaddingTop || 20}${iconPaddingUnit}`,
    paddingRight: `${iconPaddingRight || 30}${iconPaddingUnit}`,
    paddingBottom: `${iconPaddingBottom || 20}${iconPaddingUnit}`,
    paddingLeft: `${iconPaddingLeft || 30}${iconPaddingUnit}`,
    lineHeight: 1,
    borderRadius: `5px`
  };

  const numberStyle = {
    display: imageOrIcon === "number" ? "block" : "none",
    order: order,
    color: numberColor,
    fontSize: numberSize
  };

  const headerStyle = {
    textTransform: headerTextTransform,
    color: headerColor || "#4a5059",
    paddingTop: `${headerPaddingTop || 0}${headerPaddingUnit}`,
    paddingRight: `${headerPaddingRight || 0}${headerPaddingUnit}`,
    paddingBottom: `${headerPaddingBottom || 0}${headerPaddingUnit}`,
    paddingLeft: `${headerPaddingLeft || 0}${headerPaddingUnit}`
  };

  const contentStyle = {
    fontSize: `${contentFontSize || 16}${contentSizeUnit}`,
    color: contentColor
  };

  const buttonWrapperStyles = {
    display: showButton ? "flex" : "none",
    alignSelf: buttonAlign,
    marginTop: "10px"
  };

  const linkStyles = {
    textDecoration: "none",
    background: buttonColor || "#3074ff",
    color: buttonTextColor || "#ffffff",
    paddingTop: `${buttonPaddingTop}${buttonPaddingUnit}`,
    paddingRight: `${buttonPaddingRight}${buttonPaddingUnit}`,
    paddingBottom: `${buttonPaddingBottom}${buttonPaddingUnit}`,
    paddingLeft: `${buttonPaddingLeft}${buttonPaddingUnit}`
  };

  return (
    <div>
      <a
        href={clickableLink}
        style={{ display: isClickable && clickableLink ? "block" : "none" }}
      >
        <div className="infobox-container" style={boxWrapperStyle}>
          <InfoboxContainer
            imageOrIcon={imageOrIcon}
            imageUrl={imageUrl}
            imageWrapperStyle={imageWrapperStyle}
            selectedIcon={selectedIcon}
            iconStyle={iconStyle}
            header={header}
            headerTag={headerTag}
            headerStyle={headerStyle}
            content={content}
            contentStyle={contentStyle}
            number={number}
            numberStyle={numberStyle}
          />
        </div>
      </a>

      <div className="infobox-container" style={boxWrapperStyle}>
        <InfoboxContainer
          imageOrIcon={imageOrIcon}
          imageUrl={imageUrl}
          imageWrapperStyle={imageWrapperStyle}
          selectedIcon={selectedIcon}
          iconStyle={iconStyle}
          header={header}
          headerTag={headerTag}
          headerStyle={headerStyle}
          content={content}
          contentStyle={contentStyle}
          number={number}
          numberStyle={numberStyle}
        />

        <div className="infobox-button" style={buttonWrapperStyles}>
          <a
            href={clickableLink}
            className="eb-infobox-link"
            style={linkStyles}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Save;
