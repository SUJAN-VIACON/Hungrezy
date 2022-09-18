import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BottomNavbar from "../components/BottomNavbar";
import { MagnifyingGlassIcon, Bars3Icon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import client from "../sanity";
import { useEffect, useLayoutEffect, useState } from "react";
import FeatureRow from "../components/FeatureRow";
import NewMorph from "../components/NewMorph";
import Shadow from "../components/Shadow";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([1, 5]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="featured"]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative pt-7 ">
      <View className="p-5">
        <View className="flex-row justify-between align-center ">
          <Shadow className="bg-white rounded-lg h-12 w-12 overflow-hidden justify-center items-center">
            <Bars3Icon color="#989CA3" size={40} />
          </Shadow>
          <View className=" justify-center items-center">
            <Text className="text-[#989CA3]">Deliver To</Text>
            <Text className="text-primary">New Town, Kolkata</Text>
          </View>
          <Image
            source={require("../assets/images/profile.png")}
            className=" h-16 w-16 rounded-full shadow-lg "
          />
        </View>

        <Text className="font-bold text-[24px] mt-5">
          Hey, What would you like
        </Text>
        <Text className="font-bold text-[24px] mt-1">to order</Text>

        <View className="flex-row justify-between space-x-2 mt-5">
          <View className="relative border rounded-lg border-[#9796A1] flex-row items-center px-5 bg-[#EFEFEF]">
            <MagnifyingGlassIcon size={20} color="#767F9D" />
            <TextInput
              placeholder="Find your food or restaurant..."
              className="p-3 text-xs "
            />
          </View>
          <TouchableOpacity>
            <Shadow className="bg-white items-center justify-center px-3 rounded-lg p-3">
              <Image
                source={require("../assets/images/filter-icon.png")}
                className="h-7 w-7"
              />
            </Shadow>
          </TouchableOpacity>
        </View>

        <Categories />
        <ScrollView
          className="h-96 mb-10"
          contentContainerStyle={{
            paddingBottom: 70,
          }}
          showsVerticalScrollIndicator={false}
        >
          {featuredCategories &&
            featuredCategories?.map((category) => (
              <FeatureRow
                key={category._id}
                id={category._id ? category._id.toString() : null}
                title={category.name}
                description={category.short_description}
              />
            ))}
        </ScrollView>
      </View>
      <BottomNavbar />
    </SafeAreaView>
  );
};

export default HomeScreen;
