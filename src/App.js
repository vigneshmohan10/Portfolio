import "./App.css";
import useDebounce from "./hooks/useDebounce";
import { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue);
  const fetchApiResults = () => {
    console.log("Fetching Api Data...");
  };

  useEffect(() => {
    fetchApiResults();
  }, [debouncedValue]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
