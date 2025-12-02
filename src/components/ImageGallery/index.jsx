import { DOG_API } from "../../api/dog-api";
import { Header } from "../Header";
import { GalleryControls } from "../GalleryControls";
import { DogPictureList } from "../DogPictureList";
import { ImageCard } from "../ImageCard";
import { useState, useEffect } from "react";

const DEFAULT_IMAGE_COUNT = 3;
const DEFAULT_BREED_NAME = "affenpinscher";

export const ImageGallery = () => {
  const [updatesCount, setUpdatesCount] = useState(0);
  const [breeds, setBreeds] = useState(null);
  const [dogImages, setDogImages] = useState([]);
  const [imageCount, setImageCount] = useState(DEFAULT_IMAGE_COUNT);
  const [selectedBreed, setSelectedBreed] = useState(DEFAULT_BREED_NAME);

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
    if (!currentValue) return;

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
    <>
      <Header countUpdate={updatesCount} />
      <GalleryControls
        breeds={breeds}
        onImageCountChange={setQuantityImages}
        imageCount={imageCount}
        onBreedChanges={setCurrentBreed}
        selectedBreed={selectedBreed}
        onUpdateGallery={handleUpdateImages}
      />
      <DogPictureList>
        {dogImages.map((item) => {
          return <ImageCard key={item} imgUrl={item} />;
        })}
      </DogPictureList>
    </>
  );
};
