import { Routes } from '@angular/router';
import { Log } from './views/log/log';
import { LogDetail } from './views/log-detail/log-detail';

export const routes: Routes = [
  {
    path: '',
    component: Log,
  },

  {
    path: 'detail',
    component: LogDetail,
  },
];
