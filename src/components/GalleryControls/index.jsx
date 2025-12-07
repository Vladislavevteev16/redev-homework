import { SelectBreed } from "./SelectBreed";
import { UpdateImage } from "./UpdateImage";
import { LoadingImage } from "./LoadingImage";
import "./GalleryControls.css";

export const GalleryControls = ({
  breeds,
  onImageCountChange,
  onBreedChanges,
  selectedBreed,
  imageCount,
  onUpdateGallery,
  setDog,
  setCount,
  dog,
  count,
}) => {
  return breeds ? (
    <div className="container">
      <SelectBreed
        value={selectedBreed}
        onChange={onBreedChanges}
        breeds={breeds}
      />
      <UpdateImage
        imagesToShow={imageCount}
        onImagesToShowChange={onImageCountChange}
        onUpdateClick={onUpdateGallery}
        setDog={setDog}
        setCount={setCount}
        dog={dog}
        count={count}
      />
    </div>
  ) : (
    <LoadingImage />
  );
};
