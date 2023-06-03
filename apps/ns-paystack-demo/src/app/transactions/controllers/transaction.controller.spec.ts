import { Test, TestingModule } from '@nestjs/testing';
import { TransactionController } from './transaction.controller';
import { TransactionsService } from '../services/transactions.service';
import {
    ConfigurableModuleClass,
    MODULE_OPTIONS_TOKEN,
    NsPaystackModule,
    PsTransactionsService
} from '@bp-devtools/ns-paystack';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

describe(TransactionController.name, () => {
    let controller: TransactionController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                NsPaystackModule.registerAsync({
                    useFactory: (configService: ConfigService) => {
                        return {
                            secretKey: configService.get('PAYSTACK_SECRET_KEY')
                        };
                    },
                    inject: [ConfigService]
                }),
                HttpModule
            ],
            controllers: [TransactionController],
            providers: [
                TransactionsService,
                PsTransactionsService,
                {
                    provide: MODULE_OPTIONS_TOKEN,
                    useClass: ConfigurableModuleClass
                }
            ]
        }).compile();

        controller = module.get<TransactionController>(TransactionController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
