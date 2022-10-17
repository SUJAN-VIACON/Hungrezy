import { View, Text, Image } from "react-native";
const BottomNavbar = () => {
  const navbar = [
    {
      icon: require("../assets/images/nav-icon-1.png"),
      screen: "",
    },
    {
      icon: require("../assets/images/nav-icon-2.png"),
      screen: "",
    },
    {
      icon: require("../assets/images/nav-icon-3.png"),
      screen: "",
    },
    {
      icon: require("../assets/images/nav-icon-4.png"),
      screen: "",
    },
    {
      icon: require("../assets/images/nav-icon-5.png"),
      screen: "",
    },
  ];

  return (
    <View className="bg-white p-5 absolute bottom-0 w-full z-50 flex-row justify-between items-center">
      {navbar.map((item, key) => (
        <View key={key}>
          <Image source={item.icon} className=" h-7 w-7" resizeMode="contain"/>
        </View>
      ))}
    </View>
  );
};

export default BottomNavbar;
