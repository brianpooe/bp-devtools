import { Component } from '@angular/core';
import { NgxResponsiveTableComponent } from '@devtools-bp/ngx-responsive-table';

@Component({
  standalone: true,
  imports: [NgxResponsiveTableComponent],
  selector: 'root',
  template: ` <ngx-responsive-table />`,
  styles: ['']
})
export class AppComponent {}
