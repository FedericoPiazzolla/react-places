import React, { useReducer } from "react";
// useReducer è utile per gestire stati complessi o quando ci sono più azioni che aggiornano lo stato
// Funziona come un 'reducer' in Redux, centralizzando la logica per aggiornare lo stato.
// La differenza principale con useState è che useReducer è più adatto a stati complessi o a stati che dipendono da azioni multiple.

import { validate } from "../../util/validators";
import "./style/Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        //creiamo una copia del vecchio stato
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };

    case "TOUCH":
      return {
        //creiamo una copia del vecchio stato
        ...state,
        isTouch: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  //utilizziamo useReducer
  const [inputSate, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouch: false,
  });
  //Quando l'azione CHANGE viene inviata (tramite dispatch), il reducer aggiorna il valore dell'input (value) e imposta isValid a true.

  // La funzione changeHandler viene chiamata ogni volta che l'utente scrive qualcosa nell'input o nel textarea. Essa invia un'azione CHANGE al reducer per aggiornare lo stato.

  // Il valore dell'input viene preso dall'evento change e passato alla funzione dispatch.
  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  // attraverso le props passiamo la tipologia di input o textarea
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputSate.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || "3"}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputSate.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputSate.isValid && inputSate.isTouch && "form-control--invalid"
      }`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputSate.isValid && inputSate.isTouch && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
