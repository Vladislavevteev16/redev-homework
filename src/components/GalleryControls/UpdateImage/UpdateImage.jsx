import { Button } from "./Button/Button";
import "./UpdateImage.css";

export const UpdateImage = ({ imagesToShow,  onImagesToShowChange, onUpdateClick }) => {
  return (
    <div className="updateContainer">
      <p>Показать</p>
      <input
        defaultValue={imagesToShow}
        onInput={ onImagesToShowChange}
        className="show-input"
        type="number"
      />
      <Button onClick={onUpdateClick} />
    </div>
  );
};
