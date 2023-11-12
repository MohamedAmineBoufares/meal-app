import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { CATEGORIES } from "../data";
import Category from "../models/category";
import CategoryGridTitle from "../components/CategoryGridTitle";

const renderCategory: ListRenderItem<Category> = ({ item: category }) => (
  <CategoryGridTitle {...category} />
);

function Categories() {
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
