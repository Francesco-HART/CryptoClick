import React from "react";
import { API_KEY } from "../config/starton";
import axios from "axios";
const useStarton = () => {
  const starton = axios.create({
    baseURL: "https://api.starton.io/v2",
    headers: {
      "x-api-key": API_KEY,
    },
  });
  return { starton };
};

export { useStarton };
