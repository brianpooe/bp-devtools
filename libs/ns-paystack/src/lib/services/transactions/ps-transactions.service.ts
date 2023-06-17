import { BadRequestException, Injectable } from '@nestjs/common';
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
import { Observable } from 'rxjs';
import { handleResponseAndError } from '../../helpers';
import { CustomHttpService } from '../custom-http/custom-http.service';

@Injectable()
export class PsTransactionsService {
  constructor(private readonly httpService: CustomHttpService) {}

  /**
   * Initialize a transaction
   * @param payload
   */
  initializeTransaction(
    payload: PsInitializeTransactionRequestModel
  ): Observable<PsInitializeTransactionResponseModel> {
    if (!payload?.amount && !payload?.email) {
      throw new BadRequestException('amount ');
    }
    return this.httpService
      .post<PsInitializeTransactionResponseModel>(
        'transaction/initialize',
        payload
      )
      .pipe(handleResponseAndError());
  }

  /**
   * Confirm the status of a transaction
   * @param reference - The transaction reference used to initiate the transaction
   */
  verifyTransaction(
    reference: string
  ): Observable<PsVerifyTransactionResponseModel> {
    return this.httpService
      .get<PsVerifyTransactionResponseModel>(`transaction/verify/${reference}`)
      .pipe(handleResponseAndError());
  }

  /**
   * List transactions carried out on your integration
   * @param queryParamsPayload - query parameters
   */
  listTransactions(
    queryParamsPayload: PsListTransactionsQueryParamsModel
  ): Observable<PsListTransactionsResponseModel> {
    return this.httpService
      .get<PsListTransactionsResponseModel>('transaction', {
        params: queryParamsPayload
      })
      .pipe(handleResponseAndError());
  }

  /**
   * Get details of a transaction carried out on your integration
   * @param transactionId - An ID for the transaction to fetch
   */
  fetchTransaction(
    transactionId: number
  ): Observable<PsFetchTransactionResponseModel> {
    return this.httpService
      .get<PsFetchTransactionResponseModel>(`transaction/${transactionId}`)
      .pipe(handleResponseAndError());
  }

  /**
   * All authorizations marked as reusable can be charged with this endpoint whenever you need to receive payments
   * @param payload
   */
  chargeTransaction(
    payload: PsChargeTransactionRequestModel
  ): Observable<PsChargeTransactionResponseModel> {
    return this.httpService
      .post<PsInitializeTransactionResponseModel>(
        'transaction/charge_authorization',
        payload
      )
      .pipe(handleResponseAndError());
  }

  /**
   * View the timeline of a transaction
   * @param idOrReference - The ID or the reference of the transaction
   */
  viewTransactionTimeline(
    idOrReference: string
  ): Observable<PsViewTransactionTimeLineResponseModel> {
    return this.httpService
      .get<PsViewTransactionTimeLineResponseModel>(
        `transaction/timeline/${idOrReference}`
      )
      .pipe(handleResponseAndError());
  }

  /**
   * Total amount received on your account
   * @param queryParamsPayload
   */
  transactionTotals(
    queryParamsPayload: PsTransactionTotalsRequestModel
  ): Observable<PsTransactionTotalsResponseModel> {
    return this.httpService
      .get<PsTransactionTotalsResponseModel>(`transaction/totals`, {
        params: queryParamsPayload
      })
      .pipe(handleResponseAndError());
  }

  /**
   * Export a list of transactions carried out on your integration
   * @param queryParamsPayload
   */
  exportTransaction(
    queryParamsPayload: PsExportTransactionRequestModel
  ): Observable<PsExportTransactionResponseModel> {
    return this.httpService
      .get<PsTransactionTotalsResponseModel>(`transaction/export`, {
        params: queryParamsPayload
      })
      .pipe(handleResponseAndError());
  }

  /**
   * Retrieve part of a payment from a customer
   * @param payload
   */
  partialDebit(
    payload: PsPartialDebitRequestModel
  ): Observable<PsPartialDebitResponseModel> {
    return this.httpService
      .post<PsInitializeTransactionResponseModel>(
        'transaction/partial_debit',
        payload
      )
      .pipe(handleResponseAndError());
  }
}
