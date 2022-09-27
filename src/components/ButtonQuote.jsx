import React from "react";

const ButtonQuote = ({ bgColor, RandomAll }) => {
  return (
    <article className="btn-layer">
      <button onClick={RandomAll} className="btn-layer-stl" style={bgColor}>
        &gt;
      </button>
    </article>
  );
};

export default ButtonQuote;
