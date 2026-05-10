import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private dark = false;

  constructor() {
    const saved = localStorage.getItem('theme');
    this.dark = saved === 'dark';
    this.apply();
  }

  toggle() {
    this.dark = !this.dark;
    localStorage.setItem('theme', this.dark ? 'dark' : 'light');
    this.apply();
  }

  private apply() {
    document.body.classList.toggle('theme-dark', this.dark);
  }

  isDark() {
    return this.dark;
  }
}