import axios from "axios";
import authHeader from "./auth-header";
import { config } from "./config";

class UserService {
  addSale(sale) {
    return axios.post(`${config.api_url}/'add-sale`, {
      mobile_no: sale.phone,
      amount: sale.amount,
      headers: authHeader(),
    });
  }

  getTransactions(date = null) {
    return axios.post(
      `${config.api_url}/sale-list`,
      {
        date: date,
      },
      {
        headers: authHeader(),
      }
    );
  }

  updateUser(user) {
    return axios.post(
      `${config.api_url}`,
      {
        percentage: user.percentage_per_sale,
        price: user.price_per_point,
        name: user.name,
      },
      {
        headers: authHeader(),
        
      }
    )
  }
}

export default new UserService();
