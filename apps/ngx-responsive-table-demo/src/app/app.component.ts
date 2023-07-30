import { Component, inject } from '@angular/core';
import { NgxResponsiveTableComponent } from '@devtools-bp/ngx-responsive-table';
import { UserService } from './user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgxResponsiveTableComponent, AsyncPipe],
  selector: 'root',
  template: `
    <div class="wrapper">
      <ngx-responsive-table [data]="(user$ | async)!" />
    </div>
  `,
  styles: [
    `
      .wrapper {
        width: min(900px, 100% - 3rem);
        margin-inline: auto;
      }
    `
  ]
})
export class AppComponent {
  user$ = inject(UserService).users$;
}
