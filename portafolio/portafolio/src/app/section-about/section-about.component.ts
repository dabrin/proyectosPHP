import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.css']
})
export class SectionAboutComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
