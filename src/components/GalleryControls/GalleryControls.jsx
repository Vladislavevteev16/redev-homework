import { SelectBreed } from "./SelectBreed/SelectBreed";
import { UpdateImage } from "./UpdateImage/UpdateImage";
import { LoadingImage } from "./LoadingImage/LoadingImage";
import "./GalleryControls.css";

export const GalleryControls = ({
  breeds,
  onImageCountChange,
  onBreedChanges,
  selectedBreed,
  imageCount,
  onUpdateGallery,
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
      />
    </div>
  ) : (
    <LoadingImage />
  );
};
