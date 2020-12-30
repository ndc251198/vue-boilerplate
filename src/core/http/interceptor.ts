import axios, { AxiosError } from "axios";
import { HttpStatus } from '../enumeration/httpStatusCode';

export default function() {
  axios.interceptors.request.use(
    (config) => {
      // thêm config mặc định cho request
      return config;
    },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error: AxiosError) => {
      if (Number(error.code) === HttpStatus.Unauthorized) {

      }
      return Promise.reject(error.code);
    }
  );
}
