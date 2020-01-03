export const _shadowStyle = shadowColor => ({
  shadowColor,
  shadowRadius: 8,
  shadowOpacity: 0.3,
  shadowOffset: {
    width: 0,
    height: 3
  }
});

export const _container = (height, width, borderRadius, backgroundColor) => ({
  width,
  height,
  borderRadius,
  backgroundColor,
  alignItems: "center",
  justifyContent: "center"
});

export default {};
