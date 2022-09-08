import { View, Text, SafeAreaView } from "react-native";
import BottomNavbar from "../components/BottomNavbar";
const HomeScreen = () => {
  return (
    <SafeAreaView className=" flex-1 relative">
      <BottomNavbar/>
    </SafeAreaView>
  );
};

export default HomeScreen;
