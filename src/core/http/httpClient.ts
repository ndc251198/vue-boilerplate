import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';

export class HttpClient {

  private http: AxiosStatic;

  constructor() {
    this.http = axios;
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.http.get(url);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.http.post(url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.http.put(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.http.delete(url, config);
  }

  upload(url: string, data?: any, callback?: (event: ProgressEvent) => void) {
    return this.http.post(url, data, {
      onUploadProgress: callback
    });
  }

  download(url: string, data?: any, callback?: (event: ProgressEvent) => void, config?: AxiosRequestConfig) {
    return this.http.post(url, data, {
      onDownloadProgress: callback
    });
  }
}