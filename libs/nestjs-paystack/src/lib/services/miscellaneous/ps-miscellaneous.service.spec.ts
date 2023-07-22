import { PsMiscellaneousService } from './ps-miscellaneous.service';
import { CustomHttpService } from '../custom-http/custom-http.service';
import { TestBed } from '@automock/jest';
import {
  PsListBanksRequestModel,
  PsListBanksResponseModel
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
            },
            {
              name: 'Infinity MFB',
              slug: 'infinity-mfb',
              code: '50457',
              longcode: '',
              gateway: null,
              pay_with_bank: false,
              active: true,
              is_deleted: false,
              country: 'Nigeria',
              currency: 'NGN',
              type: 'nuban',
              id: 172,
              createdAt: '2020-11-24T10:23:37.000Z',
              updatedAt: '2020-11-24T10:23:37.000Z'
            },
            {
              name: 'Paycom',
              slug: 'paycom',
              code: '999992',
              longcode: '',
              gateway: null,
              pay_with_bank: false,
              active: true,
              is_deleted: false,
              country: 'Nigeria',
              currency: 'NGN',
              type: 'nuban',
              id: 171,
              createdAt: '2020-11-24T10:20:45.000Z',
              updatedAt: '2020-11-24T10:20:54.000Z'
            },
            {
              name: 'Petra Mircofinance Bank Plc',
              slug: 'petra-microfinance-bank-plc',
              code: '50746',
              longcode: '',
              gateway: null,
              pay_with_bank: false,
              active: true,
              is_deleted: false,
              country: 'Nigeria',
              currency: 'NGN',
              type: 'nuban',
              id: 170,
              createdAt: '2020-11-24T10:03:06.000Z',
              updatedAt: '2020-11-24T10:03:06.000Z'
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
});