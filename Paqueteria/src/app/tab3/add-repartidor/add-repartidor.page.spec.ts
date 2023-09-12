import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRepartidorPage } from './add-repartidor.page';

describe('AddRepartidorPage', () => {
  let component: AddRepartidorPage;
  let fixture: ComponentFixture<AddRepartidorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddRepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
