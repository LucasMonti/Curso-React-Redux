import React, { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInputValue = ({target}) => {
    setInputValue(target.value)
  };


  const onSubmit = (event) => {
   
    event.preventDefault()

    if(inputValue.trim().length <= 1) return;
       
    onNewCategory(inputValue.trim());
    setInputValue([]);
  
  }



  return (
    <form onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Buscar Gif"
      value={inputValue}
      // onChange={input => setInputValue(input.target.value)}/> NOTA: puedo directamente ejecutar el setInputValue o mediante una función como en la línea de abajo.
    //   onChange={(input) => onChangeInputValue(input)} NOTA: Hacer esto, es igual a hacer lo que está en la línea de abajo por ES6. Ya que lo que paso
    //                                                          por parámetro es lo mismo que recibe la función como argumento.
      onChange={onChangeInputValue} 
    />
    </form>
  );
};
