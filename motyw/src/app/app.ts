import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ThemeService } from './theme.service';

@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, RouterLink, NgClass],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
constructor(public theme: ThemeService) {}
}