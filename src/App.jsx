import { useState } from 'react';
import cities from './cities.json';
import Input from './index.jsx'; 

function App() {
  const [inputValue, setInputValue] = useState('');
  const [closestCity, setClosestCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      const closest = filteredCities.length > 0 ? filteredCities[0] : '';
      setClosestCity(closest);

      setSuggestions(filteredCities.slice(1, 4));
    } else {
      setClosestCity('');
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city) => {
    setInputValue(city);
    setSuggestions([]);
    setClosestCity('');
  };

  return (
    <div className="app">
      <div className="input-container">
        <Input 
          value={inputValue} 
          handleChange={handleChange} 
          suggestion={closestCity && inputValue !== closestCity 
            ? closestCity.slice(inputValue.length) 
            : ''} 
        />
      </div>

      {suggestions.length > 0 && (
        <div className="suggestion-box">
          {suggestions.map((city, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
