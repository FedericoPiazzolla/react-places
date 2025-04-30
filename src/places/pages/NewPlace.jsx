import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./style/NewPlace.css";
import Button from "../../shared/components/FormElements/Button";

// Reducer: gestisce lo stato del form in base al tipo di azione ricevuta
const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;

      // Cicla su tutti i campi del form per verificare se l'intero form è valido
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid; // nuovo valore appena ricevuto
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid; // stato precedente
        }
      }

      // Restituisce il nuovo stato con il campo aggiornato e la validità del form
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

function NewPlace() {
  // useReducer gestisce lo stato complesso del form (valori + validità)
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
    },
    isValid: false,
  });

  // useCallback memorizza questa funzione, evitando che venga ricreata a ogni render.
  // Questo è utile perché la funzione viene passata al componente figlio <Input>.
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  return (
    <form action="" className="place-form">
      {/* Ogni input è collegato al reducer tramite onInput (che usa dispatch internamente) */}
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="Please enter a valid title."
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        errorText="Please enter a valid description (at least 5 characters)."
      />

      {/* Il bottone è disabilitato finché il form non è valido */}
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
}

export default NewPlace;
