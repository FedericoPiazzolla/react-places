import React from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./style/PlaceForm.css";
import Button from "../../shared/components/FormElements/Button";
import useForm from "../../shared/hooks/form-hook";

function NewPlace() {
  const [formState, inputHandler] = useForm(
    {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
      address: { value: "", isValid: false },
    },
    false
  );
  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // manderemo i dati al back end
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
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
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="Please enter a valid address."
      />

      {/* Il bottone è disabilitato finché il form non è valido */}
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
}

export default NewPlace;
