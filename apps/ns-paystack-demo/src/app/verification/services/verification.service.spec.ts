import { VerificationService } from './verification.service';
import { PsVerificationService } from '@devtools-bp/nestjs-paystack';
import { TestBed } from '@automock/jest';

describe(VerificationService.name, () => {
  let service: VerificationService;
  let verificationService: jest.Mocked<PsVerificationService>;

  beforeEach(async () => {
    const { unit, unitRef } = TestBed.create(VerificationService)
      .mock(PsVerificationService)
      .using({
        resolveAccount: jest.fn()
      })
      .compile();

    service = unit;
    verificationService = unitRef.get(PsVerificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
