import { Module } from '@nestjs/common';

import { NsPaystackModule } from '@bp-devtools/ns-paystack';
import { ConfigService } from '@nestjs/config';
import { TransactionService } from './transactions/services/transaction.service';
import { TransactionController } from './transactions/controllers/transaction.controller';

@Module({
    imports: [
        NsPaystackModule.registerAsync({
            useFactory: (configService: ConfigService) => {
                return {
                    secretKey: configService.get('PAYSTACK_SECRET_KEY'),
                };
            },
            inject: [ConfigService],
        }),
    ],
    controllers: [TransactionController],
    providers: [TransactionService, ConfigService],
})
export class AppModule {}
