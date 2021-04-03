import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarios = [{
    nombre: "Alex",
    edad: 23,
    nombreUsuario: "ALEX",
    password: "58185639",
  },
  {
    nombre: "Adrian Martinez",
    edad: 23,
    nombreUsuario: "user2",
    password: "user2",
    }];
  name: string = "Asdrubal";
    constructor(private http: HttpClient) { }

  start(userName: string, password: string) {

    localStorage.removeItem("persona");
    localStorage.removeItem("nombre");
    localStorage.removeItem("user");


    //console.log(JSON.stringify(this.usuarios[1]))
    for (let index = 0; index < this.usuarios.length; index++) {
      if (userName == this.usuarios[index].nombreUsuario && password == this.usuarios[index].password) {
          //console.log(userName);
        localStorage.setItem("user", this.usuarios[index].nombre);
        localStorage.setItem( "persona",JSON.stringify(this.usuarios[index]));
      }

    }

  }

  getAllUsers():Observable<any> {
    const path = 'https://apipolacoprueba.000webhostapp.com/User/GetAll.php'
    return this.http.get(path);
   }





}
