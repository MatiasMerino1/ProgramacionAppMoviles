import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPaquetePage } from './add-paquete.page';

describe('AddPaquetePage', () => {
  let component: AddPaquetePage;
  let fixture: ComponentFixture<AddPaquetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddPaquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
