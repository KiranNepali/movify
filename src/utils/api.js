import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmRmMDk5YTIzY2Q0ZDI2YjhmOTU0ZjQ1YTFkYjY3OCIsInN1YiI6IjY1NmI0YjVhNTY4NDYzMDE1MTYzMjYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Wr2zqVIDlsBhOAhtuJptC9RALj2vON5JpsDNUVsTy4",
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
