import { VerificationController } from './verification.controller';
import { TestBed } from '@automock/jest';
import { VerificationService } from '../services/verification.service';

describe(VerificationController.name, () => {
  let controller: VerificationController;
  let verificationService: jest.Mocked<VerificationService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(VerificationController)
      .mock(VerificationService)
      .using({
        resolveAccount: jest.fn()
      })
      .compile();

    controller = unit;
    verificationService = unitRef.get(VerificationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
