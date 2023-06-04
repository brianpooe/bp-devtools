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
    ]
})
export class AppModule {}
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
} from '@bp-devtools/ns-paystack';

@Injectable()
export class TransactionsService {
    constructor(
        private readonly psTransactionsService: PsTransactionsService
    ) {}

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
    PsInitializeTransactionResponseModel
} from '@bp-devtools/ns-paystack';
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

-   [x] **Transactions** <span style="color:green;">&#x2714;</span>
    -   [x] Initialize Transaction <span style="color:green;">&#x2714;</span>
    -   [x] Verify Transaction <span style="color:green;">&#x2714;</span>
    -   [x] List Transaction <span style="color:green;">&#x2714;</span>
    -   [x] Fetch Transaction <span style="color:green;">&#x2714;</span>
    -   [x] Charge Transaction <span style="color:green;">&#x2714;</span>
    -   [x] View Transaction Timeline <span style="color:green;">&#x2714;</span>
    -   [x] Transaction Totals <span style="color:green;">&#x2714;</span>
    -   [x] Export Transaction <span style="color:green;">&#x2714;</span>
    -   [x] Partial Debit <span style="color:green;">&#x2714;</span>
-   [ ] **Transaction Splits** &#x23F3;
    -   [ ] Create Split &#x23F3;
    -   [ ] List Split &#x23F3;
    -   [ ] Fetch Split &#x23F3;
    -   [ ] Update Split &#x23F3;
    -   [ ] Add/Update Subaccount Split &#x23F3;
    -   [ ] Remove Subaccount from Split &#x23F3;
-   [ ] **Terminal**
-   [ ] **Customers**
-   [ ] **Dedicated Virtual Accounts**
-   [ ] **Apple Pay**
-   [ ] **Subaccounts**
-   [ ] **Plans**
-   [ ] **Subscriptions**
-   [ ] **Products**
-   [ ] **Payment Pages**
-   [ ] **Payment Requests**
-   [ ] **Settlements**
-   [ ] **Transaction Recipients**
-   [ ] **Transfers**
-   [ ] **Transfers Control**
-   [ ] **Bulk Charges**
-   [ ] **Integration**
-   [ ] **Charge**
-   [ ] **Disputes**
-   [ ] **Refunds**
-   [ ] **Verification**
-   [ ] **Miscellaneous**

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a
pull request on the GitHub repository.

## License

The bp-devtools monorepo is released under
the [MIT License](https://github.com/brianpooe/bp-devtools/blob/main/LICENSE). Please make sure you understand its
terms and conditions when using the libraries and tools provided in this repository.

## Authors

-   [Brian Pooe](https://github.com/brianpooe)
