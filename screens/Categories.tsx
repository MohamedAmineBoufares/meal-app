import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { CATEGORIES } from "../data";
import Category from "../models/category";
import CategoryGridTitle from "../components/CategoryGridTitle";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Categories">;

function Categories({ navigation }: Props) {
  const handleNavigate = () => {
    navigation.navigate("Meals");
  };

  const renderCategory: ListRenderItem<Category> = ({ item: category }) => {
    return <CategoryGridTitle {...category} onPress={handleNavigate} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      numColumns={2}
    />
  );
}

export default Categories;
