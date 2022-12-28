import React, { useEffect, useState } from "react";
import { Message } from "./message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Lucas",
    email: "lucas@lucas.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("hola");
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

      {username === "Lucas" && <Message />}
    </>
  );
};
