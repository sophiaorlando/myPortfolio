import React from "react";
import "./buttonFilter.css";

function ButtonFilter({ filter, button }) {
  return (
    <div>
      {button.map((cat, i) => {
        return (
          <button
            key={i}
            type="button"
            className="button"
            onClick={() => filter(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonFilter;
