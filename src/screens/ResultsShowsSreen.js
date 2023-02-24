import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

const ResultsShowsSreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return <View style={styles.background} />;
  }

  return (
    <View style={styles.background}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowsSreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
  imageStyle: {
    width: 300,
    height: 200,
    borderRadius: 6,
    resizeMode: "contain",
    marginBottom: 10,
    marginLeft: 15,
  },
});
