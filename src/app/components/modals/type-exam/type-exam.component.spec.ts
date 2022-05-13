import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeExamComponent } from './type-exam.component';

describe('TypeExamComponent', () => {
  let component: TypeExamComponent;
  let fixture: ComponentFixture<TypeExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
