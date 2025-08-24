import { Component } from '@angular/core';
import { Tag } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-card',
  imports: [Tag, DividerModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true,
})
export class Card {}
