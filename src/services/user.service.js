import axios from "axios";
import { API_URL } from "./auth-service";
import authHeader from "./auth-header";

class UserService {
  addSale(sale) {
    return axios.post(`${API_URL}/'add-sale`, {
      mobile_no: sale.phone,
      amount: sale.amount,
      headers: authHeader()
    });
  }
}

export default UserService();
