import axios from "axios";

export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    axios.defaults.headers.common["Authorization"] = user.token;
    return {
      Authorization: `Bearer ${user.token}`,
      "Access-Control-Allow-Origin": "*"
    };
  } else {
    return {};
  }
}
