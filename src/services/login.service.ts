import { LoginResponse } from "../interfaces/loginResponse";
import { axiosPost } from "../utils/axios.util";
import { sanitizeInput } from "../utils/general-functions";

const apiUrl = import.meta.env.VITE_API_URL;

export class LoginService {

  public static async doLogin(email: string, password: string): Promise<LoginResponse> {
    const loginData = {
      username: sanitizeInput(email),
      password: sanitizeInput(password)
    };

    return axiosPost<LoginResponse>(apiUrl + '/login', JSON.stringify(loginData));
  }

  public static async closeLogin(email: string): Promise<any> {
    return null;
  }
}
