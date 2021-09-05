import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-mern-alpha.herokuapp.com",
});

export default instance;
