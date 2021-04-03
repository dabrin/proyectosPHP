import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSalePage } from './add-sale.page';

describe('AddSalePage', () => {
  let component: AddSalePage;
  let fixture: ComponentFixture<AddSalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
