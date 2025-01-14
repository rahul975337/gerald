import { View, Text, Pressable, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Slot, usePathname } from "expo-router";
import Animated, {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { PATH_NAME_TO_LABEL } from "./DrawerItem";

const SCREEN_WIDTH = Dimensions.get("window").width;

const useDrawerAnimation = () => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [0, SCREEN_WIDTH * 0.6]
    );
    const translateY = interpolate(progress.value, [0, 0], [0, 60]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 16]);
    const rotate = interpolate(
      progress.value,
      [0, 1],
      [0, -10 * (Math.PI / 180)]
    ); // Tilt effect

    return {
      transform: [{ translateX }, { translateY }, { rotate: `${rotate}rad` }],
      borderRadius,
    };
  });

  const toggleDrawer = () => {
    progress.value = withTiming(progress.value === 0 ? 1 : 0, {
      duration: 300,
    });
  };

  return {
    progress,
    animatedStyle,
    toggleDrawer,
  };
};

export const ScreensContainer = () => {
  const pathName = usePathname();

  const { progress, animatedStyle, toggleDrawer } = useDrawerAnimation();
  return (
    <PanGestureHandler
      onGestureEvent={({ nativeEvent }) => {
        if (nativeEvent.translationX > 50)
          progress.value = withTiming(1, { duration: 300 });
        if (nativeEvent.translationX < -50)
          progress.value = withTiming(0, { duration: 300 });
      }}
    >
      <Animated.View
        style={[
          {
            flex: 1,
            backgroundColor: "white",
            paddingTop: 20,
            overflow: "hidden",
          },
          animatedStyle,
        ]}
      >
        <View className="flex-row items-center px-10 h-15 bg-white">
          <Pressable onPress={toggleDrawer}>
            <Ionicons name="menu" size={32} color="#d1d5db" />
          </Pressable>
          <Text className="text-gray-400 ml-12 tracking-[3] text-xl font-medium">
            {PATH_NAME_TO_LABEL[pathName]?.toUpperCase()}
          </Text>
          <View />
        </View>

        <Slot />
      </Animated.View>
    </PanGestureHandler>
  );
};
