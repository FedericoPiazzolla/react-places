import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

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

const UserPlaces = () => {
  const userId = useParams().userId;

  const loadedParams = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedParams} />;
};

export default UserPlaces;
