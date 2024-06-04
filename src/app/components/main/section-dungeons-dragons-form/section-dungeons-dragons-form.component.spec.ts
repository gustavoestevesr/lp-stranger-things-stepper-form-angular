import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDungeonsDragonsFormComponent } from './section-dungeons-dragons-form.component';

describe('SectionDungeonsDragonsFormComponent', () => {
  let component: SectionDungeonsDragonsFormComponent;
  let fixture: ComponentFixture<SectionDungeonsDragonsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDungeonsDragonsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionDungeonsDragonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
