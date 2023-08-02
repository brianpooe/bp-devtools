import { Component, inject } from '@angular/core';
import { NgxResponsiveTableComponent } from '@devtools-bp/ngx-responsive-table';
import { UserService } from './user.service';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgxResponsiveTableComponent, AsyncPipe, NgOptimizedImage],
  selector: 'root',
  template: `
    <div class="wrapper">
      <ngx-responsive-table
        [data]="(user$ | async)!"
        caption="default table format"
      />
      <br />
      <ngx-responsive-table [data]="(user$ | async)!" caption="Custom Headers">
        <ng-template #headers>
          <th>Avatar</th>
          <th>Email</th>
          <th>First Name</th>
          <th>ID</th>
          <th>Last Name</th>
        </ng-template>
      </ngx-responsive-table>
      <br />
      <ngx-responsive-table [data]="(user$ | async)!" caption="Custom cell">
        <ng-template #rows let-row>
          <td data-cell="avatar">
            <img
              [ngSrc]="row.avatar"
              alt="Avatar"
              class="avatar"
              width="50"
              height="50"
            />
          </td>
          <td data-cell="email">{{ row.email }}</td>
          <td data-cell="first_name">{{ row.first_name }}</td>
          <td data-cell="id">{{ row.id }}</td>
          <td data-cell="last_name">{{ row.last_name }}</td>
        </ng-template>
      </ngx-responsive-table>
    </div>
  `,
  styles: [
    `
      .wrapper {
        width: min(900px, 100% - 3rem);
        margin-inline: auto;
      }

      .avatar {
        vertical-align: middle;
        border-radius: 50%;
      }

      @media (max-width: 650px) {
        .avatar {
          vertical-align: center;
        }
      }
    `
  ]
})
export class AppComponent {
  user$ = inject(UserService).users$;
}
