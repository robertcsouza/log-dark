import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-tool-bar',
  imports: [ToolbarModule, InputTextModule, ButtonModule, AvatarModule, RippleModule, CardModule],
  templateUrl: './tool-bar.html',
  styleUrl: './tool-bar.css',
  standalone: true,
})
export class ToolBar {}
