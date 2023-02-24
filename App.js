import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowsSreen from "./src/screens/ResultsShowsSreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowsSreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurants Search",
    },
  }
);

export default createAppContainer(navigator);
