import "./Autocomplete.scss";
import { RiCloseLine, RiSearchLine, RiEqualizerLine } from "react-icons/ri";
import React, { useState, useEffect } from "react";

const Autocomplete = ({ userOptions = [], onUserSelection }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = () => {
      let filteredSuggestions = [];
      if (!inputValue) {
        setSuggestions([]);
        return;
      } else {
        filteredSuggestions = userOptions.filter((option) => {
          return option.name.toLowerCase().startsWith(inputValue.toLowerCase());
        });

        if (
          filteredSuggestions.length === 1 &&
          filteredSuggestions[0].name === inputValue
        ) {
          setSuggestions([]);
        } else {
          setSuggestions(filteredSuggestions);
        }
      }
    };
    fetchSuggestions();
  }, [inputValue]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleClearButtonClick = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  const handleSuggestionClick = (e, suggestion) => {
    e.preventDefault();
    setInputValue(suggestion.name);
    onUserSelection(suggestion.name);
  };

  return (
    <div className="autocomplete">
      <input
        className="elevated"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search Client..."
      />

      <button onClick={handleClearButtonClick}>
        <RiCloseLine />
      </button>

      {inputValue !== "" && (
        <ul className="menu elevated">
          {suggestions.map((suggestion, index) => (
            <li
              className="menu-item"
              key={index}
              onClick={(e) => handleSuggestionClick(e, suggestion)}
            >
              <div className="menu-item-text">{suggestion.name}</div>
              {suggestion.img && (
                <img
                  className="menu-item-thumb"
                  src={suggestion.img}
                  alt={`${suggestion.name}'s Flag`}
                  width="30"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
