import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteAddComponent } from './waste-add.component';

describe('WasteAddComponent', () => {
  let component: WasteAddComponent;
  let fixture: ComponentFixture<WasteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
