import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMgmtSystemComponent } from './content-mgmt-system.component';

describe('ContentMgmtSystemComponent', () => {
  let component: ContentMgmtSystemComponent;
  let fixture: ComponentFixture<ContentMgmtSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMgmtSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMgmtSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
