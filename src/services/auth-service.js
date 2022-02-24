import axios from "axios";
const API_URL = "http://5207-137-59-228-114.ngrok.io/api";
const useStore = useStore();

class AuthService {
  login(user) {
    return axios
      .post(`${API_URL}/login`, {
        email: user.email,
        password: user.password,
      })
      .then(({ data }) => {
        if (data.token) {
          useStore.$patch({
            user: user,
            loggedIn: true,
          });
          localStorage.setItem("user", JSON.stringify(data));
        }
        return data;
      })
      .catch((error) => console.log(error));
  }

  logout() {
    useStore.$patch({
      user: null,
      loggedIn: false,
    });
    localStorage.removeItem("user");
  }
}

export default AuthService();
