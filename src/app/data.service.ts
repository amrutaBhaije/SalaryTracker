import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/add'
  private REST_API_SERVER_FIND = 'http://localhost:3000/find'

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest(data) {
    return this.httpClient.post(this.REST_API_SERVER, data)
  }
  public getData(data) {
    return this.httpClient.post(this.REST_API_SERVER_FIND, data)
  }
}
