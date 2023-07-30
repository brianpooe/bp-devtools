import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'ngx-responsive-table',
  standalone: true,
  template: `
    <table #table>
      <caption #caption>
        The last 14 world F1 champions
      </caption>

      <thead>
        <tr>
          <th>Name</th>
          <th>Poles</th>
          <th>Podiums</th>
          <th>Wins</th>
          <th>Career points</th>
          <th>Championships</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td data-cell="name">Max Verstappen</td>
          <td data-cell="poles">22</td>
          <td data-cell="podiums">80</td>
          <td data-cell="wins">37</td>
          <td data-cell="career">2080.5</td>
          <td data-cell="championships">2</td>
        </tr>

        <tr>
          <td data-cell="name">Brian Pooe</td>
          <td data-cell="poles">12</td>
          <td data-cell="podiums">1</td>
          <td data-cell="wins">333</td>
          <td data-cell="career">2080.5</td>
          <td data-cell="championships">2</td>
        </tr>
        <tr>
          <td data-cell="name">Tim Wallace</td>
          <td data-cell="poles">46</td>
          <td data-cell="podiums">32</td>
          <td data-cell="wins">67</td>
          <td data-cell="career">5.5</td>
          <td data-cell="championships">2</td>
        </tr>
        <tr>
          <td data-cell="name">Greg Beast</td>
          <td data-cell="poles">45</td>
          <td data-cell="podiums">99</td>
          <td data-cell="wins">37</td>
          <td data-cell="career">699.5</td>
          <td data-cell="championships">1</td>
        </tr>
        <tr>
          <td data-cell="name">Tom Holland</td>
          <td data-cell="poles">4</td>
          <td data-cell="podiums">44</td>
          <td data-cell="wins">98</td>
          <td data-cell="career">7666.5</td>
          <td data-cell="championships">3</td>
        </tr>
      </tbody>
    </table>
  `,
  imports: [],
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
export class NgxResponsiveTableComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.setTableRoles('table');
    this.setTableRoles('caption');
    this.setTableRoles('thead, tbody, tfoot', 'rowgroup');
    this.setTableRoles('tr', 'row');
    this.setTableRoles('td', 'cell');
    this.setTableRoles('th', 'columnheader');
    this.setTableRoles('th[scope=row]', 'rowheader');
  }

  private setTableRoles(selector: string, role?: string): void {
    const elements = this.elementRef.nativeElement.querySelectorAll(selector);
    elements.forEach((element: HTMLElement) => {
      this.renderer.setAttribute(element, 'role', role ?? selector);
    });
  }
}
