import { PsTransactionsService } from './ps-transactions.service';
import { AxiosResponse } from 'axios';
import {
  PsChargeTransactionRequestModel,
  PsChargeTransactionResponseModel,
  PsExportTransactionRequestModel,
  PsExportTransactionResponseModel,
  PsFetchTransactionResponseModel,
  PsInitializeTransactionRequestModel,
  PsInitializeTransactionResponseModel,
  PsListTransactionsQueryParamsModel,
  PsListTransactionsResponseModel,
  PsPartialDebitRequestModel,
  PsPartialDebitResponseModel,
  PsTransactionTotalsRequestModel,
  PsTransactionTotalsResponseModel,
  PsVerifyTransactionResponseModel,
  PsViewTransactionTimeLineResponseModel
} from '../../models';
import { fromExact, fromPartial } from '@total-typescript/shoehorn';
import { of } from 'rxjs';
import { TestBed } from '@automock/jest';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { CustomHttpService } from '../custom-http/custom-http.service';

describe(PsTransactionsService.name, () => {
  let service: PsTransactionsService;
  let httpService: jest.Mocked<CustomHttpService>;

  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(PsTransactionsService)
      .mock(CustomHttpService)
      .using({
        post: jest.fn(),
        get: jest.fn()
      })
      .compile();

    service = unit;

    httpService = unitRef.get(CustomHttpService);
  });

  describe('initializeTransaction', () => {
    it('should return initialize transaction response', () => {
      // Arrange
      const input: PsInitializeTransactionRequestModel = {
        amount: '20',
        email: 'test@gmail.com'
      };
      const response: AxiosResponse<PsInitializeTransactionResponseModel> =
        fromPartial({
          data: fromPartial({
            status: true,
            message: 'Authorization URL created',
            data: fromExact({
              authorization_url: 'https://checkout.paystack.com/0peioxfhpn',
              access_code: '0peioxfhpn',
              reference: '7PVGX8MEk85tgeEpVDtD'
            })
          })
        });
      httpService.post.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.initializeTransaction(input));

      // Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('verifyTransaction', () => {
    it('should return confirmation of the status of a transaction', () => {
      // Arrange
      const input = 'l5b6sesmko';
      const response: AxiosResponse<PsVerifyTransactionResponseModel> =
        fromPartial({
          data: {
            status: true,
            message: 'Verification successful',
            data: fromPartial({
              id: 2009945086,
              status: 'success',
              reference: 'rd0bz6z2wu',
              amount: 2000,
              gateway_response: 'Successful'
            })
          }
        });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.verifyTransaction(input));

      //Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('listTransactions', () => {
    it('should return list transactions carried out', () => {
      // Arrange
      const input: PsListTransactionsQueryParamsModel = {
        page: 1,
        perPage: 5
      };
      const response: AxiosResponse<PsListTransactionsResponseModel> =
        fromPartial({
          data: {
            status: true,
            message: 'Transactions retrieved',
            data: [
              fromPartial({
                id: 2009945086,
                status: 'success',
                reference: 'rd0bz6z2wu',
                amount: 2000,
                gateway_response: 'Successful'
              }),
              fromPartial({
                id: 2009945086,
                status: 'failed',
                reference: 'Declined',
                amount: 2000,
                gateway_response: 'Successful'
              })
            ]
          }
        });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.listTransactions(input));

      //Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('fetchTransaction', () => {
    it('should return details of a transaction carried out', () => {
      // Arrange
      const input = 2836566657;
      const response: AxiosResponse<PsFetchTransactionResponseModel> =
        fromPartial({
          data: {
            status: true,
            message: 'Transaction retrieved',
            data: fromPartial({
              id: 2836566657,
              status: 'success',
              reference: '203520101',
              amount: 2000,
              gateway_response: 'Successful'
            })
          }
        });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.fetchTransaction(input));

      //Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('chargeTransaction', () => {
    it('should return charge transaction response', () => {
      // Arrange
      const input: PsChargeTransactionRequestModel = {
        amount: '2000',
        email: 'customer@email.com',
        authorization_code: 'AUTH_72btv547'
      };
      const response: AxiosResponse<PsChargeTransactionResponseModel> =
        fromPartial({
          data: {
            status: true,
            message: 'Charge attempted',
            data: fromPartial({
              amount: 2000,
              status: 'success',
              reference: 'cn65lf4ixmkzvda',
              gateway_response: 'Approved',
              channel: 'card',
              transaction_date: '2020-05-27T11:45:03.000Z'
            })
          }
        });
      httpService.post.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.chargeTransaction(input));

      //Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('viewTransactionTimeline', () => {
    it('should return view transaction timeline of a transaction', () => {
      // Arrange
      const input = 'cn65lf4ixmkzvda';
      const response: AxiosResponse<PsViewTransactionTimeLineResponseModel> =
        fromPartial({
          data: {
            status: true,
            message: 'Timeline retrieved',
            data: fromPartial({
              time_spent: 9061,
              attempts: 1,
              success: false,
              errors: 1,
              channel: 'card',
              history: [
                {
                  type: 'open',
                  message: 'Opened payment page',
                  time: 1
                },
                {
                  type: 'input',
                  message:
                    'Filled these fields: card number, card expiry, card cvc',
                  time: 39
                },
                {
                  type: 'action',
                  message: 'Attempted to pay',
                  time: 39
                },
                {
                  type: 'error',
                  message: 'Error: Declined',
                  time: 48
                },
                {
                  type: 'close',
                  message: 'Page closed',
                  time: 9061
                }
              ]
            })
          }
        });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(
        service.viewTransactionTimeline(input)
      );

      //Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('transactionTotals', () => {
    it('should return total amount received on your account', () => {
      // Arrange
      const input: PsTransactionTotalsRequestModel = {
        page: 1,
        perPage: 5
      };
      const response: AxiosResponse<PsTransactionTotalsResponseModel> =
        fromPartial({
          data: {
            status: true,
            message: 'Transaction totals',
            data: {
              total_transactions: 10,
              unique_customers: 3,
              total_volume: 14000,
              total_volume_by_currency: [
                {
                  currency: 'ZAR',
                  amount: 14000
                }
              ],
              pending_transfers: 24000,
              pending_transfers_by_currency: [
                {
                  currency: 'ZAR',
                  amount: 24000
                }
              ]
            }
          }
        });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.transactionTotals(input));

      //Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('exportTransaction', () => {
    it('should return an exported list of transactions carried out on your integration', () => {
      // Arrange
      const input: PsExportTransactionRequestModel = {
        page: 1,
        perPage: 5
      };
      const response: AxiosResponse<PsExportTransactionResponseModel> =
        fromPartial({
          data: {
            status: true,
            message: 'Export successful',
            data: {
              path: 'https://files.paystack.co/exports/100032/1460290758207.csv'
            }
          }
        });
      httpService.get.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.exportTransaction(input));

      //Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });

  describe('partialDebit', () => {
    it('should return part of a payment from a customer', () => {
      // Arrange
      const input: PsPartialDebitRequestModel = {
        amount: '2000',
        email: 'customer@email.com',
        authorization_code: 'AUTH_72btv547',
        currency: 'ZAR'
      };
      const response: AxiosResponse<PsPartialDebitResponseModel> = fromPartial({
        data: {
          status: true,
          message: 'Charge attempted',
          data: fromPartial({
            amount: 2000,
            status: 'success',
            reference: 'cn65lf4ixmkzvda',
            gateway_response: 'Approved',
            channel: 'card',
            transaction_date: '2020-05-27T11:45:03.000Z',
            customer: {
              id: 37651078,
              email: 'customer@email.com',
              customer_code: 'CUS_q8vst7djnx3vq6d',
              risk_action: 'default',
              international_format_phone: null
            }
          })
        }
      });
      httpService.post.mockReturnValueOnce(of(response));

      // Act
      const observerSpy = subscribeSpyTo(service.partialDebit(input));

      //Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });
});
