import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelodromoComponent } from './velodromo.component';

describe('VelodromoComponent', () => {
  let component: VelodromoComponent;
  let fixture: ComponentFixture<VelodromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelodromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelodromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
