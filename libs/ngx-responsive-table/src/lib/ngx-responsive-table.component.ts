import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-responsive-table',
  standalone: true,
  imports: [],
  template: `<p>ngx-responsive-table works from lib!</p>`,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxResponsiveTableComponent {}
