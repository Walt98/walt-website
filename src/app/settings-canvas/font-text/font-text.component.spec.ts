import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontTextComponent } from './font-text.component';

describe('FontTextComponent', () => {
  let component: FontTextComponent;
  let fixture: ComponentFixture<FontTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
