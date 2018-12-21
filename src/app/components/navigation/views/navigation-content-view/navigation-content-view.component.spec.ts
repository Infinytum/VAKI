import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationContentViewComponent } from './navigation-content-view.component';

describe('NavigationContentViewComponent', () => {
  let component: NavigationContentViewComponent;
  let fixture: ComponentFixture<NavigationContentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationContentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationContentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
