import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowSalePage } from './show-sale.page';

describe('ShowSalePage', () => {
  let component: ShowSalePage;
  let fixture: ComponentFixture<ShowSalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
