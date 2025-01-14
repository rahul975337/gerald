import { Text, View } from "react-native";
import { DrawerItem } from "./DrawerItem";

export const DrawerContainer = () => {
  return (
    <View className="absolute top-0 left-0 h-full w-1/2  pt-10 px-5">
      <Text className="self-center text-white text-2xl font-bold mb-10">
        Beka
      </Text>
      <DrawerItem route="/" />
      <DrawerItem route="/cart" />
      <DrawerItem route="/favourites" />
      <DrawerItem route="/orders" />

      <View className="h-[1] bg-gray-600 my-20" />

      <DrawerItem route="/login" />
    </View>
  );
};
