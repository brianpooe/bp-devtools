import { MiscellaneousService } from './miscellaneous.service';
import { PsMiscellaneousService } from '@devtools-bp/nestjs-paystack';
import { TestBed } from '@automock/jest';

describe(MiscellaneousService.name, () => {
  let service: MiscellaneousService;
  let miscellaneous: jest.Mocked<PsMiscellaneousService>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(MiscellaneousService)
      .mock(PsMiscellaneousService)
      .using({
        listBanks: jest.fn()
      })
      .compile();

    service = unit;
    miscellaneous = unitRef.get(PsMiscellaneousService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
