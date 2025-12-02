import "./ImageCard.css";

export const ImageCard  = ({ imgUrl }) => {
  return (
    <div className="image-wrapper">
      <img className="image-content" src={imgUrl} alt="" />
    </div>
  );
};