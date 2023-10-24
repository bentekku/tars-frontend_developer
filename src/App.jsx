import "./app.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");

  // for real-time render of the search term entered in the search input
  useEffect(() => {
    search === "" ? null : getSearchPhotos(search);
  }, [search]);

  const getRandomPhotos = async () => {
    // UNSPLASH API
    const API_KEY = "-CEomnCGgtLoMXjsGcpy1tkk6sl48bYMnVSOxnBc1Hg";
    const API_URL = "https://api.unsplash.com/";
    // the number of photos that can be fetched from unsplash API is limited to 30 per request
    const COUNT_ARG = "count=32";
    const RANDOM_URL = `${API_URL}photos/random?client_id=${API_KEY}&${COUNT_ARG}`;

    const response = await axios.get(RANDOM_URL);
    console.log("response of getRandomPhotos: ", response);

    const data = await response.data;
    console.log("data of getRandomPhotos: ", data);

    setPhotos(data);
  };

  const getSearchPhotos = async (searchArg) => {
    // UNSPLASH API
    const API_KEY = "-CEomnCGgtLoMXjsGcpy1tkk6sl48bYMnVSOxnBc1Hg";
    const API_URL = "https://api.unsplash.com/";
    const PER_PAGE = "per_page=32";
    const QUERY_COUNT_URL = `${API_URL}search/photos?client_id=${API_KEY}&query=${searchArg}&${PER_PAGE}`;

    const response = await axios.get(QUERY_COUNT_URL);
    console.log("response of getSearchPhotos: ", response);

    const data = await response.data.results;
    console.log("data of getSearchPhotos: ", data);

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
