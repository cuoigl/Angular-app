import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  private REST_API_SEVER = 'http://localhost:3000';
  private httpOptios = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getComments(): Observable<any> {
    const url = `${this.REST_API_SEVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptios);
  }

  public postPost(payload: any): Observable<any> {
    const url = `${this.REST_API_SEVER}/posts`;
    console.log('postPost', payload);
    return this.httpClient.post<any>(url, payload, this.httpOptios);
  }
}
