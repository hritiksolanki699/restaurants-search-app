import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ResultsDetails from "./ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.contaier}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetails result={item} />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default withNavigation(ResultList);

const styles = StyleSheet.create({
  contaier: {
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});
