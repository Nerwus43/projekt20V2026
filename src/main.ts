import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host { 
      --bg: #ffffff; 
      --fg: #222; 
      display: block;
      padding: 20px;
    }
    .theme-dark { 
      --bg: #121212; 
      --fg: #eaeaea; 
    }
    .container {
      background: var(--bg);
      color: var(--fg);
      padding: 20px;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    button { 
      padding: 10px 20px; 
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      background: var(--fg);
      color: var(--bg);
      transition: all 0.3s ease;
    }
    button:hover {
      opacity: 0.8;
    }
  `],
  template: `
    <div [class.theme-dark]="dark" class="container">
      <h1>{{ dark ? 'Motyw Ciemny' : 'Motyw Jasny' }}</h1>
      <p>Obecny motyw: {{ dark ? 'CIEMNY' : 'JASNY' }}</p>
      <button (click)="dark = !dark">
        Zmień na {{ dark ? 'Jasny' : 'Ciemny' }} motyw
      </button>
    </div>
  `
})
export class App {
  dark = false;
}

bootstrapApplication(App);