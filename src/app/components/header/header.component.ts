import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() darkThemeOutput = new EventEmitter<boolean>();
  private darkTheme = false; // When true change for light-theme, false for dark-theme

  toggleThemeEmitter() {
    this.darkTheme = !this.darkTheme; // Update the darkTheme property
    this.darkThemeOutput.emit(this.darkTheme); // Emit the value of darkTheme
  }
}
