import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';
import { NsPaystackModule } from '@devtools-bp/ns-paystack';
import { ConfigService } from '@nestjs/config';

describe(TransactionsService.name, () => {
    let service: TransactionsService;

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
                })
            ],
            providers: [TransactionsService]
        }).compile();

        service = module.get<TransactionsService>(TransactionsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
