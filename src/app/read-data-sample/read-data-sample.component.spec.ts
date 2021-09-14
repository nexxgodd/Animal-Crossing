import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDataSampleComponent } from './read-data-sample.component';

describe('ReadDataSampleComponent', () => {
  let component: ReadDataSampleComponent;
  let fixture: ComponentFixture<ReadDataSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadDataSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDataSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
