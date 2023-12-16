import axios from "axios";

const baseUrl = "http://localhost:3001/api/login";

const logIn = (credentials) => {
     return axios.post(baseUrl,credentials)
}

export default logIn;