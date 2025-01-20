import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers of the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St., New York, NY 10001, Stati Uniti",
    location: {
      lat: 40.7484112,
      lng: -74.0680653,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers of the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St., New York, NY 10001, Stati Uniti",
    location: {
      lat: 40.7484112,
      lng: -74.0680653,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;

  const loadedParams = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedParams} />;
};

export default UserPlaces;
