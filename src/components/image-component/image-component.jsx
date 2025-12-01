import "./image-component.css";

export const ImageComponent = ({ imgUrl }) => {
  return (
    <div className="image-wrapper">
      <img className="image-content" src={imgUrl} alt="" />
    </div>
  );
};