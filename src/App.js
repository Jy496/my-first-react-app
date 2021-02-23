import React from "react";
import { useState } from "react";
import AutoSuggest from "react-autosuggest";

const employees = [
  { id: 1, name: "john" },
  { id: 2, name: "Tayler" },
  { id: 3, name: "Joe" },
  { id: 4, name: "Tom" },
  { id: 5, name: "Robert" },
  { id: 6, name: "Rachel" },
  { id: 7, name: "Joseph" }
];

const lowerCasedEmployees = employees.map(employee => {
  return {
    id: employee.id,
    name: employee.name.toLowerCase()
  };
});

const App = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getSuggestions(value) {
    return lowerCasedEmployees.filter(employee =>
      employee.name.includes(value.trim().toLowerCase())
    );
  }
  function onSuggestionsFetchRequested({value}) {
    setValue(value);
    setSuggestions(getSuggestions(value));
  }

  return (
    <div>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={suggestion => <span>{suggestion.name}</span>}
        inputProps={{
          placeholder: "Search for 'j'",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          }
        }}
      />
    </div>
  );
};
  export default App;