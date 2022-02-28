import axios from "axios";
import { config } from "./config";

class AuthService {
  login(user) {
    return axios
      .post(`${config.api_url}/login`, {
        email: user.email,
        password: user.password,
      })
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        return data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
