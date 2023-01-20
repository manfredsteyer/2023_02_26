import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBusinessUnitComponent } from './list-business-unit.component';

describe('ListBusinessUnitComponent', () => {
  let component: ListBusinessUnitComponent;
  let fixture: ComponentFixture<ListBusinessUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBusinessUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBusinessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
