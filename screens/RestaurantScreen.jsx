import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from "react-native";
import {
    ArrowLeftIcon,
    StarIcon,
    LocationMarkerIcon,
    QuestionMarkCircleIcon,
    ChevronRightIcon,
  } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
const { width, height } = Dimensions.get("window");
import { SharedElement } from 'react-navigation-shared-element';
import Categories from "../components/Categories";
import DishRow from "../components/DishRow";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectRestaurant, setRestaurant } from "../features/restaurantSlice";
import BasketIcon from "../components/BasketIcon";


const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const restaurant = useSelector(selectRestaurant)
    const {
        params: {
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
        },
    } = useRoute();


    return (
        <SafeAreaView className=" pt-16">

            <BasketIcon />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View className="relative">
                    <SharedElement id={`item.${id}.photo`}>
                        <Image
                            source={{ uri: urlFor(imageUrl).url() }}
                            className=" w-full h-56 bg-gray-400 p-4"
                        />
                    </SharedElement>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="absolute top-3 left-3 p-2 bg-gray-100  rounded-xl"
                    >
                        <ArrowLeftIcon size={20} color="black" />
                    </TouchableOpacity>
                </View>
                
                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row space-x-1 items-center">
                                <StarIcon size={22} opacity={0.5} color="#E60023" />
                                <Text className="text-gray-500 text-xs">
                                    <Text className="text-[#E60023]">{rating}</Text> . {genre}
                                </Text>
                            </View>
                            <View className="flex-row space-x-1 items-center">
                                {/* <LocationMarkerIcon size={22} opacity={0.4} color="gray" /> */}
                                <Text className="text-gray-500 text-xs">
                                    Nearby . {address}
                                </Text>
                            </View>
                        </View>

                        <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
                    </View>

                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-400 ">
                        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
                        <Text className="pl-2 text-md font-bold flex-1">
                            Have a food allergy?
                        </Text>
                        <ChevronRightIcon color="#00CCBB " />
                    </TouchableOpacity>
                </View>

                <View className="pb-36">
                    <Text className="text-xl font-bold px-4 pt-6 mb-3">Menu</Text>
                    {dishes.map((dish) => (
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.sort_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RestaurantScreen;
