import { router, usePathname } from "expo-router";
import { useMemo } from "react";
import { Pressable, Text } from "react-native";

const ROUTES = ["/", "/orders", "/cart", "/favourites", "/login"];
type Routes = typeof ROUTES;

export const PATH_NAME_TO_LABEL: Record<Routes[number], string> = {
  "/": "Start",
  "/orders": "Your Orders",
  "/cart": "Your Cart",
  "/favourites": "Favourites",
  "/login": "Sign Out",
};

export const DrawerItem = ({ route }: { route: string }) => {
  const pathName = usePathname();
  const isActive = useMemo(() => pathName === route, [pathName, route]);

  return (
    <Pressable
      className={`px-5 py-6 ${
        isActive ? `bg-[#3F2636] rounded-xl` : "bg-transparent"
      }`}
      onPress={() => router.push(route)}
    >
      <Text className={`text-xl ${isActive ? "text-red-400" : "text-white"}`}>
        {PATH_NAME_TO_LABEL[route]}
      </Text>
    </Pressable>
  );
};
