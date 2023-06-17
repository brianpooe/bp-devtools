import { TransactionSplitService } from './transaction-split.service';
import { CustomHttpService } from '../custom-http/custom-http.service';
import { TestBed } from '@automock/jest';

describe(TransactionSplitService.name, () => {
  let service: TransactionSplitService;
  let httpService: jest.Mocked<CustomHttpService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(TransactionSplitService)
      .mock(CustomHttpService)
      .using({
        post: jest.fn(),
        get: jest.fn()
      })
      .compile();

    service = unit;

    httpService = unitRef.get(CustomHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
