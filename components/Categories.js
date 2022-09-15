import { ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";
import { useEffect, useLayoutEffect, useState } from "react";
import client from "../sanity";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type=="category"]`).then((data) => setCategories(data));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{paddingTop: 25,paddingBottom:25 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories &&
        categories.map((category) => (
          <CategoryCard
            key={category._id}
            id={category._id}
            imageUrl={category.image}
            title={category.name}
          />
        ))}
    </ScrollView>
  );
};

export default Categories;
