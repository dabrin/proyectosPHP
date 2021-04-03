import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowLoanPage } from './show-loan.page';

describe('ShowLoanPage', () => {
  let component: ShowLoanPage;
  let fixture: ComponentFixture<ShowLoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLoanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
