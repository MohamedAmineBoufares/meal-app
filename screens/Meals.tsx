import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList, ListRenderItem } from "react-native";
import { RootStackParamList } from "../App";
import { CATEGORIES, MEALS } from "../data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "Meals">;

function Meals({ route }: Props) {
  const navigation = useNavigation();
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(({ categoryIds }) =>
    categoryIds.includes(categoryId)
  );

  const renderMealItem: ListRenderItem<Meal> = ({ item: meal }) => {
    return <MealItem {...meal} />;
  };

  // setting the screen title depending on the chosen category
  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === categoryId);

    if (category) {
      navigation.setOptions({
        title: category.title,
      });
    }
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});
