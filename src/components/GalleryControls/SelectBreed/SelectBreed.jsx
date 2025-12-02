import "./SelectBreed.css";

export const SelectBreed = ({ value, onChange, breeds }) => {
  return (
    <div className="select-breed-container">
      <p>Порода</p>
      <select value={value} onChange={onChange} className="select-breed">
        {breeds.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
