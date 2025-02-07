import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

const OTPVerifyScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ThemedView className="flex justify-center items-center w-full min-h-screen flex-col gap-y-4 p-6 mt-[60px]">
        <View className="flex justify-start items-start gap-y-4 flex-col">
          <Text className="text-4xl font-bold uppercase text-black tracking-wide">
            OTP Verification
          </Text>
          <Text className="text-base font-medium text-neutral-500">
            Enter the OTP sent to your whatsapp mobile number to verify your
            account.
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center px-8 py-2 w-full gap-x-6 mt-[200px]">
          <TextInput
            className="py-4 px-6 border-2 border-neutral-700 rounded-lg"
            keyboardType="numeric"
          />
          <TextInput
            className="py-4 px-6 border-2 border-neutral-700 rounded-lg"
            keyboardType="numeric"
          />
          <TextInput
            className="py-4 px-6 border-2 border-neutral-700 rounded-lg"
            keyboardType="numeric"
          />
          <TextInput
            className="py-4 px-6 border-2 border-neutral-700 rounded-lg"
            keyboardType="numeric"
          />
        </View>
        <Link
          href="/create-acc"
          className="bg-neutral-800 text-neutral-100 px-10 py-3 rounded-lg w-full text-center"
        >
          <Text className="text-2xl font-medium">Create Account</Text>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default OTPVerifyScreen;
