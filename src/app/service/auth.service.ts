import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signInUrl = 'http://13.235.165.105:8071/user/login';
  private signUpUrl = 'http://13.235.165.105:8071/user/signUp';
  constructor(private _http: HttpClient) {}
  signInUser(user) {
    return this._http.post<any>(this.signInUrl, user);
  }
  signUpUser(user) {
    return this._http.post<any>(this.signUpUrl, user);
  }
}
