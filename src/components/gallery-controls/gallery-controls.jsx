import "./gallery-controls.css";
import loading from "../../assets/loading.png";

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
      <div className="select-breed-container">
        <p>Порода</p>
        <select
          value={selectedBreed}
          onChange={onBreedChanges}
          className="select-breed"
        >
          {breeds.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="updateContainer">
        <p>Показать</p>
        <input
          defaultValue={imageCount}
          onInput={onImageCountChange}
          className="show-input"
          type="number"
        />
        <button onClick={() => onUpdateGallery()} className="update-btn">
          Обновить
        </button>
      </div>
    </div>
  ) : (
    <div>
      <img className="loading-image" src={loading} alt="loading" />
    </div>
  );
};