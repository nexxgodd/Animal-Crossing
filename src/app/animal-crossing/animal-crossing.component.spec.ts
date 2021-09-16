import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCrossingComponent } from './animal-crossing.component';

describe('AnimalCrossingComponent', () => {
  let component: AnimalCrossingComponent;
  let fixture: ComponentFixture<AnimalCrossingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalCrossingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
