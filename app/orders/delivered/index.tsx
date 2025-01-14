import { router } from "expo-router";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Delivered() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Text>Delivered</Text>
      <Button
        title="View Details"
        onPress={() => {
          router.push("/orders/delivered/details");
        }}
      />
    </SafeAreaView>
  );
}
