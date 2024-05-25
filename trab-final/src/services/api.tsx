import axios from 'axios';

export const api = axios.create({
  baseURL: "https://projeto-react-we-default-rtdb.firebaseio.com/"
})