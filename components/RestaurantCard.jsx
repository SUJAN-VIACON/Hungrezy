import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import Shadow from "./Shadow";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

const RestaurantCard = ({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (

    <Shadow className="bg-white mr-3 rounded-xl my-2 ml-2" key={id}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Restaurant", {
            id,
            imageUrl,
            title,
            rating,
            genre,
            address,
            shortDescription,
            dishes,
            long,
            lat,
          })
        }
      >
        <SharedElement id={`item.${id}.photo`}>
          <Image
            source={{ uri: urlFor(imageUrl).url() }}
            className="w-64 h-36 rounded-tl-xl rounded-tr-xl"
            // resizeMode="contain"
          />
        </SharedElement>
        <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-2">{title}</Text>
          <View className="flex-row space-x-1 items-center">
            <StarIcon size={15} opacity={0.5} color="#FE734C" />
            <Text className="text-xs text-gray-500">
              <Text className="text-[#FE734C]">{rating}</Text> . {genre}
            </Text>
          </View>
          <View className="flex-row space-x-1 items-center">
            <MapPinIcon size={22} opacity={0.5} color="gray" />
            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Shadow>

  );
};

export default RestaurantCard;
