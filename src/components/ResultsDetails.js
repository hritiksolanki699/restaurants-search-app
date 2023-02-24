import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating}Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetails;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 140,
    borderRadius: 6,
    resizeMode: "contain",
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
