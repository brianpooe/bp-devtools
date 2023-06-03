import { Test, TestingModule } from '@nestjs/testing';
import { PsTransactionsService } from './ps-transactions.service';
import { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } from '../../helpers';
import { HttpModule } from '@nestjs/axios';

describe(PsTransactionsService.name, () => {
    let service: PsTransactionsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            providers: [
                PsTransactionsService,
                {
                    provide: MODULE_OPTIONS_TOKEN,
                    useClass: ConfigurableModuleClass
                }
            ]
        }).compile();

        service = module.get<PsTransactionsService>(PsTransactionsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
