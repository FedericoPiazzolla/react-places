import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";

import "./style/PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers of the world!",
    imageUrl:
      "https://cdn-imgix.headout.com/media/images/e783f141025783e733cf2e6f80d745ba-593-new-york-empire-state-building-observatory-tickets-11.jpg?auto=format&q=90&fit=crop&crop=faces",
    address: "20 W 34th St., New York, NY 10001, Stati Uniti",
    location: {
      lon: -74.0680653,
      lat: 40.7484112,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers of the world!",
    imageUrl:
      "https://cdn-imgix.headout.com/media/images/e783f141025783e733cf2e6f80d745ba-593-new-york-empire-state-building-observatory-tickets-11.jpg?auto=format&q=90&fit=crop&crop=faces",
    address: "20 W 34th St., New York, NY 10001, Stati Uniti",
    location: {
      lon: -74.0680653,
      lat: 40.7484112,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
