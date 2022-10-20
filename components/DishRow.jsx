import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { useState } from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeToBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  const dispatch = useDispatch();

  const selectedItems = useSelector((state) =>
    selectBasketItemsWithId(state, id)
  );
  const items = useSelector(selectBasketItems);

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeIteToBasket = () => {
    if (!selectedItems.length > 0) return;
    dispatch(removeToBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        className={`bg-white p-4 border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-row items-center">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className=" text-gray-400 mt-2">
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image.asset._ref).url() }}
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="w-20 h-20 bg-danger rounded"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row space-x-2 items-center pb-3">
            <TouchableOpacity onPress={removeIteToBasket}>
              <MinusCircleIcon size={40} color="#E60023" />
            </TouchableOpacity>
            <Text className="text-xl text-gray-500">
              {selectedItems.length}
            </Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#E60023" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
