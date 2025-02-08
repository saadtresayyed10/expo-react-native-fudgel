import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";

const RegisterScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex justify-center items-center w-full min-h-screen flex-col gap-y-4 p-6 mt-[60px] bg-white dark:bg-white">
        <View className="flex justify-start items-start gap-y-4 flex-col">
          <Text className="text-4xl font-bold uppercase text-black tracking-wide">
            Sign Up To Fudgel
          </Text>
          <Text className="text-base font-medium text-neutral-500">
            Fudgel is your go-to to-do app for effortlessly managing daily tasks
            with just a click. Sign up or log in to get started!
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center border-2 border-neutral-700 px-8 py-2 rounded-lg w-full gap-x-2 mt-[200px]">
          <Text className="text-xl text-black leading-none">+91:</Text>
          <TextInput
            className="flex-1 text-xl placeholder:text-neutral-400 ml-2 mt-1 py-2 leading-none"
            placeholder="Enter Number"
            keyboardType="numeric"
            textAlignVertical="center"
          />
        </View>
        <Link
          href="/otp"
          className="bg-neutral-800 text-neutral-100 px-10 py-3 rounded-lg w-full text-center"
        >
          <Text className="text-2xl font-medium">Send OTP</Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
