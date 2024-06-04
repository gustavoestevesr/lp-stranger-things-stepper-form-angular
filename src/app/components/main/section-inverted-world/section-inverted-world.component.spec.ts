import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInvertedWorldComponent } from './section-inverted-world.component';

describe('SectionInvertedWorldComponent', () => {
  let component: SectionInvertedWorldComponent;
  let fixture: ComponentFixture<SectionInvertedWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionInvertedWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionInvertedWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
