import { Button } from "./Button";
import "./UpdateImage.css";
import { DOG_API } from "../../../api/dog-api";

export const UpdateImage = ({
  imagesToShow,
  onImagesToShowChange,
  setDog,
  setCount,
  dog,
  count,
}) => {
  const handleUpdateImages = async () => {
    try {
      const randomDogImages = await DOG_API.getRandomDogsImage(dog, count);
      setDog(randomDogImages);
      setCount((prev) => prev + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="updateContainer">
      <p>Показать</p>
      <input
        defaultValue={imagesToShow}
        onInput={onImagesToShowChange}
        className="show-input"
        type="number"
      />
      <Button onClick={handleUpdateImages} />
    </div>
  );
};
