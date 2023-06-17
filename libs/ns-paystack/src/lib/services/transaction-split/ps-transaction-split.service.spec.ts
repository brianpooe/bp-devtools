import { PsTransactionSplitService } from './ps-transaction-split.service';
import { CustomHttpService } from '../custom-http/custom-http.service';
import { TestBed } from '@automock/jest';
import {
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel
} from '../../models';
import { of } from 'rxjs';
import { AxiosResponse } from 'axios';
import { fromPartial } from '@total-typescript/shoehorn';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

describe(PsTransactionSplitService.name, () => {
  let service: PsTransactionSplitService;
  let httpService: jest.Mocked<CustomHttpService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(PsTransactionSplitService)
      .mock(CustomHttpService)
      .using({
        post: jest.fn(),
        get: jest.fn()
      })
      .compile();

    service = unit;

    httpService = unitRef.get(CustomHttpService);
  });

  describe('createSplit', () => {
    it('should return return created split', () => {
      // Arrange
      const input: PsCreateSplitRequestModel = {
        name: 'Percentage Split',
        type: 'percentage',
        currency: 'NGN',
        subaccounts: [
          {
            subaccount: 'ACCT_z3x6z3nbo14xsil',
            share: 20
          },
          {
            subaccount: 'ACCT_pwwualwty4nhq9d',
            share: 30
          }
        ],
        bearer_type: 'subaccount',
        bearer_subaccount: 'ACCT_hdl8abxl8drhrl3'
      };
      const response: AxiosResponse<PsCreateSplitResponseModel> = fromPartial({
        data: fromPartial({
          status: true,
          message: 'Split created',
          data: {
            id: 142,
            name: 'Test Doc',
            type: 'percentage',
            currency: 'NGN',
            integration: 428626,
            domain: 'test',
            split_code: 'SPL_e7jnRLtzla',
            active: true,
            bearer_type: 'subaccount',
            bearer_subaccount: 40809,
            createdAt: '2020-06-30T11:42:29.150Z',
            updatedAt: '2020-06-30T11:42:29.150Z',
            subaccounts: [
              {
                subaccount: {
                  id: 40809,
                  subaccount_code: 'ACCT_z3x6z3nbo14xsil',
                  business_name: 'Business Name',
                  description: 'Business Description',
                  primary_contact_name: null,
                  primary_contact_email: null,
                  primary_contact_phone: null,
                  metadata: null,
                  percentage_charge: 20,
                  settlement_bank: 'Business Bank',
                  account_number: '1234567890'
                },
                share: 20
              },
              {
                subaccount: {
                  id: 40809,
                  subaccount_code: 'ACCT_pwwualwty4nhq9d',
                  business_name: 'Business Name',
                  description: 'Business Description',
                  primary_contact_name: null,
                  primary_contact_email: null,
                  primary_contact_phone: null,
                  metadata: null,
                  percentage_charge: 20,
                  settlement_bank: 'Business Bank',
                  account_number: '0123456789'
                },
                share: 30
              }
            ],
            total_subaccounts: 2
          }
        })
      });
      httpService.post.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.createSplit(input));

      // Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });
});
