import { Module } from '@nestjs/common';

import { NsPaystackModule } from '@devtools-bp/ns-paystack';
import { ConfigService } from '@nestjs/config';
import { TransactionsService } from './transactions/services/transactions.service';
import { TransactionController } from './transactions/controllers/transaction.controller';
import { TransactionSplitService } from './transaction-split/services/transaction-split.service';
import { TransactionSplitController } from './transaction-split/controller/transaction-split/transaction-split.controller';

@Module({
  imports: [
    NsPaystackModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secretKey: configService.get('PAYSTACK_SECRET_KEY')
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [TransactionController, TransactionSplitController],
  providers: [TransactionsService, TransactionSplitService, ConfigService]
})
export class AppModule {}
