import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCondensedComponent } from './navbar-condensed.component';

describe('NavbarCondensedComponent', () => {
  let component: NavbarCondensedComponent;
  let fixture: ComponentFixture<NavbarCondensedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCondensedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCondensedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
