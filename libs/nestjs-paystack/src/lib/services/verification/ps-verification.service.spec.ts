import { PsVerificationService } from '../verification/ps-verification.service';
import { CustomHttpService } from '../custom-http/custom-http.service';
import { TestBed } from '@automock/jest';
import {
  PsResolveAccountRequestModel,
  PsResolveAccountResponseModel
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
});
