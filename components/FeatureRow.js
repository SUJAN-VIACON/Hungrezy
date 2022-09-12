import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useLayoutEffect, useState } from "react";
import client from "../sanity";

const FeatureRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=="featured" && _id=="${id}"]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);


  return (
    <View className="mt-10" key={id}>
      <View className="flex-row justify-between">
        <Text className="text-lg font-bold">{title}</Text>
        <Text className=" text-xs text-[#9B9998]">view all</Text>
      </View>
      <Text className="text-sm text-gray-500">{description}</Text>

      <ScrollView
        contentContainerStyle={{}}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-5"
      >
        {restaurants && restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imageUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            shortDescription={restaurant.sort_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
