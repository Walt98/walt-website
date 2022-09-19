import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCanvasComponent } from './settings-canvas.component';

describe('SettingsCanvasComponent', () => {
  let component: SettingsCanvasComponent;
  let fixture: ComponentFixture<SettingsCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
