import { TransactionSplitController } from './transaction-split.controller';
import { TestBed } from '@automock/jest';
import { TransactionSplitService } from '../../services/transaction-split.service';

describe('TransactionSplitController', () => {
  let controller: TransactionSplitController;
  let transactionSplitService: jest.Mocked<TransactionSplitService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(TransactionSplitController)
      .mock(TransactionSplitService)
      .using({
        createSplit: jest.fn()
      })
      .compile();

    controller = unit;
    transactionSplitService = unitRef.get(TransactionSplitService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
