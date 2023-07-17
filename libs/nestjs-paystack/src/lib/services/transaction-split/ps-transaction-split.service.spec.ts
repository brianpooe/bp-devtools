import { PsTransactionSplitService } from '../';
import { CustomHttpService } from '../custom-http/custom-http.service';
import { TestBed } from '@automock/jest';
import {
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel,
  PsListSplitRequestModel,
  PsListSplitResponseModel,
  PsUpdateSplitRequestModel,
  PsUpsertSubaccountSplitRequestModel,
  PsUpsertSubaccountSplitResponseDataModel,
  PsUpsertSubaccountSplitResponseModel
} from '../../models';
import { of } from 'rxjs';
import { AxiosResponse } from 'axios';
import { fromPartial } from '@total-typescript/shoehorn';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import {
  PsUpdateSplitResponseModel,
  PsFetchSplitResponseModel
} from '../../models';

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
    it('should return created split', () => {
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

  describe('listSplit', () => {
    it('should return list of transaction splits available', () => {
      // Arrange
      const input: PsListSplitRequestModel = fromPartial({
        name: 'Test Doc',
        active: true
      });
      const response: AxiosResponse<PsListSplitResponseModel> = fromPartial({
        data: fromPartial({
          status: true,
          message: 'Split retrieved',
          data: [
            {
              id: 143,
              name: 'Test Doc',
              split_code: 'SPL_UO2vBzEqHW',
              integration: 428626,
              domain: 'test',
              type: 'percentage',
              active: 1,
              currency: 'NGN',
              bearer_type: 'subaccount',
              bearer_subaccount: 40809,
              created_at: '2020-06-30T11:52:24.000Z',
              updated_at: '2020-06-30T11:52:24.000Z',
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
                    percentage_charge: 80,
                    settlement_bank: 'Business Bank',
                    account_number: '1234567890'
                  },
                  share: 30
                },
                {
                  subaccount: {
                    id: 40811,
                    subaccount_code: 'ACCT_pwwualwty4nhq9d',
                    business_name: 'Business Name',
                    description: 'Business Description',
                    primary_contact_name: null,
                    primary_contact_email: null,
                    primary_contact_phone: null,
                    metadata: null,
                    percentage_charge: 80,
                    settlement_bank: 'Business Bank',
                    account_number: '0123456789'
                  },
                  share: 20
                }
              ],
              total_subaccounts: 2
            }
          ]
        })
      });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.listSplit(input));

      // Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('fetchSplit', () => {
    it('should return details of a split transaction', () => {
      // Arrange
      const input = 'SPL_UO2vBzEqHW';
      const response: AxiosResponse<PsFetchSplitResponseModel> = fromPartial({
        data: fromPartial({
          status: true,
          message: 'Split retrieved',
          data: {
            id: 143,
            name: 'Test Doc',
            split_code: 'SPL_UO2vBzEqHW',
            integration: 428626,
            domain: 'test',
            type: 'percentage',
            active: 1,
            currency: 'NGN',
            bearer_type: 'subaccount',
            bearer_subaccount: 40809,
            created_at: '2020-06-30T11:52:24.000Z',
            updated_at: '2020-06-30T11:52:24.000Z',
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
                  percentage_charge: 80,
                  settlement_bank: 'Business Bank',
                  account_number: '1234567890'
                },
                share: 30
              },
              {
                subaccount: {
                  id: 40811,
                  subaccount_code: 'ACCT_pwwualwty4nhq9d',
                  business_name: 'Business Name',
                  description: 'Business Description',
                  primary_contact_name: null,
                  primary_contact_email: null,
                  primary_contact_phone: null,
                  metadata: null,
                  percentage_charge: 80,
                  settlement_bank: 'Business Bank',
                  account_number: '0123456789'
                },
                share: 20
              }
            ],
            total_subaccounts: 2
          }
        })
      });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.fetchSplit(input));

      // Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('updateSplit', () => {
    it('should return updated split by id', () => {
      // Arrange
      const input: PsUpdateSplitRequestModel = {
        name: 'update Split',
        active: true
      };
      const id = '143';

      const response: AxiosResponse<PsUpdateSplitResponseModel> = fromPartial({
        data: fromPartial({
          status: true,
          message: 'Split group updated',
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
      httpService.put.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.updateSplit(id, input));

      // Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('upsertSubaccountSplit', () => {
    it('should return updated or added split by id', () => {
      // Arrange
      const input: PsUpsertSubaccountSplitRequestModel = {
        subaccount: 'ACCT_hdl8abxl8drhrl3',
        share: 40000
      };
      const id = '143';

      const response: AxiosResponse<PsUpsertSubaccountSplitResponseModel> =
        fromPartial({
          data: fromPartial({
            status: true,
            message: 'Subaccount added',
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
      const observerSpy = subscribeSpyTo(
        service.upsertSubaccountSplit(id, input)
      );

      // Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });
});
