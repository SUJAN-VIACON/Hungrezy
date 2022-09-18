import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";

const CategoryCard = ({ id, imageUrl, title }) => {
  return (
    <TouchableOpacity
      key={id}
      className=" mr-4 bg-white items-center p-1 rounded-full space-y-1"
      style={{
        shadowColor: "#5c5959",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }}
    >
      <Image
        source={{ uri: urlFor(imageUrl).url() }}
        className="w-12 h-12 rounded-full"
      />
      <Text className=" text-xs pb-3 pt-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
