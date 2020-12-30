import { HttpClient } from '@/core/http/httpClient';

export class BaseService {
  public httpClient: HttpClient;
  
  constructor() {
    this.httpClient = new HttpClient();
  }
}