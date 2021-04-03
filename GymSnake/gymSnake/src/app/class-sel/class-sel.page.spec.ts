import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassSelPage } from './class-sel.page';

describe('ClassSelPage', () => {
  let component: ClassSelPage;
  let fixture: ComponentFixture<ClassSelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassSelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
