import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteDetailComponent } from './waste-detail.component';

describe('WasteDetailComponent', () => {
  let component: WasteDetailComponent;
  let fixture: ComponentFixture<WasteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
