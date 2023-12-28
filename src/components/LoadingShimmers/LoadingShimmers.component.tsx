import React, {useEffect} from 'react';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {LoadingShimmerTypes} from './LoadingShimmers.types';

export const LoadingShimmers = ({
  loadingComplete = false,
  children,
}: LoadingShimmerTypes): JSX.Element => {
  const opacity = useSharedValue(1);

  const animationStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(0.5, {
        duration: 800,
        easing: Easing.linear,
      }),
      -1,
      true,
    );

    return () => cancelAnimation(opacity);
  }, [opacity]);

  useEffect(() => {
    if (!loadingComplete) {
      return;
    }
    cancelAnimation(opacity);
    opacity.value = withTiming(0, {
      duration: 300,
      easing: Easing.linear,
    });
  }, [loadingComplete, opacity]);

  return <Animated.View style={animationStyle}>{children}</Animated.View>;
};
