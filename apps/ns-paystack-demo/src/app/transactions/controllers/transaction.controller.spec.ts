import { TransactionController } from './transaction.controller';
import { TransactionsService } from '../services/transactions.service';
import { TestBed } from '@automock/jest';

describe(TransactionController.name, () => {
  let controller: TransactionController;
  let transactionService: jest.Mocked<TransactionsService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(TransactionController)
      .mock(TransactionsService)
      .using({
        initializeTransaction: jest.fn()
      })
      .compile();

    controller = unit;
    transactionService = unitRef.get(TransactionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
