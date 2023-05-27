import { Test, TestingModule } from '@nestjs/testing';
import { NsPaystackService } from './ns-paystack.service';

describe('NsPaystackService', () => {
    let service: NsPaystackService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [NsPaystackService]
        }).compile();

        service = module.get<NsPaystackService>(NsPaystackService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
