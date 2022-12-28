import React from "react";

export const GifItem = ({ gif }) => {
  return (
    <div className="card">
        <img src={gif.url} alt="img" />
        <p>{gif.title}</p>
    </div>
  );
};
