import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossaryComponent } from './grossary.component';

describe('GrossaryComponent', () => {
  let component: GrossaryComponent;
  let fixture: ComponentFixture<GrossaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrossaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
