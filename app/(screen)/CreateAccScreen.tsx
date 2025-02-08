import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";
import { formElements } from "../create-acc";

const CreateAccScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex justify-center items-center w-full min-h-screen flex-col gap-y-4 p-6 mt-[60px] bg-white dark:bg-white">
        <View className="flex justify-start items-start gap-y-4 flex-col mb-[60px]">
          <Text className="text-4xl font-bold uppercase text-black tracking-wide">
            Sign Up To Fudgel
          </Text>
          <Text className="text-base font-medium text-neutral-500">
            Create an account to seamlessly manage your tasks and stay organized
            with Fudgel. Sign up now to get started!
          </Text>
        </View>
        {formElements.map((item, idx) => (
          <View
            key={idx}
            className="flex flex-row justify-center items-center border-2 border-neutral-700 px-8 py-2 rounded-lg w-full gap-x-2 mt-[10px]"
          >
            <Text className="text-xl text-black leading-none">
              {item.label}:
            </Text>
            <TextInput
              className="flex-1 text-xl placeholder:text-neutral-400 ml-2 mt-0 py-2 leading-none"
              placeholder={item.placeholder}
              keyboardType="default"
              textAlignVertical="center"
            />
          </View>
        ))}
        <Link
          href="/"
          className="bg-neutral-800 text-neutral-100 px-10 py-3 rounded-lg w-full text-center mt-6"
        >
          <Text className="text-2xl font-medium">Sign Up</Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateAccScreen;
