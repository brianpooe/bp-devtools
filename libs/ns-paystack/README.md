# ns-paystack

The wrapper provides a convenient way to integrate Paystack payment functionality into your NestJS applications.

## Installation

```shell
npm install @bp-devtools/ns-paystack
```

or

```shell
yarn add @bp-devtools/ns-paystack
```

## Configuration

To use the ns-paystack, you need to provide your Paystack API key. You can obtain the API key from the Paystack
dashboard. Once you have the API key, you can configure the wrapper in your NestJS application.

```typescript
import { Module } from '@nestjs/common';

import { NsPaystackModule } from '@bp-devtools/ns-paystack';
import { ConfigService } from '@nestjs/config';
import { TransactionsService } from './transactions/services/transactions.service';
import { TransactionController } from './transactions/controllers/transaction.controller';

@Module({
  imports: [
    NsPaystackModule.register({
      secretKey: 'PAYSTACK_SECRET_KEY'
    })
  ],
})
export class AppModule {
}
```

### Using async registration to access environment variables

```typescript
import { Module } from '@nestjs/common';

import { NsPaystackModule } from '@bp-devtools/ns-paystack';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    NsPaystackModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          secretKey: configService.get('PAYSTACK_SECRET_KEY')
        };
      },
      inject: [ConfigService]
    })
  ]
})
export class AppModule {
}
```

### Usage

#### In Service

```typescript
import { Injectable } from '@nestjs/common';
import {
  PsTransactionsService,
  PsInitializeTransactionRequestModel,
  PsInitializeTransactionResponseModel,
} from '@bp-devtools/ns-paystack';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly psTransactionsService: PsTransactionsService
  ) {
  }

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
  PsFetchTransactionResponseModel,
  PsInitializeTransactionRequestModel,
  PsInitializeTransactionResponseModel,
} from '@bp-devtools/ns-paystack';
import { TransactionsService } from '../services/transactions.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionsService: TransactionsService) {
  }

  @Post('initialize')
  initialize(
    @Body() payload: PsInitializeTransactionRequestModel
  ): Promise<PsInitializeTransactionResponseModel> {
    return this.transactionsService.initializeTransaction(payload);
  }
}
```

### API ENDPOINTS

- [ ] __Transactions__ &#x23F3;
  - [X] Initialize Transaction <span style="color:green;">&#x2714;</span>
  - [X] Verify Transaction <span style="color:green;">&#x2714;</span>
  - [X] List Transaction <span style="color:green;">&#x2714;</span>
  - [X] Fetch Transaction <span style="color:green;">&#x2714;</span>
  - [X] Charge Transaction <span style="color:green;">&#x2714;</span>
  - [X] View Transaction Timeline <span style="color:green;">&#x2714;</span>
  - [ ] Transaction Totals &#x23F3;
  - [ ] Export Transaction &#x23F3;
  - [ ] Partial Debit &#x23F3;
- [ ] __Transaction Splits__
- [ ] __Terminal__
- [ ] __Customers__
- [ ] __Dedicated Virtual Accounts__
- [ ] __Apple Pay__
- [ ] __Subaccounts__
- [ ] __Plans__
- [ ] __Subscriptions__
- [ ] __Products__
- [ ] __Payment Pages__
- [ ] __Payment Requests__
- [ ] __Settlements__
- [ ] __Transaction Recipients__
- [ ] __Transfers__
- [ ] __Transfers Control__
- [ ] __Bulk Charges__
- [ ] __Integration__
- [ ] __Charge__
- [ ] __Disputes__
- [ ] __Refunds__
- [ ] __Verification__
- [ ] __Miscellaneous__

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a
pull request on the GitHub repository.

## License

The bp-devtools monorepo is released under
the [MIT License](https://github.com/brianpooe/bp-devtools/blob/main/LICENSE). Please make sure you understand its
terms and conditions when using the libraries and tools provided in this repository.
