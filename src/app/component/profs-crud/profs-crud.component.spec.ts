import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfsCrudComponent } from './profs-crud.component';

describe('ProfsCrudComponent', () => {
  let component: ProfsCrudComponent;
  let fixture: ComponentFixture<ProfsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfsCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
