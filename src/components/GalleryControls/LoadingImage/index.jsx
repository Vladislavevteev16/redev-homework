import loadingImg from "../../../assets/loading.png";
import "./loadingImage.css";

export const LoadingImage = () => {
  return (
    <div>
      <img className="loading-image" src={loadingImg} alt="loading" />
    </div>
  );
};
