import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  //Desestructurando el objeto de retorno
  const { data:images, loading } = useFetchGifs(category);

  console.log(loading);
  return (
    <>
      <h3>{category} </h3>

      {loading && "Cargando..." }

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
