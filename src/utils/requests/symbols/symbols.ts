
import axios from "axios";
// TODO(mikle): move to constants if needed
const PROXY = "https://pacific-taiga-61753.herokuapp.com";

export const getTweets = (title: string) =>
  axios.post(`${PROXY}/tweets`, { title });

export const getSymbols = (title: string) =>
  axios.post(`${PROXY}/search-symbols`, { title });
