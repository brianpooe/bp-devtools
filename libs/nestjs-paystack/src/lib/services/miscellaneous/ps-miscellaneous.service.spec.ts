import { PsMiscellaneousService } from './ps-miscellaneous.service';
import { CustomHttpService } from '../custom-http/custom-http.service';
import { TestBed } from '@automock/jest';
import {
  PsListBanksRequestModel,
  PsListBanksResponseModel,
  PsListStatesResponseModel,
  PsListCountriesResponseModel
} from '../../models';
import { AxiosResponse } from 'axios';
import { fromPartial } from '@total-typescript/shoehorn';
import { of } from 'rxjs';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

describe('MiscellaneousService', () => {
  let service: PsMiscellaneousService;
  let httpService: jest.Mocked<CustomHttpService>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(PsMiscellaneousService)
      .mock(CustomHttpService)
      .using({
        post: jest.fn(),
        get: jest.fn()
      })
      .compile();

    service = unit;

    httpService = unitRef.get(CustomHttpService);
  });

  describe('listBanks', () => {
    it('should get a list of all supported banks and their properties', () => {
      // Arrange
      const input: PsListBanksRequestModel = {
        country: 'ghana',
        use_cursor: true,
        perPage: 5
      };
      const response: AxiosResponse<PsListBanksResponseModel> = fromPartial({
        data: fromPartial({
          status: true,
          message: 'Banks retrieved',
          data: [
            {
              name: 'Abbey Mortgage Bank',
              slug: 'abbey-mortgage-bank',
              code: '801',
              longcode: '',
              gateway: null,
              pay_with_bank: false,
              active: true,
              is_deleted: false,
              country: 'Nigeria',
              currency: 'NGN',
              type: 'nuban',
              id: 174,
              createdAt: '2020-12-07T16:19:09.000Z',
              updatedAt: '2020-12-07T16:19:19.000Z'
            },
            {
              name: 'Coronation Merchant Bank',
              slug: 'coronation-merchant-bank',
              code: '559',
              longcode: '',
              gateway: null,
              pay_with_bank: false,
              active: true,
              is_deleted: false,
              country: 'Nigeria',
              currency: 'NGN',
              type: 'nuban',
              id: 173,
              createdAt: '2020-11-24T10:25:07.000Z',
              updatedAt: '2020-11-24T10:25:07.000Z'
            }
          ]
        })
      });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.listBanks(input));

      // Act
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('listCountries', () => {
    it('should get a list of countries that Paystack currently supports', () => {
      // Arrange
      const response: AxiosResponse<PsListCountriesResponseModel> = fromPartial(
        {
          data: fromPartial({
            status: true,
            message: 'States retrieved',
            data: [
              {
                id: 1,
                name: 'Nigeria',
                iso_code: 'NG',
                default_currency_code: 'NGN',
                integration_defaults: {},
                relationships: {
                  currency: {
                    type: 'currency',
                    data: ['NGN', 'USD']
                  },
                  integration_feature: {
                    type: 'integration_feature',
                    data: []
                  },
                  integration_type: {
                    type: 'integration_type',
                    data: ['ITYPE_001', 'ITYPE_002', 'ITYPE_003']
                  },
                  payment_method: {
                    type: 'payment_method',
                    data: ['PAYM_001', 'PAYM_002', 'PAYM_003', 'PAYM_004']
                  }
                }
              },
              {
                id: 2,
                name: 'Ghana',
                iso_code: 'GH',
                default_currency_code: 'GHS',
                integration_defaults: {},
                relationships: {
                  currency: {
                    type: 'currency',
                    data: ['GHS', 'USD']
                  },
                  integration_feature: {
                    type: 'integration_feature',
                    data: []
                  },
                  integration_type: {
                    type: 'integration_type',
                    data: ['ITYPE_004', 'ITYPE_005']
                  },
                  payment_method: {
                    type: 'payment_method',
                    data: ['PAYM_001']
                  }
                }
              }
            ]
          })
        }
      );
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.listCountries());

      // Act
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('listStates', () => {
    it('should get a list of states for a country for address verification', () => {
      // Arrange
      const input = 'Ca';
      const response: AxiosResponse<PsListStatesResponseModel> = fromPartial({
        data: fromPartial({
          status: true,
          message: 'States retrieved',
          data: [
            {
              name: 'Alberta',
              slug: 'alberta',
              abbreviation: 'AB'
            },
            {
              name: 'British Columbia',
              slug: 'british-columbia',
              abbreviation: 'BC'
            }
          ]
        })
      });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.listStates(input));

      // Act
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });
});
