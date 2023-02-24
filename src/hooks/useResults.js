import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchterm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchterm,
          location: "san jose",
        },
      });
      setResults(response?.data?.businesses);
    } catch (error) {
      setErrorMessage(error.response.data.error.description);
    }
  };

  useEffect(() => {
    searchApi("indian");
  }, []);

  return [searchApi, results, errorMessage];
};
