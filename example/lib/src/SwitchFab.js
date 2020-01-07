import React, { Component } from "react";
import PropTypes from "prop-types";
import styles, { _shadowStyle, _container } from "./SwitchFab.style";
import Androw from "react-native-androw";
import Ripple from "react-native-material-ripple";
import Icon from "react-native-dynamic-vector-icons";
import { Animated, Easing } from "react-native";

class SwitchFab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      animationValue: new Animated.Value(1),
      backgroundColor: new Animated.Value(1)
    };
  }

  componentDidMount() {
    this.setState({ isActive: this.props.isActive });
  }

  animationFunc = () => {
    const { isActive, animationValue } = this.state;
    this.setState({ isActive: !isActive }, () => {
      animationValue.setValue(0.9);
      Animated.spring(animationValue, {
        toValue: 1,
        friction: 3
      }).start();

      this.animateBackgroundColor(isActive);
      this.handleOnPress(isActive);
    });
  };

  animateBackgroundColor = isActive => {
    if (isActive) {
      Animated.sequence([
        Animated.timing(this.state.backgroundColor, {
          delay: 0,
          duration: 750,
          toValue: 1
        })
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(this.state.backgroundColor, {
          delay: 0,
          duration: 750,
          toValue: 0
        })
      ]).start();
    }
  };

  handleOnPress = isActive => {
    // Outside of the onPress function
    const { onPress } = this.props;
    if (onPress) onPress(isActive);
  };

  render() {
    const {
      width,
      height,
      shadowStyle,
      shadowColor,
      borderRadius,
      IconComponent,
      activeBGColor,
      inactiveBGColor,
      activeIconColor,
      inactiveIconColor
    } = this.props;
    const { isActive, animationValue } = this.state;
    // ? BackgroundColor animation initilization
    const backgroundColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: [activeBGColor, inactiveBGColor]
    });
    return (
      <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
        <Animated.View style={[{ transform: [{ scale: animationValue }] }]}>
          <Ripple
            rippleDuration={750}
            rippleContainerBorderRadius={borderRadius}
            rippleColor={isActive ? activeBGColor : inactiveBGColor}
            style={_container(height, width, borderRadius, backgroundColor)}
            onPress={this.animationFunc.bind(this, Easing.bounce)}
            {...this.props}
          >
            <IconComponent
              size={23}
              type="Entypo"
              color={isActive ? activeIconColor : inactiveIconColor}
              name="app-store"
              {...this.props}
            />
          </Ripple>
        </Animated.View>
      </Androw>
    );
  }
}

SwitchFab.propTypes = {
  activeBGColor: PropTypes.string,
  inactiveBGColor: PropTypes.string,
  activeIconColor: PropTypes.string,
  inactiveIconColor: PropTypes.string,
  shadowColor: PropTypes.string,
  borderRadius: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SwitchFab.defaultProps = {
  width: 50,
  height: 50,
  borderRadius: 25,
  IconComponent: Icon,
  shadowColor: "#757575",
  activeBGColor: "#757575",
  inactiveBGColor: "#fdfdfd",
  activeIconColor: "#fdfdfd",
  inactiveIconColor: "#757575"
};

export default SwitchFab;
