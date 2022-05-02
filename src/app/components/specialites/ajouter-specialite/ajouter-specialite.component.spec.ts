import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSpecialiteComponent } from './ajouter-specialite.component';

describe('AjouterSpecialiteComponent', () => {
  let component: AjouterSpecialiteComponent;
  let fixture: ComponentFixture<AjouterSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSpecialiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
