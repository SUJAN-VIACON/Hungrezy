import React, { useMemo } from "react";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";
import { XCircleIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { removeToBasket } from "../features/basketSlice";

const BasketScreen = () => {
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurant);
  const [groupedItemsInBaskets, setGroupedItemsInBaskets] = React.useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const subtotal = useSelector(selectBasketTotal);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      results[item.id] = [...(results[item.id] || []), item];
      return results;
    }, {});

    setGroupedItemsInBaskets(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="pt-10 flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-primary bg-white shadow-xs">
          <View>
            <Text className="text-center text-lg font-bold">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-white absolute top-3 right-5"
          >
            <XCircleIcon color="#E60023" size={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 bg-white mt-5 px-4 py-3">
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/46/71/1b/46711b084d3ef3e081c82c258b08a642.jpg",
            }}
            className="h-7 w-7 rounded-full p-4 bg-white"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-primary">change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200 mt-5">
          {Object.entries(groupedItemsInBaskets).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white px-5 py-2"
            >
              <Text>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{items[0].name}</Text>
              <Text className=" text-gray-400 ">
                <Currency quantity={items[0].price} currency="USD" />
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeToBasket({ id: key }))}
              >
                <Text className="text-primary text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="bg-white mt-5 p-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={subtotal} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={50} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="">Order total</Text>
            <Text className=" font-extrabold">
              <Currency quantity={subtotal + 50} currency="USD" />
            </Text>
          </View>
          <TouchableOpacity className="bg-primary p-4 rounded-lg" onPress={() => navigation.navigate('PreparingOrder')}>
            <Text className="text-white text-center text-lg font-bold">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
