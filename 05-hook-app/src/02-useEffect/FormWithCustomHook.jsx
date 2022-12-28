import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./message";

export const FormWithCustomHook = () => {
  const {formState, onResetForm, onInputChange, username, email, password} = useForm({
    
      username: "",
      email: "",
      password: ''
    
  })

  // const {username, email, password} = formState

  const func1 = () => {
    console.log('func1');
  }


  const func2 = () => {
    console.log('func2');
  }


  const func3 = () => {
    console.log('func2');
  }

  let arr = [1,1, 2,2,2 ,3]

  // const functionCount = (arr) => {
  //   const count = 0
  //   arr.reduce((beforeValue, number)=> {
  //     console.log(beforeValue, number)
  //     if(beforeValue === number){
  //       count++
  //     }
     
  //   }) 
  // }

  var numeros = [1, 1, 1, 4, 5, 6, 7, 8, 9, 10];
function contar(numeros) {
  return numeros.reduce(function(contador, numero) {
    if (contador[numero]) {
      contador[numero]++;
    } else {
      contador[numero] = 1;
    }
    return contador;
  }, {});
}
console.log(contar(numeros));


function contar(numeros) {
  return numeros.reduce(function(contador, numero) {
    if (contador[numero]) {
      contador[numero]++;
    } else {
      contador[numero] = 1;
    }
    return contador;
  }, {});
}


  useEffect(() => {
   ;
   contar(arr)
  }, [formState.email]);


  

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        placeholder="Pasword"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      {username === "Lucas" && <Message />}


      <button onClick={onResetForm}>Borrar</button>
    </>
  );
};
