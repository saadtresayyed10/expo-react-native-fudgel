import { View } from "react-native";
import FetchItemsScreen from "./(screen)/FetchItemsScreen";

const FetchItems = () => {
  return (
    <View className="flex justify-center items-center w-full min-h-screen bg-white dark:bg-white">
      <FetchItemsScreen />
    </View>
  );
};

export default FetchItems;
