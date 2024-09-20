import { TermResponse } from "../interfaces/term";
import { axiosGet } from "../utils/axios.util";
const apiUrl = import.meta.env.VITE_API_URL;

export class TermService {
  public static async getTerms(): Promise<TermResponse> {
    return axiosGet<TermResponse>(apiUrl + '/terms');
  }
}
