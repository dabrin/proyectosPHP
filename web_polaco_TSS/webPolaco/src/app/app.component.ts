import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webPolaco';


    user = localStorage.getItem("user");
    islog() {
    if (this.user != null) {
      return true;
    } else return false;
  }
}
