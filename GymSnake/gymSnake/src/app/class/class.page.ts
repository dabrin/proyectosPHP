import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  showClassDate() {
    this.router.navigate(['class-sel']);

  }
}
