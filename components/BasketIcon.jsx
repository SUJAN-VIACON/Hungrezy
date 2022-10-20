import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  const navigation = useNavigation();
  return (
    <View className="w-full absolute bottom-5 z-50">
      <TouchableOpacity className=" mx-5 p-4 bg-primary flex-row rounded-lg items-center space-x-1" onPress={()=>navigation.navigate("Basket")}>
        <Text className="py-1 px-2 bg-[#f57286] font-extrabold text-lg text-white rounded">{items.length}</Text>
        <Text className="text-center flex-1 font-extrabold text-lg text-white">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={total} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
