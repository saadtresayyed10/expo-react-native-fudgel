import { View, Text } from "react-native";

interface FormProps {
  title: string;
  email: string;
  password: string;
  redirect: string;
}

const Form = ({ email, password, redirect, title }: FormProps) => {
  return (
    <View className="flex justify-center items-center flex-col gap-y-8">
      <Text>{email}</Text>
      <Text>{password}</Text>
      <Text>{redirect}</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default Form;
