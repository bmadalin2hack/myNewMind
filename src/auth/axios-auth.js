import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1"
});

// instance.defaults.headers.common['Something'] = 'something'

export default instance;
