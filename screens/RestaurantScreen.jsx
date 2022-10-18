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


const RestaurantScreen = () => {

    const navigation = useNavigation();
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
        <SafeAreaView className="px-7 pt-16">
            {/* <BasketIcon /> */}
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

                <View className="my-7">
                    <Text className="text-3xl font-bold  text-[#323643]">{title}</Text>
                </View>

                <Categories />

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
