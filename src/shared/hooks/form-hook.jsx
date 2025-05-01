import React, {useCallback, useReducer} from "react";

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
    
    case 'SET_DATA':
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      }
    default:
      return state;
  }
};

const useForm = (initialInputs, initialFormValidity) => {
  // useReducer gestisce lo stato complesso del form (valori + validità)
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
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

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};

export default useForm;