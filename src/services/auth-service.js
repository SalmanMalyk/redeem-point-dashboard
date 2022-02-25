import axios from "axios";
const API_URL = "http://7156-137-59-228-114.ngrok.io/api";

class AuthService {
  login(user) {
    return axios
      .post(`${API_URL}/login`, {
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
