import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from '../interface/httpInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public list(){

    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/users`)
      .pipe(
        map((resp: User[]) => {
          
          return resp;
        }
      ),

      catchError( error => {
        

        throw(error);
      }));
  }
}
