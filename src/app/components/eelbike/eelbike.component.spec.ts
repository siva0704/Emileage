import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EelbikeComponent } from './eelbike.component';

describe('EelbikeComponent', () => {
  let component: EelbikeComponent;
  let fixture: ComponentFixture<EelbikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EelbikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EelbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
