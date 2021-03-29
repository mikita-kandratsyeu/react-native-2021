import React from 'react';
import { Animated, Easing, View } from 'react-native';
import { ILoadingIndicatorProps } from './interfaces';
import { defaultStyles, LoadingIndicatorAnimation } from '../../../../constans';
import styles from './LoadingIndicatorStyles';

export const LoadingIndicator: React.FC<ILoadingIndicatorProps> = ({
  dotsCount = 4,
  color = defaultStyles.colors.white,
}) => {
  const startAnimation = (dotsTranslateY: any[]): void => {
    dotsTranslateY.forEach(translateY => {
      translateY.setValue(LoadingIndicatorAnimation.startTranslateY);
    });

    console.info(dotsTranslateY);

    Animated.stagger(LoadingIndicatorAnimation.delay, [
      Animated.delay(0),
      ...dotsTranslateY.map(dotTranslateY =>
        Animated.sequence([
          Animated.timing(dotTranslateY, {
            toValue: LoadingIndicatorAnimation.endTranslateY,
            duration: LoadingIndicatorAnimation.duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(dotTranslateY, {
            toValue: LoadingIndicatorAnimation.startTranslateY,
            duration: LoadingIndicatorAnimation.duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ),
    ]).start(() => {
      dotsTranslateY.forEach(translateY => {
        translateY.setValue(LoadingIndicatorAnimation.startTranslateY);
      });

      startAnimation(dotsTranslateY);
    });
  };

  const dotsAnimatedValues = [...Array(dotsCount).keys()].map(
    () => new Animated.Value(LoadingIndicatorAnimation.startTranslateY),
  );

  const animatedDots = dotsAnimatedValues.map(dotTranslateY => (
    <Animated.View
      key={Math.random()}
      style={[
        styles.dot,
        {
          backgroundColor: color,
          transform: [{ translateY: dotTranslateY }],
        },
      ]}
    />
  ));

  startAnimation(dotsAnimatedValues);

  return <View style={styles.container}>{animatedDots}</View>;
};
