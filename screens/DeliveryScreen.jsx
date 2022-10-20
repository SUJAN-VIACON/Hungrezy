import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import MapView from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className=" bg-primary">
      <SafeAreaView className="z-50 pt-10 relative">
        <View className="flex-row justify-between item-center p-5 h-36">
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-lg font-light text-white">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 p-5 rounded-md z-50 shadow-md absolute top-24 left-1">
          <View className="flex-row justify-between item-center">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">40-50 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} indeterminate={true} color={"#E60023"} />
          <Text className="mt-3 text-gray-500">
            Order at {restaurant.title} is being prepared
          </Text>
        </View>

        <View className="flex-1">
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            className=" h-full"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
