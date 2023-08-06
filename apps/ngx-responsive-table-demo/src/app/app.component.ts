import { Component, inject } from '@angular/core';
import { NgxResponsiveTableComponent } from '@devtools-bp/ngx-responsive-table';
import { UserService } from './api/user.service';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgxResponsiveTableComponent, AsyncPipe, NgOptimizedImage],
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = inject(UserService).users$;
}
