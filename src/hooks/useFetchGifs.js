import React from "react";
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //EL useEffect se utiliza solo cuando cambia la categoria
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; //{data:[], loading:true }
  // La variable de retorno es la misma que se define en la costante
};
