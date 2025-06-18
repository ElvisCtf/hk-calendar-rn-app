import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiClient {
    private baseURL: string;
    private api: AxiosInstance;

    constructor(baseURL: string){
        this.baseURL = baseURL;

        this.api = axios.create({
            baseURL: this.baseURL,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
            },
        });

        this.api.interceptors.response.use(
          (response: AxiosResponse) => response,
          error => {
            console.error("API Error:", error);
            return Promise.reject(error);
          }
        );
    }

    async getData<T>(endpoint: string): Promise<T> {
      try {
        const response: AxiosResponse<T> = await this.api.get(endpoint);
        return response.data;
      } catch (error) {
        throw error;
      }
    };
    
    async postData<T, U>(endpoint: string, data: U): Promise<T> {
      try {
        const response: AxiosResponse<T> = await this.api.post(endpoint, data);
        return response.data;
      } catch (error) {
        throw error;
      }
    };
}