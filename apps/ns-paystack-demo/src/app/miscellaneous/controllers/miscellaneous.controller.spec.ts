import { MiscellaneousController } from './miscellaneous.controller';
import { MiscellaneousService } from '../services/miscellaneous.service';
import { TestBed } from '@automock/jest';

describe(MiscellaneousController.name, () => {
  let controller: MiscellaneousController;
  let miscellaneousService: jest.Mocked<MiscellaneousService>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(MiscellaneousController)
      .mock(MiscellaneousService)
      .using({
        listBanks: jest.fn()
      })
      .compile();

    controller = unit;
    miscellaneousService = unitRef.get(MiscellaneousService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
