import React, { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import "./App.css";

const App: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/times-list.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const filteredData = data.filter(
          (item: string) =>
            item !== "/times/510108.jpg" &&
            item !== "/times/560109.jpg" &&
            item !== "/times/610106.jpg"
        );
        setImages(filteredData);
      } catch (error) {
        console.error("Error fetching image list:", error);
      }
    };

    fetchImages();
  }, []);

  return <Gallery images={images} />;
};

export default App;
