import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map"
import "rxjs/Rx"


@Injectable({
  providedIn: 'root'
})
export class ApiservService {
  baseAPI = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }
  storeuser(values) {
    let body = {
      name: values.name,
      password: values.pass,
      confirmpassword: values.confirm
    }

    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users',
      body).map(values => {
        console.log("1", values)
      })
  }
  store1user(values) {
    let body1 = {
      name: values.name,
      pass: values.pass,

    }

    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate',
      body1).map(values => {
        localStorage.setItem("logindata",JSON.stringify(values))
        console.log("3", values)
      })
  }
  store2user(values) {
    let body2 = {
      id: JSON.parse(localStorage.getItem("logindata")).success._id,
      MovieName: values.name,
      Language: values.lang,
      Genre: values.genre,

    }

    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies',
      body2).map(values => {
        console.log("4", values)

      })
  }

}






