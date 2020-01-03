import React from "react";
import PropTypes from "prop-types";
import styles, { _shadowStyle, _container } from "./SwitchFab.style";
import Androw from "react-native-androw";
import Ripple from "react-native-material-ripple";
import Icon from "react-native-dynamic-vector-icons";

const SwitchFab = props => {
  const {
    width,
    height,
    shadowStyle,
    shadowColor,
    borderRadius,
    IconComponent,
    backgroundColor
  } = props;
  return (
    <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
      <Ripple style={_container(height, width, borderRadius, backgroundColor)}>
        <IconComponent
          name="trafficdensity"
          size={35}
          color={colors.theme.light.primary}
        />
      </Ripple>
    </Androw>
  );
};

SwitchFab.propTypes = {
  shadowColor: PropTypes.string,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SwitchFab.defaultProps = {
  width: 50,
  height: 50,
  borderRadius: 25,
  IconComponent: Icon,
  shadowColor: "#757575",
  backgroundColor: "#fdfdfd"
};

export default SwitchFab;
