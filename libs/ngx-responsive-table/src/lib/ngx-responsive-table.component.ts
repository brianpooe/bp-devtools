import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef
} from '@angular/core';
import { KeyValuePipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ngx-responsive-table',
  standalone: true,
  template: `
    <ng-container *ngIf="data; then responsiveTable; else loading" />
    <ng-template #responsiveTable>
      <table role="table" #table>
        <caption role="caption" #caption *ngIf="caption">
          {{
            caption
          }}
        </caption>
        <thead role="rowgroup">
          <tr role="row">
            <ng-container
              *ngTemplateOutlet="
                headers || defaultHeaders;
                context: { $implicit: data }
              "
            />
          </tr>
        </thead>
        <tbody role="rowgroup">
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
        scope="col"
        role="columnheader"
        *ngFor="let header of data?.[0] | keyvalue"
      >
        {{ header.key }}
      </th>
    </ng-template>

    <ng-template #defaultRows let-row>
      <td
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
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      caption,
      th,
      td {
        padding: 1rem;
      }

      caption,
      th {
        text-align: left;
      }

      caption {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      th {
        background: hsl(54 32% 80% / 1.5);
      }

      tr:nth-of-type(2n) {
        background: hsl(0 0% 80% / 0.5);
      }

      @media (max-width: 650px) {
        th {
          display: none;
        }

        td {
          display: grid;
          gap: 0.5rem;
          grid-template-columns: 50% auto;
          padding: 0.5rem 1rem;
        }

        td:first-child {
          padding-top: 2rem;
        }

        td:last-child {
          padding-bottom: 2rem;
        }

        td::before {
          content: attr(data-cell) ': ';
          font-weight: 700;
          text-transform: capitalize;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxResponsiveTableComponent {
  @Input() data: unknown[] = [];

  @Input() caption = '';

  @ContentChild('headers') headers!: TemplateRef<unknown>;
  @ContentChild('rows') rows!: TemplateRef<unknown>;
}
