import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteEditComponent } from './waste-edit.component';

describe('WasteEditComponent', () => {
  let component: WasteEditComponent;
  let fixture: ComponentFixture<WasteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
