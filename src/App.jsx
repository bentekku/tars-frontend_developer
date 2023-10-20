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
    // not unsplash api
    // const OLD_URL = "https://picsum.photos/v2/list";
    // const NEW_URL = "https://api.thecatapi.com/v1/images/search?limit=32";
    // const response = await axios.get(NEW_URL);
    // console.log("response: ", response);
    // console.log("data: ", response.data);
    // setPhotos(await response.data);
    // unsplash api
    // const API_KEY = "LE3dfDN5WWzdq_7uk0VVACxvYL7EG5nIuYgBL3gjFFo";
    // const API_URL = "https://api.unsplash.com/";
    // const RANDOM_URL = `${API_URL}photos/random?client_id=${API_KEY}&query=${searchArg}&count=1`;
    // const response = await axios.get(NEW_URL);
    // console.log("response: ", response);
    // console.log("data: ", response.data);
    // setPhotos(await response.data);
  };

  const getSearchPhotos = async (searchArg) => {
    // not unsplash api
    // const NEW_URL = "https://api.thecatapi.com/v1/images/search?limit=32";
    // const response = await axios.get(NEW_URL);
    // console.log("response: ", response);
    // console.log("data: ", response.data);
    // setPhotos(await response.data);

    // unsplash api
    const API_KEY = "LE3dfDN5WWzdq_7uk0VVACxvYL7EG5nIuYgBL3gjFFo";
    const API_URL = "https://api.unsplash.com/";
    const COUNT_ARG = "count=5";
    const QUERY_COUNT_URL = `${API_URL}photos/random?client_id=${API_KEY}&query=${searchArg}&${COUNT_ARG}`;
    const response = await axios.get(QUERY_COUNT_URL);
    console.log("response: ", response);
    console.log("data: ", response.data);
    setPhotos(await response.data);
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
