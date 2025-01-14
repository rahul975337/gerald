import React from "react";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";
import { DrawerContainer } from "@/components/DrawerContainer";
import { ScreensContainer } from "@/components/ScreensContainer";

export default function DrawerNavigation() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: Colors.highlight,
      }}
    >
      <DrawerContainer />
      <ScreensContainer />
    </GestureHandlerRootView>
  );
}
