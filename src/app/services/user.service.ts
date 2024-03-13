import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterDTO } from '../dtos/user/register.dto';
import { LoginDTO } from '../dtos/user/login.dto';
import { environment } from '../environments/environment';

@Injectable({
      providedIn: 'root',
})
export class UserService {
      private apiUrlRegister = `${environment.apiBaseUrl}/users/register`;
      private apiUrlLogin = `${environment.apiBaseUrl}/users/login`;
      private apiConfig = {
            headers: this.createHeadersRequest(),
      };

      constructor(private http: HttpClient) {}

      private createHeadersRequest(): HttpHeaders {
            return new HttpHeaders({
                  'Content-Type': 'application/json',
                  'Accept-Language': 'en',
            });
      }

      register(registerDTO: RegisterDTO): Observable<any> {
            // const headers = new HttpHeaders({
            //       'Content-Type': 'application/json',
            // });

            return this.http.post(this.apiUrlRegister, registerDTO, this.apiConfig);
      }

      login(LoginDTO: LoginDTO): Observable<any> {
            return this.http.post(this.apiUrlLogin, LoginDTO, this.apiConfig);
      }
}
