import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStagiaireComponent } from './ajouter-stagiaire.component';

describe('AjouterStagiaireComponent', () => {
  let component: AjouterStagiaireComponent;
  let fixture: ComponentFixture<AjouterStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
