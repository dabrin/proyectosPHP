import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjsComponent } from './section-projs.component';

describe('SectionProjsComponent', () => {
  let component: SectionProjsComponent;
  let fixture: ComponentFixture<SectionProjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
