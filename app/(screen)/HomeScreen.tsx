import { View, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <ThemedView className="flex justify-center items-center w-full min-h-screen flex-col gap-y-10 p-6">
      <View className="flex justify-start items-start flex-col gap-y-2 w-full mt-10">
        <Text className="text-6xl font-bold uppercase text-black tracking-wide">
          Welcome to Fudgel
        </Text>
        <Text className="text-xl font-medium text-neutral-500">
          Fudgel is your go-to to-do app for effortlessly managing daily tasks
          with just a click. Sign up or log in to get started!
        </Text>
      </View>
      <View className="flex justify-center items-center gap-y-6 flex-col w-full mt-[200px]">
        <Link
          href="/"
          className="bg-neutral-800 text-neutral-100 px-10 py-3 rounded-lg w-full text-center"
        >
          <Text className="text-2xl font-medium">Login</Text>
        </Link>
        <Link
          href="/sign-up"
          className="bg-transparent text-neutral-800 border-2 border-neutral-600 px-10 py-3 rounded-lg w-full text-center"
        >
          <Text className="text-2xl font-medium">Register</Text>
        </Link>
      </View>
    </ThemedView>
  );
};

export default HomeScreen;
