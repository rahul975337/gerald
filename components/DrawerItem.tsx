import { Colors } from "@/constants/Colors";
import { usePathname, useRouter } from "expo-router";
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
  const router = useRouter();

  const isActive = pathName === route;

  return (
    <Pressable
      className={`px-5 py-6 ${
        isActive ? `bg-[${Colors.tint}] rounded-xl` : ""
      }`}
      onPress={() => router.push(route)}
    >
      <Text className={`text-xl ${isActive ? "text-red-400" : "text-white"}`}>
        {PATH_NAME_TO_LABEL[route]}
      </Text>
    </Pressable>
  );
};
