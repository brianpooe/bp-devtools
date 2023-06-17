import { TransactionsService } from './transactions.service';
import { PsTransactionsService } from '@devtools-bp/ns-paystack';
import { TestBed } from '@automock/jest';

describe(TransactionsService.name, () => {
  let service: TransactionsService;
  let transactionService: jest.Mocked<PsTransactionsService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(TransactionsService)
      .mock(PsTransactionsService)
      .using({
        initializeTransaction: jest.fn()
      })
      .compile();

    service = unit;
    transactionService = unitRef.get(PsTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
