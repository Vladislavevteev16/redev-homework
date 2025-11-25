export const MyComp6 = ({ arr }) => {
  return (
    <ul>
      {arr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
