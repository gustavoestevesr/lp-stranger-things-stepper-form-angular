import { Component } from '@angular/core';
import { SectionInvertedWorldComponent } from './section-inverted-world/section-inverted-world.component';
import { SectionStrangerThingsTrailerComponent } from './section-stranger-things-trailer/section-stranger-things-trailer.component';
import { SectionStrangerThingsGalleryComponent } from './section-stranger-things-gallery/section-stranger-things-gallery.component';
import { SectionDungeonsDragonsFormComponent } from './section-dungeons-dragons-form/section-dungeons-dragons-form.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SectionInvertedWorldComponent, SectionStrangerThingsTrailerComponent, SectionStrangerThingsGalleryComponent, SectionDungeonsDragonsFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {}
