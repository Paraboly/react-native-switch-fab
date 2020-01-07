export const _shadowStyle = shadowColor => ({
  shadowColor,
  shadowRadius: 5,
  shadowOpacity: 0.15,
  shadowOffset: {
    width: 0,
    height: 3
  }
});

export const _container = (
  height,
  width,
  borderRadius,
  backgroundColor,
  isActive,
  activeBGColor,
  inactiveBGColor
) => ({
  width,
  height,
  borderRadius,
  backgroundColor,
  alignItems: "center",
  justifyContent: "center"
});

export default {};
