import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStrangerThingsGalleryComponent } from './section-stranger-things-gallery.component';

describe('SectionStrangerThingsGalleryComponent', () => {
  let component: SectionStrangerThingsGalleryComponent;
  let fixture: ComponentFixture<SectionStrangerThingsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionStrangerThingsGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionStrangerThingsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
