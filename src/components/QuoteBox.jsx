import React from "react";
import ButtonQuote from "./ButtonQuote";

const QuoteBox = ({ randomQuotes, randomColor, getRandomAll }) => {
  const randomOnjectColor = {
    color: randomColor,
  };
  const randomOnjectBg = {
    backgroundColor: randomColor,
  };

  return (
    <article className="card" style={randomOnjectColor}>
      <p className="card__quote">{randomQuotes.quote}</p>
      <h2 className="card__author">{randomQuotes.author}</h2>
      <ButtonQuote bgColor={randomOnjectBg} RandomAll={getRandomAll} />
    </article>
  );
};

export default QuoteBox;
