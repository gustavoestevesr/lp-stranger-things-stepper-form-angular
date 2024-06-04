import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lp-stranger-things-stepper-form-angular';

  darkTheme = false; // Defina true para tema escuro e false para tema claro
  @ViewChild('bodyElement', { static: true }) bodyElement!: ElementRef;

  subscribe() {}

  toggleThemeReceiver(darkTheme: boolean) {
    this.darkTheme = darkTheme;
  }
}
