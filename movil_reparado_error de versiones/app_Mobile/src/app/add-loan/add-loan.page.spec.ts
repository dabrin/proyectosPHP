import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLoanPage } from './add-loan.page';

describe('AddLoanPage', () => {
  let component: AddLoanPage;
  let fixture: ComponentFixture<AddLoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
