import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';

import { FormsModule } from '@angular/forms';
export interface LogData {
  id: string;
  log_id: string;
  user: string;
  date: string;
}

@Component({
  selector: 'app-log',
  imports: [ButtonModule, TableModule, FormsModule],
  templateUrl: './log.html',
  styleUrl: './log.css',
  standalone: true,
  providers: [MessageService],
})
export class Log implements OnInit {
  searchTerm: string = '';
  filteredLogs: LogData[] = [];
  logs: LogData[] = [
    { id: '6611d0aa15a351b73b8c1862', log_id: 'A123', user: 'roberto', date: '2025-08-17' },
    { id: '6611d0aa15a351b73b8c1862', log_id: 'A124', user: 'maria', date: '2025-08-16' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '6611d0aa15a351b73b8c1862', log_id: 'A123', user: 'roberto', date: '2025-08-17' },
    { id: '6611d0aa15a351b73b8c1862', log_id: 'A124', user: 'maria', date: '2025-08-16' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
    { id: '661300c971f0daf8ed2ddf72', log_id: 'A125', user: 'joão', date: '2025-08-15' },
  ];

  ngOnInit() {
    this.filteredLogs = [...this.logs]; // inicializa
  }

  applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredLogs = this.logs.filter(
      (log) =>
        log.id.toString().includes(term) ||
        log.log_id.toLowerCase().includes(term) ||
        log.user.toLowerCase().includes(term) ||
        log.date.toLowerCase().includes(term)
    );
  }

  goToDetail(id: string) {
    console.log('go to detail', id);
  }
}
