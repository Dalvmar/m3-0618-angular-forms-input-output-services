import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertoComponent } from './alberto.component';

describe('AlbertoComponent', () => {
  let component: AlbertoComponent;
  let fixture: ComponentFixture<AlbertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
