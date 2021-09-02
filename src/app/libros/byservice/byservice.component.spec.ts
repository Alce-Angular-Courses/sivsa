import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByserviceComponent } from './byservice.component';

describe('ByserviceComponent', () => {
  let component: ByserviceComponent;
  let fixture: ComponentFixture<ByserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
