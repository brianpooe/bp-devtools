import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  Renderer2,
  TemplateRef
} from '@angular/core';
import { KeyValuePipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ngx-responsive-table',
  standalone: true,
  template: `
    <ng-container *ngIf="data; then table; else loading" />
    <ng-template #table>
      <table id="ngx-responsive-table-tb" role="table">
        <caption role="caption" *ngIf="caption">
          {{
            caption
          }}
        </caption>
        <thead id="ngx-responsive-table-th" role="rowgroup">
          <tr role="row">
            <ng-container
              *ngTemplateOutlet="
                headers || defaultHeaders;
                context: { $implicit: data }
              "
            />
          </tr>
        </thead>
        <tbody id="ngx-responsive-table-tb" role="rowgroup">
          <tr role="row" *ngFor="let row of data">
            <ng-container
              *ngTemplateOutlet="
                rows || defaultRows;
                context: { $implicit: row }
              "
            />
          </tr>
        </tbody>
      </table>
    </ng-template>

    <ng-template #defaultHeaders let-data>
      <th
        class="ngx-responsive-table-th"
        scope="col"
        role="columnheader"
        *ngFor="let header of data?.[0] | keyvalue"
      >
        {{ header.key }}
      </th>
    </ng-template>

    <ng-template #defaultRows let-row>
      <td
        class="ngx-responsive-table-td"
        role="cell"
        *ngFor="let row of row | keyvalue"
        [attr.data-cell]="row?.key"
      >
        {{ row?.value }}
      </td>
    </ng-template>

    <ng-template #loading>loading...</ng-template>
  `,
  imports: [NgIf, NgTemplateOutlet, NgForOf, KeyValuePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxResponsiveTableComponent {
  @Input() data: unknown[] = [];
  @Input() caption = '';

  @ContentChild('headers') headers!: TemplateRef<unknown>;
  @ContentChild('rows') rows!: TemplateRef<unknown>;
}
