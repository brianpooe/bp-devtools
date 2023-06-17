import { Module } from '@nestjs/common';

import { NsPaystackModule } from '@devtools-bp/ns-paystack';
import { ConfigService } from '@nestjs/config';
import { TransactionsService } from './transactions/services/transactions.service';
import { TransactionController } from './transactions/controllers/transaction.controller';

@Module({
  imports: [
    NsPaystackModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secretKey: configService.get('PAYSTACK_SECRET_KEY')
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [TransactionController],
  providers: [TransactionsService, ConfigService]
})
export class AppModule {}
