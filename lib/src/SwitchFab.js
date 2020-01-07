import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing } from "react-native";
import Androw from "react-native-androw";
import Ripple from "react-native-material-ripple";
import Icon from "react-native-dynamic-vector-icons";
import { _shadowStyle, _container } from "./SwitchFab.style";

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
    if (this.props.isActive) {
      this.setState({ isActive: this.props.isActive }, () => {
        this.animatePreSelected();
      });
    }
  }

  animatePreSelected = () => {
    const { animationDuration } = this.props;
    // ? Make it pre-selected
    Animated.sequence([
      Animated.timing(this.state.backgroundColor, {
        delay: 0,
        duration: animationDuration,
        toValue: 0
      })
    ]).start();
  };

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
    const { animationDuration } = this.props;
    if (isActive) {
      Animated.sequence([
        Animated.timing(this.state.backgroundColor, {
          delay: 0,
          duration: animationDuration,
          toValue: 1
        })
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(this.state.backgroundColor, {
          delay: 0,
          duration: animationDuration,
          toValue: 0
        })
      ]).start();
    }
  };

  handleOnPress = isActive => {
    // Outside of the onPress function
    const { onPress } = this.props;
    if (onPress) onPress(this.state.isActive);
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
            {...this.props}
            onPress={this.animationFunc.bind(this, Easing.bounce)}
          >
            <IconComponent
              size={23}
              type="Entypo"
              name="app-store"
              color={isActive ? activeIconColor : inactiveIconColor}
              {...this.props}
            />
          </Ripple>
        </Animated.View>
      </Androw>
    );
  }
}

SwitchFab.propTypes = {
  isActive: PropTypes.bool,
  activeBGColor: PropTypes.string,
  inactiveBGColor: PropTypes.string,
  activeIconColor: PropTypes.string,
  inactiveIconColor: PropTypes.string,
  shadowColor: PropTypes.string,
  borderRadius: PropTypes.number,
  animationDuration: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SwitchFab.defaultProps = {
  width: 50,
  height: 50,
  isActive: false,
  borderRadius: 25,
  IconComponent: Icon,
  animationDuration: 750,
  shadowColor: "#757575",
  activeBGColor: "#757575",
  inactiveBGColor: "#fdfdfd",
  activeIconColor: "#fdfdfd",
  inactiveIconColor: "#757575"
};

export default SwitchFab;
