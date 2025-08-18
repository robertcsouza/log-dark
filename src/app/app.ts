import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolBar } from './views/components/tool-bar/tool-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dark-mode');
}
