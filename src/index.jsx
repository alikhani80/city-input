/* eslint-disable react/prop-types */
import './index.css'; 

const Input = ({ handleChange, value, suggestion }) => {
  return (
    <div className="input">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Write the name of a city"
        autoComplete="off"
      />
      {suggestion && (
        <span className="inline-suggestion">
          {suggestion}
        </span>
      )}
    </div>
  );
};

export default Input;
