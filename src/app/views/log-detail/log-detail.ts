import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { FormsModule } from '@angular/forms';
import { Card } from '../components/card/card';
export interface LogDetailData {
  id: string;
  method: string;
  path: string;
  user: string;
  date: string;
  data: {
    id: string;
    log_id: string;
    user: string;
    date: string;
  };
  status?: 'success' | 'error'; // para colorir os cards
}

@Component({
  selector: 'app-log-detail',
  imports: [
    CardModule,
    InfiniteScrollDirective,
    CommonModule,
    ButtonModule,
    NgxJsonViewerModule,
    FormsModule,
    Card,
  ],
  templateUrl: './log-detail.html',
  styleUrl: './log-detail.css',
})
export class LogDetail implements OnInit {
  items: LogDetailData[] = [];
  page = 0;
  loading = false;
  ngOnInit(): void {
    this.loadMore();
  }
  selectedItem: LogDetailData | null = null;
  searchTerm = '';
  loadMore(): void {
    const newItems: LogDetailData[] = Array.from({ length: 4 }, (_, i) => ({
      id: `6611d0aa15a351b73b8c186${this.page}${i}`,
      method: 'POST',
      path: '/get/users',
      user: 'roberto',
      date: '2025-08-17',
      status: i % 2 === 0 ? 'success' : 'error',
      data: {
        id: `6611d0aa15a351b73b8c186${this.page}${i}`,
        log_id: `A${this.page}${i}`,
        user: 'roberto',
        date: '2025-08-17',
        number: 0,
        boolean: true,
        array: [1, 2, 3],
        nested: { key: 'value', anotherKey: 123 },
        nulable: null,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies nisl dignissim bibendum cursus. Nam imperdiet molestie arcu nec tempor. Duis ligula arcu, ultricies eget cursus in, auctor quis justo. Vivamus egestas urna neque, sit amet dignissim dolor consectetur et. Sed nec tortor sed ligula tincidunt sagittis id in massa. Aliquam placerat tortor et nunc mollis blandit. Duis id velit eget elit tristique sollicitudin sit amet et erat. Nulla euismod rutrum odio sit amet molestie. Duis efficitur mi eu enim sollicitudin, vel venenatis tellus rutrum. Etiam sollicitudin, tellus non eleifend rhoncus, felis purus cursus purus, ut finibus magna nunc nec ligula. Nunc ullamcorper eu lacus id sagittis. Vivamus urna tortor, tincidunt sed lacus quis, dignissim mollis enim. Nam sed leo semper, pharetra magna dignissim, suscipit lectus. Praesent eu leo orci. Sed sed fringilla justo, id commodo ipsum.',
      },
    }));
    this.items = this.items.concat(newItems);
    this.page++;
    this.loading = false;
  }
  onScroll(event: any) {
    console.log('Scroll event:', event);
    console.log('Scroll chegou ao fim, carregando mais...');
    this.loadMore();
  }

  selectItem(item: any) {
    console.log('Item selecionado:', item);
    this.selectedItem = item;
  }
  applyFilter() {}
}
