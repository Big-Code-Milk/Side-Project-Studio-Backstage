import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingThingsDoneComponent } from './getting-things-done.component';

describe('GettingThingsDoneComponent', () => {
  let component: GettingThingsDoneComponent;
  let fixture: ComponentFixture<GettingThingsDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingThingsDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingThingsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
