import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Meal from "../models/meal";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: Meal) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#313131" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl,
            }}
          />
          <Text style={[styles.whiteText, styles.title]}>{title}</Text>
        </View>

        <View style={styles.details}>
          <Text style={[styles.whiteText, styles.detailItem]}>{duration}m</Text>
          <Text style={[styles.whiteText, styles.detailItem]}>
            {complexity.toUpperCase()}
          </Text>
          <Text style={[styles.whiteText, styles.detailItem]}>
            {affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#242424",
  },
  whiteText: { color: "#fff" },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
