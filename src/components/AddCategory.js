import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  //Se utiiza el "e" porque se recivira un evento

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Pare prevenir que recargue la pagina automaticamente el eplorador
    //console.log(inputValue);

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]); //cats contiene el valor del array que se envio desde el
      //componente GifExpertApp, inputValue es el valor que se
      //agrega al array original y es tomado desde el input
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
