import { PsVerificationService } from '../verification/ps-verification.service';
import { CustomHttpService } from '../custom-http/custom-http.service';
import { TestBed } from '@automock/jest';
import {
  PsResolveAccountRequestModel,
  PsResolveAccountResponseModel,
  PsValidateAccountRequestModel,
  PsValidateAccountResponseModel
} from '../../models';
import { AxiosResponse } from 'axios';
import { fromPartial } from '@total-typescript/shoehorn';
import { of } from 'rxjs';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

describe(PsVerificationService.name, function () {
  let service: PsVerificationService;
  let httpService: jest.Mocked<CustomHttpService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(PsVerificationService)
      .mock(CustomHttpService)
      .using({
        post: jest.fn(),
        get: jest.fn()
      })
      .compile();

    service = unit;

    httpService = unitRef.get(CustomHttpService);
  });

  describe('resolveAccount', () => {
    it('should return customer belonging to the account', () => {
      // Arrange
      const input: PsResolveAccountRequestModel = {
        account_number: '0022728151',
        bank_code: '063'
      };
      const response: AxiosResponse<PsResolveAccountResponseModel> =
        fromPartial({
          data: fromPartial({
            status: true,
            message: 'Account number resolved',
            data: {
              account_number: '0022728151',
              account_name: 'WES GIBBONS'
            }
          })
        });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.resolveAccount(input));

      // Act
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('validateAccount', () => {
    it('should confirm the authenticity of of a customers account number', () => {
      // Arrange
      const input: PsValidateAccountRequestModel = {
        bank_code: '632005',
        country_code: 'ZA',
        account_number: '0123456789',
        account_name: 'Ann Bron',
        account_type: 'personal',
        document_type: 'identityNumber',
        document_number: '1234567890123'
      };
      const response: AxiosResponse<PsValidateAccountResponseModel> =
        fromPartial({
          data: fromPartial({
            status: true,
            message: 'Personal Account Verification attempted',
            data: {
              verified: true,
              verificationMessage: 'Account is verified successfully'
            }
          })
        });
      httpService.post.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.validateAccount(input));

      // Act
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });
});
