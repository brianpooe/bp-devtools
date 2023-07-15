import { TransactionSplitService } from './transaction-split.service';
import { TestBed } from '@automock/jest';
import { PsTransactionSplitService } from '@devtools-bp/nestjs-paystack';

describe('TransactionSplitService', () => {
  let service: TransactionSplitService;
  let transactionSplitService: jest.Mocked<PsTransactionSplitService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(TransactionSplitService)
      .mock(PsTransactionSplitService)
      .using({
        createSplit: jest.fn()
      })
      .compile();

    service = unit;
    transactionSplitService = unitRef.get(PsTransactionSplitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
