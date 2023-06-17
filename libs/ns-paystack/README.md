# ns-paystack

The wrapper provides a convenient way to integrate Paystack payment functionality into your NestJS applications.

## Installation

```shell
npm install @devtools-bp/ns-paystack
```

or

```shell
yarn add @devtools-bp/ns-paystack
```

## Configuration

To use the ns-paystack, you need to provide your Paystack API key. You can obtain the API key from the Paystack
dashboard. Once you have the API key, you can configure the wrapper in your NestJS application.

#### In App Module

```typescript
import { Module } from '@nestjs/common';

import { NsPaystackModule } from '@devtools-bp/ns-paystack';

@Module({
  imports: [
    NsPaystackModule.register({
      secretKey: 'PAYSTACK_SECRET_KEY'
    })
  ]
})
export class AppModule {}
```

### Or use async registration to access environment variables

#### In App Module

```typescript
import { Module } from '@nestjs/common';

import { NsPaystackModule } from '@devtools-bp/ns-paystack';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    NsPaystackModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secretKey: configService.get('PAYSTACK_SECRET_KEY')
      }),
      inject: [ConfigService]
    })
  ]
})
export class AppModule {}
```

### Usage

#### In Service

```typescript
import { Injectable } from '@nestjs/common';
import {
  PsTransactionsService,
  PsInitializeTransactionRequestModel,
  PsInitializeTransactionResponseModel
} from '@devtools-bp/ns-paystack';

@Injectable()
export class TransactionsService {
  constructor(private readonly psTransactionsService: PsTransactionsService) {}

  initializeTransaction(
    payload: PsInitializeTransactionRequestModel
  ): Promise<PsInitializeTransactionResponseModel> {
    return this.psTransactionsService.initializeTransaction(payload);
  }
}
```

#### In Controller

```typescript
import { Body, Controller, Post } from '@nestjs/common';
import {
  PsInitializeTransactionRequestModel,
  PsInitializeTransactionResponseModel
} from '@devtools-bp/ns-paystack';
import { TransactionsService } from '../services/transactions.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('initialize')
  initialize(
    @Body() payload: PsInitializeTransactionRequestModel
  ): Promise<PsInitializeTransactionResponseModel> {
    return this.transactionsService.initializeTransaction(payload);
  }
}
```

### API ENDPOINTS

- [x] **Transactions** <span style="color:green;">&#x2714;</span>
  - [x] Initialize Transaction <span style="color:green;">&#x2714;</span>
  - [x] Verify Transaction <span style="color:green;">&#x2714;</span>
  - [x] List Transaction <span style="color:green;">&#x2714;</span>
  - [x] Fetch Transaction <span style="color:green;">&#x2714;</span>
  - [x] Charge Transaction <span style="color:green;">&#x2714;</span>
  - [x] View Transaction Timeline <span style="color:green;">&#x2714;</span>
  - [x] Transaction Totals <span style="color:green;">&#x2714;</span>
  - [x] Export Transaction <span style="color:green;">&#x2714;</span>
  - [x] Partial Debit <span style="color:green;">&#x2714;</span>
- [ ] **Transaction Splits** &#x23F3;
  - [x] Create Split <span style="color:green;">&#x2714;</span>
  - [ ] List Split &#x23F3;
  - [ ] Fetch Split &#x23F3;
  - [ ] Update Split &#x23F3;
  - [ ] Add/Update Subaccount Split &#x23F3;
  - [ ] Remove Subaccount from Split &#x23F3;
- [ ] **Terminal**
- [ ] **Customers**
- [ ] **Dedicated Virtual Accounts**
- [ ] **Apple Pay**
- [ ] **Subaccounts**
- [ ] **Plans**
- [ ] **Subscriptions**
- [ ] **Products**
- [ ] **Payment Pages**
- [ ] **Payment Requests**
- [ ] **Settlements**
- [ ] **Transaction Recipients**
- [ ] **Transfers**
- [ ] **Transfers Control**
- [ ] **Bulk Charges**
- [ ] **Integration**
- [ ] **Charge**
- [ ] **Disputes**
- [ ] **Refunds**
- [ ] **Verification**
- [ ] **Miscellaneous**

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a
pull request on the GitHub repository. [Learn how to contribute to the project.](https://github.com/firstcontributions/first-contributions)

## License

The devtools-bp monorepo is released under
the [MIT License](https://github.com/brianpooe/devtools-bp/blob/main/LICENSE). Please make sure you understand its
terms and conditions when using the libraries and tools provided in this repository.

## Authors

- [Brian Pooe](https://github.com/brianpooe)
