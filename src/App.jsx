import { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import "./styles/App.css";
import quotes from "./json/quotes.json";
import color from "./utils/color";

function App() {
  const getIndexRandom = (arr) => Math.floor(Math.random() * arr.length);
  const firstElement = quotes[getIndexRandom(quotes)];
  const firstColor = color[getIndexRandom(color)];
  const [randomQuotes, setRandomQuotes] = useState(firstElement);
  const [randomColor, setRandomColor] = useState(firstColor);
  const backgroundObject = {
    backgroundColor: randomColor,
  };

  const getRandomAll = () => {
    setRandomQuotes(quotes[getIndexRandom(quotes)]);
    setRandomColor(color[getIndexRandom(color)]);
  };

  return (
    <div className="App" style={backgroundObject}>
      <QuoteBox
        randomQuotes={randomQuotes}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
    </div>
  );
}

export default App;
