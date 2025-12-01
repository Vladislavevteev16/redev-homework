import { Header } from "./components/header/header";
import { GalleryControls } from "./components/gallery-controls/gallery-controls";
import { GalleryImage } from "./components/gallery-image/gallery-image";
import { ImageComponent } from "./components/image-component/image-component";
import { useState, useEffect } from "react";
import "./App.css";

const DOG_API = {
  getAllDogs: async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      if (!response.ok) {
        throw new Error("Ошибка получения списка собак");
      }
      const { message } = await response.json();

      return Object.keys(message);
    } catch (error) {
      console.log(error);
    }
  },
  getRandomDogsImage: async (breed, count) => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/${count}`
      );
      if (!response.ok)
        throw new Error("Ошибка получения случайной породы собаки");

      const { message } = await response.json();

      return message;
    } catch (error) {
      console.log(error.message);
    }
  },
};

function App() {
  const [updatesCount, setUpdatesCount] = useState(0);
  const [breeds, setBreeds] = useState(null);
  const [dogImages, setDogImages] = useState([]);
  const [imageCount, setImageCount] = useState(3);
  const [selectedBreed, setSelectedBreed] = useState("affenpinscher");

  useEffect(() => {
    (async () => {
      try {
        const allDogs = await DOG_API.getAllDogs();
        setBreeds(allDogs);
        const randomImages = await DOG_API.getRandomDogsImage(
          selectedBreed,
          imageCount
        );
        setDogImages(randomImages);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const setQuantityImages = (e) => {
    e.preventDefault();
    const currentValue = e.target.value;
    if (!currentValue);

    setImageCount(currentValue);
  };

  const setCurrentBreed = (e) => {
    const selectedBredd = e.target.value;
    setSelectedBreed(selectedBredd);
  };

  const handleUpdateImages = async () => {
    try {
      const randomDogImages = await DOG_API.getRandomDogsImage(
        selectedBreed,
        imageCount
      );
      setDogImages(randomDogImages);
      setUpdatesCount((prev) => prev + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="main-container">
      <Header countUpdate={updatesCount} />
      <GalleryControls
        breeds={breeds}
        onImageCountChange={setQuantityImages}
        imageCount={imageCount}
        onBreedChanges={setCurrentBreed}
        selectedBreed={selectedBreed}
        onUpdateGallery={handleUpdateImages}
      />
      <GalleryImage>
        {dogImages.map((item, index) => {
          return <ImageComponent key={index} imgUrl={item} />;
        })}
      </GalleryImage>
    </div>
  );
}

export default App;