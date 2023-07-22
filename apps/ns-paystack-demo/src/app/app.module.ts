import { Module } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { MiscellaneousController } from './miscellaneous/controllers/miscellaneous.controller';
import { MiscellaneousService } from './miscellaneous/services/miscellaneous.service';
import { NsPaystackModule } from '@devtools-bp/nestjs-paystack';
import { TransactionController } from './transactions/controllers/transaction.controller';
import { TransactionSplitController } from './transaction-split/controller/transaction-split/transaction-split.controller';
import { TransactionSplitService } from './transaction-split/services/transaction-split.service';
import { TransactionsService } from './transactions/services/transactions.service';
import { VerificationController } from './verification/controllers/verification.controller';
import { VerificationService } from './verification/services/verification.service';

@Module({
  imports: [
    NsPaystackModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secretKey: configService.get('PAYSTACK_SECRET_KEY')
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [
    TransactionController,
    TransactionSplitController,
    VerificationController,
    MiscellaneousController
  ],
  providers: [
    TransactionsService,
    TransactionSplitService,
    ConfigService,
    VerificationService,
    MiscellaneousService
  ]
})
export class AppModule {}
