import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./gifItem";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);

  return (
    <>
    {/* {
        isLoading ? (<h2>Cargando...</h2>) : null
    } */}
    {isLoading && (<h2>Cargando...</h2>)}

    <div className="card-grid">
      {images.map(gif => (
        <GifItem key={gif.id} gif={gif}/>
      ))}
    </div>
    </>
  );
};
