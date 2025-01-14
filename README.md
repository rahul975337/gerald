## Overview

This project uses the following technologies:
- **Expo**: A framework for building React Native apps with easy setup and additional tooling.
- **React Native**: A framework for building mobile applications using JavaScript and React.
- **NativeWind**: A utility-first CSS framework for React Native, enabling responsive styling similar to Tailwind CSS.
- **Expo Router**: Provides file-based routing for Expo apps.
- **React Navigation**: A navigation library for React Native to manage the app's navigation flow.
- **React Native Reanimated**: A library for advanced animations and gesture handling in React Native apps.
- **Expo Icons**: A library for using vector icons in Expo apps.
-

## Navigation Structure

- `app/` (Drawer)
  - `_layout.tsx` (Drawer Layout)
  - `cart.tsx` (Screen)
  - `favourites.tsx` (Screen)
  - `index.tsx` (Screen)
  - `orders/` (Tab)
    - `_layout.tsx` (Tab Layout)
    - `new.tsx` (Screen)
    - `delivered` (Stack)
      - `_layout.tsx` (Stack Layout)
      - `details.tsx` (Screen)
      - `index.tsx` (Screen)


## User Journey to explore all types of navigations

- Start the app to explore the drawer.
- Go to orders to explore tabs.
- In the orders, go to delivered to explore the stack.
- Click on details button to go to the screen in delivered stack.


## Approach followed to create this navigation for drawer

### Components:

1. **DrawerNavigation**:
   - Root component that wraps the entire navigation in `GestureHandlerRootView`.
   - Contains `DrawerContainer` (for the drawer menu) and `ScreensContainer` (for screen content).

2. **DrawerContainer**:
   - Renders the side menu with navigation options.
   - Each `DrawerItem` is clickable and uses `expo-router` for navigation.

3. **DrawerItem**:
   - Represents each item in the drawer.
   - Highlights the active route by checking the current path with `usePathname()` from `expo-router`.

4. **useDrawerAnimation**:
   - Custom hook using `react-native-reanimated` for smooth transitions when opening/closing the drawer.
   - Controls the drawer's position, rotation, and border-radius.

5. **ScreensContainer**:
   - Displays the active screen content.
   - Includes swipe gestures with `PanGestureHandler` to toggle the drawer state.
   - The drawer state is animated based on swipe direction using `react-native-reanimated`.


## [Google Drive Link for the demo](https://drive.google.com/file/d/1-9lyp0ZpK4Ws59fne6Ggr2ol8-TiZWJ3/view?usp=sharing)
