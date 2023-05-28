import { Test, TestingModule } from '@nestjs/testing';
import { PsTransactionsService } from './ps-transactions.service';

describe('NsPaystackService', () => {
    let service: PsTransactionsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PsTransactionsService]
        }).compile();

        service = module.get<PsTransactionsService>(PsTransactionsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
