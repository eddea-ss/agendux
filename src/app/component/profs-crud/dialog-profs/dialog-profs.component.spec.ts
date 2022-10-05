import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProfsComponent } from './dialog-profs.component';

describe('DialogProfsComponent', () => {
  let component: DialogProfsComponent;
  let fixture: ComponentFixture<DialogProfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProfsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogProfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
