import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex justify-center items-center w-full min-h-screen flex-col gap-y-4 p-6 mt-[60px] bg-white dark:bg-white">
        <View className="flex justify-start items-start gap-y-4 flex-col mb-[60px]">
          <Text className="text-4xl font-bold uppercase text-black tracking-wide">
            Welcome Back User
          </Text>
          <Text className="text-base font-medium text-neutral-500">
            Hey! Sign In to account to seamlessly manage your tasks and stay
            organized with Fudgel.
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center border-2 border-neutral-700 px-8 py-2 rounded-lg w-full gap-x-2 mt-[10px]">
          <Text className="text-xl text-black leading-none">Email:</Text>
          <TextInput
            className="flex-1 text-xl placeholder:text-neutral-400 ml-2 mt-0 py-2 leading-none"
            placeholder="saad@gmail.com"
            keyboardType="default"
            textAlignVertical="center"
          />
        </View>
        <View className="flex flex-row justify-center items-center border-2 border-neutral-700 px-8 py-2 rounded-lg w-full gap-x-2 mt-[10px]">
          <Text className="text-xl text-black leading-none">Password:</Text>
          <TextInput
            className="flex-1 text-xl placeholder:text-neutral-400 ml-2 mt-0 py-2 leading-none"
            placeholder="***************"
            keyboardType="default"
            textAlignVertical="center"
          />
        </View>
        <Link
          href="/fetch-items"
          className="bg-neutral-800 text-neutral-100 px-10 py-3 rounded-lg w-full text-center mt-6"
        >
          <Text className="text-2xl font-medium">Login</Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
