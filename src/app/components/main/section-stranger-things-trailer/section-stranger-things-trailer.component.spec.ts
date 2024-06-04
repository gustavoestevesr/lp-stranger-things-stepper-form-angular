import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStrangerThingsTrailerComponent } from './section-stranger-things-trailer.component';

describe('SectionStrangerThingsTrailerComponent', () => {
  let component: SectionStrangerThingsTrailerComponent;
  let fixture: ComponentFixture<SectionStrangerThingsTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionStrangerThingsTrailerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionStrangerThingsTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
