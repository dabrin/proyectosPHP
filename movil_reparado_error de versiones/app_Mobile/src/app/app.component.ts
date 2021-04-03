import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  
  value = '0';
public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Productos',
      url: '/tabs/products',
      icon: 'shirt',
      color:"success"
    },
    {
      title: 'Clientes',
      url: '/tabs/customers',
      icon: 'people'
  },
    {
      title: 'Ventas',
      url: '/tabs/sales',
      icon: 'bag'
  },
    {
      title: 'Prestamos',
      url: '/tabs/loans',
      icon: 'cash'
  },
   
  
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router
  ) {
    this.initializeApp();
    this.value = localStorage.getItem("permisoAdm");
  }

 

  initializeApp() {
    this.platform.ready().then(() => {
      
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

    LOGOUT() { 
    localStorage.removeItem("persona");
    localStorage.removeItem("user");
    localStorage.setItem("permisoAdm","0");
      
    this.route.navigate(['login']);
  }
}

