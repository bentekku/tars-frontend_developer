import "./app.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  // useEffect(() => {
  //   getSearchPhotos(search);
  // }, [search]);

  const getRandomPhotos = async () => {
    // UNSPLASH API
    const API_KEY = "LE3dfDN5WWzdq_7uk0VVACxvYL7EG5nIuYgBL3gjFFo";
    const API_URL = "https://api.unsplash.com/";
    const COUNT_ARG = "count=32";
    const RANDOM_URL = `${API_URL}photos/random?client_id=${API_KEY}&${COUNT_ARG}`;

    const response = await axios.get(RANDOM_URL);
    // console.log("response: ", response);

    const data = await response.data;
    // console.log("data: ", response.data);

    setPhotos(data);
  };

  const getSearchPhotos = async (searchArg) => {
    // UNSPLASH API
    const API_KEY = "LE3dfDN5WWzdq_7uk0VVACxvYL7EG5nIuYgBL3gjFFo";
    const API_URL = "https://api.unsplash.com/";
    const COUNT_ARG = "count=32";
    const QUERY_COUNT_URL = `${API_URL}search/photos?client_id=${API_KEY}&query=${searchArg}&${COUNT_ARG}`;

    const response = await axios.get(QUERY_COUNT_URL);
    // console.log("response: ", response);

    const data = await response.data;
    // console.log("data: ", response.data);

    setPhotos(data);
  };

  useEffect(() => {
    getRandomPhotos();
  }, []);

  return (
    <div className="page">
      <Navbar
        search={search}
        setSearch={setSearch}
        getSearchPhotos={getSearchPhotos}
      />
      <Gallery photos={photos} />
      <Footer />
    </div>
  );
};

export default App;
