import { PsTransactionsService } from './ps-transactions.service';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import {
  PsInitializeTransactionRequestModel,
  PsInitializeTransactionResponseModel
} from '../../models';
import { fromExact, fromPartial } from '@total-typescript/shoehorn';
import { of } from 'rxjs';
import { expectObservable } from '../../helpers/unit-test/unit-test.util';
import { TestBed } from '@automock/jest';
import DoneCallback = jest.DoneCallback;

describe(PsTransactionsService.name, () => {
  let service: PsTransactionsService;
  let httpService: jest.Mocked<HttpService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(PsTransactionsService)
      .mock(HttpService)
      .using({
        post: jest.fn(),
        get: jest.fn()
      })
      .compile();

    service = unit;

    httpService = unitRef.get(HttpService);
  });

  describe('initializeTransaction', () => {
    it('should return initialize transaction response', (done: DoneCallback) => {
      const input: PsInitializeTransactionRequestModel = {
        amount: '20',
        email: 'test@gmail.com'
      };
      const response: AxiosResponse<PsInitializeTransactionResponseModel> =
        fromPartial({
          data: fromPartial({
            data: fromExact({
              authorization_url: 'https://checkout.paystack.com/0peioxfhpn',
              access_code: '0peioxfhpn',
              reference: '7PVGX8MEk85tgeEpVDtD'
            })
          })
        });
      httpService.post.mockReturnValueOnce(of(response));

      expectObservable(
        {
          actualObservable: service.initializeTransaction(input),
          done
        },
        (resp) => {
          expect(resp).toEqual(response.data);
        }
      );
    });
  });
});
