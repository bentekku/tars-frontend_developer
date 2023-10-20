import "./app.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  const [photos, setPhotos] = useState([]);

  const getRandomPhotos = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    console.log(data);
    setPhotos(data);
  };

  useEffect(() => {
    getRandomPhotos();
  }, []);

  return (
    <div className="page">
      <Navbar />
      <Gallery photos={photos} />
      <Footer />
    </div>
  );
};

export default App;
