/* REACT */
import React, { useEffect } from "react";
import { View, Animated } from "react-native";

/* STYLES */
import styles from "./styles";

/* TYPES */

const SLIDERS = [
  {
    initialPoint: 10,
    endPoint: 100,
  },
  {
    initialPoint: 10,
    endPoint: 45,
  },
  {
    initialPoint: 10,
    endPoint: 55,
  },
  {
    initialPoint: 10,
    endPoint: 70,
  },
  {
    initialPoint: 10,
    endPoint: 120,
  },
];

export default (): JSX.Element => {
  // TODO(mikle): find some generator to reduce code amount
  const heights = [
    new Animated.Value(SLIDERS[0].initialPoint),
    new Animated.Value(SLIDERS[1].initialPoint),
    new Animated.Value(SLIDERS[2].initialPoint),
    new Animated.Value(SLIDERS[3].initialPoint),
    new Animated.Value(SLIDERS[4].initialPoint),
  ];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(heights[0], {
        toValue: SLIDERS[0].endPoint,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(heights[1], {
        toValue: SLIDERS[1].endPoint,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(heights[2], {
        toValue: SLIDERS[2].endPoint,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(heights[3], {
        toValue: SLIDERS[2].endPoint,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(heights[4], {
        toValue: SLIDERS[2].endPoint,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.stocksContainer}>
      {SLIDERS.map((item, index) => {
        const boxStyle = {
          height: heights[index],
        };
        return (
          <View style={styles.singleSlide} key={`${item}+${index}`}>
            <Animated.View style={[styles.innerSingleSlide, boxStyle]} />
          </View>
        );
      })}
    </View>
  );
};
