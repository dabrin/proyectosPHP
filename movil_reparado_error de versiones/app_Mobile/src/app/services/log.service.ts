import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LogService {
 usuarios = [{
    nombre: "ALEX ",
    edad: 23,
    nombreUsuario: "ALEX",
    password: "58185639",
  },
  {
    nombre: "Dabrin Nájera",
    edad: 23,
    nombreUsuario: "staff",
    password: "staff",
    }];
  name: string = "Asdrubal";
  user: Observable<User>;
  conta=0;
  constructor(private http:HttpClient,private router:Router) { }


   start(userName: string, password: string) { 
    localStorage.removeItem("persona");
    localStorage.removeItem("nombre");
    localStorage.removeItem("user");
    this.conta = 0;
    for (let index = 0; index < this.usuarios.length; index++) {
      if (userName == this.usuarios[index].nombreUsuario && password == this.usuarios[index].password) {
        localStorage.setItem("user", this.usuarios[index].nombre);
        localStorage.setItem("persona", JSON.stringify(this.usuarios[index]));
        localStorage.setItem("permisoAdm", "1");
        this.conta = this.conta + 1;
        this.router.navigate(['home'])
      } else { 
        this.log(userName,password).subscribe((data: any) => {
        console.log(data);
          if (data.length > 0) {
            this.user = data;
            localStorage.setItem("user", data[0].NAME_USER);
            localStorage.setItem("permisoAdm", "0");
            this.conta = this.conta + 1;
            this.router.navigate(['home'])
          }

        });
        
      }

      console.log(this.redirect(this.conta))
      if ( this.redirect(this.conta)) {
        console.log("true?");
        return true
      }
      else {return false }
        
      
    }
  }

     redirect(conta) {
    console.log(conta)
    if (conta > 0) {
      console.log(""+conta)
      return true
    } else if (conta == 0){ 
      console.log("!!"+conta)
      return false;
    }
  }
  

  
    log(userName: string, password: string) { 
    const headers = { 'Accept': 'application/json' }   
    const params = new HttpParams()
      .set('USER_NAME', userName)
      .set('USER_PASSWORD',""+password);
      
    const body = JSON.stringify(params);
    var url = 'https://apipolacoprueba.000webhostapp.com/User/login.php';
    return this.http.get<User>(`${url}`, { 'headers': headers, 'params': params });
  }

  
}
