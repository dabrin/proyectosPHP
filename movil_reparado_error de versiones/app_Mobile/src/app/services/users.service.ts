import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { 
    
  }

  getAllUsers():Observable<any> {
    const path = 'https://apipolacoprueba.000webhostapp.com/User/GetAll.php'
    return this.http.get(path);
  }

  getUser(id:string):Observable<any> { 
    const path = `https://apipolacoprueba.000webhostapp.com/User/GetOne.php?id=${id}`;
    return this.http.get(path);
  }
  post(user:User) { 
    const headers = { 'Accept': 'application/json' }   
    const params = new HttpParams()
     
      .set('ID_NUMBER', user.ID_NUMBER)
      .set('NAME_USER', user.NAME_USER)
      .set('USER_NAME', user.USER_NAME)
      .set('E_MAIL', user.E_MAIL)
      .set('USER_PASSWORD',""+user.USER_PASSWORD);
      
    const body = JSON.stringify(user);
    var url = 'https://apipolacoprueba.000webhostapp.com/User/PostCustomer.php';
    return this.http.get<User>(`${url}`, { 'headers': headers, 'params': params });
  }

   updateUser(user:User) :Observable<any>{ 
    const headers = { 'Accept': 'application/json'}   
    const params = new HttpParams()
      .set('ID_NUMBER', user.ID_NUMBER)
      .set('NAME_USER', user.NAME_USER)
      .set('USER_NAME', user.USER_NAME)
      .set('E_MAIL', user.E_MAIL)
      .set('USER_PASSWORD',""+user.USER_PASSWORD);
    const body=JSON.stringify(user)
    var url = 'https://apipolacoprueba.000webhostapp.com/User/Update.php';
    return this.http.post<User>(`${url}`, body, { 'headers': headers, 'params': params });

  }

   deleteUser(id:string):Observable<any> { 
    const headers = { 'Accept': 'application/json' }   
    const params = new HttpParams().set('id', id);
    const body = JSON.stringify(id);
    return this.http.post(`https://apipolacoprueba.000webhostapp.com/User/Delete.php`,body, {'headers':headers,'params':params});
  }


}
