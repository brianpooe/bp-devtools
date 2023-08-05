# ngx-responsive-table

An Angular library offering customizable and responsive tables for seamless user experience on all devices.
Its flexibility allows users to design tables that fit their project needs with an intuitive API and dynamic data handling.
Elevate your Angular applications with this powerful table solution.

## Installation

```shell
npm install @devtools-bp/ngx-responsive-table
```

or

```shell
yarn add @devtools-bp/ngx-responsive-table
```

## Configuration

To use the ngx-responsive-table you need to import styles from the package itself.

```scss
@import 'node_modules/ngx-responsive-table/assets/styles/default';
```

### Usage

#### In Component

```typescript
import { Component, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

import { UserService } from './user.service';
import { NgxResponsiveTableComponent } from '@devtools-bp/ngx-responsive-table';

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
```

#### In HTML

##### Default Table

```html
<ngx-responsive-table [data]="user$ | async" caption="default table" />
```

##### Custom Header Labels

It is important to note with custom headers you need to add <strong>#headers</strong> to your template.

```html
<ngx-responsive-table [data]="user$ | async" caption="Custom Header Labels">
  <ng-template #headers>
    <th>Avatar</th>
    <th>Email</th>
    <th>First Name</th>
    <th>ID</th>
    <th>Last Name</th>
  </ng-template>
</ngx-responsive-table>
```

##### Custom Cells

It is important to note that with custom cells you will need to add data-cell attribute to each custom cell (<em>table td element</em>) and the <strong>#rows</strong> with <strong>let-row</strong> to access the table data.

```html
<ngx-responsive-table [data]="user$ | async" caption="Custom Cells">
  <ng-template #headers>
    <th>Avatar</th>
    <th>Email</th>
    <th>First Name</th>
    <th>ID</th>
    <th>Last Name</th>
    <th>Actions</th>
  </ng-template>
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
    <td data-cell="actions" id="actions">
      <button data-cell="edit">Edit</button>
      <button data-cell="delete">Delete</button>
    </td>
  </ng-template>
</ngx-responsive-table>
```

#### Styles

```scss
.avatar {
  vertical-align: middle;
  border-radius: 50%;
}

button {
  padding: 8px 12px;
  border: none;
  background-color: #995b00;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  margin: 0.5rem;
}

button:hover {
  background-color: #ff9800;
}

@media (max-width: 650px) {
  .avatar {
    vertical-align: center;
  }

  #actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0.5rem;
  }

  #actions:before {
    content: '';
  }
}
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a
pull request on the GitHub
repository. [Learn how to contribute to the project.](https://github.com/firstcontributions/first-contributions)

## License

The devtools-bp monorepo is released under
the [MIT License](https://github.com/brianpooe/devtools-bp/blob/main/LICENSE). Please make sure you understand its
terms and conditions when using the libraries and tools provided in this repository.

## Authors

- [Brian Pooe](https://github.com/brianpooe)
