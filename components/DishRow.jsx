import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { useState } from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  StarIcon,
  MapPinIcon
  
} from "react-native-heroicons/outline";
import { SharedElement } from 'react-navigation-shared-element';
import Shadow from "./Shadow";



const DishRow = ({ id, name, description, price, image,navigation }) => {

  return (
    <>
      
      <Shadow className="bg-white  rounded-xl my-2" key={id}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Restaurant", {
              id, name, description, price, image

            })
          }

        >
          <SharedElement id={`dishes.${id}.photo`}>
            <Image
              source={{ uri: urlFor(image.asset._ref).url() }}
              className="w-full h-36 rounded-tl-xl rounded-tr-xl"
            // resizeMode="contain"
            />
          </SharedElement>
          <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{name}</Text>
            <View className="flex-row space-x-1 items-center">
              <StarIcon size={15} opacity={0.5} color="#FE734C" />
              <Text className="text-xs text-gray-500">
                <Text className="text-[#FE734C]"></Text>
              </Text>
            </View>
            <View className="flex-row space-x-1 items-center">
              <MapPinIcon size={22} opacity={0.5} color="gray" />
              <Text className="text-xs text-gray-500">Nearby . </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Shadow>
    </>
  );
};

export default DishRow;
