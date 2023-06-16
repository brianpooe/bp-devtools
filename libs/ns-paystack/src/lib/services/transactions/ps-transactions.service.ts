import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  PsChargeTransactionRequestModel,
  PsChargeTransactionResponseModel,
  PsConfigModel,
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
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
import { handleResponseAndError, MODULE_OPTIONS_TOKEN } from '../../helpers';
import { RequiredProperties } from '../../helpers/type.util.ts/required-properties';

@Injectable()
export class PsTransactionsService {
  axiosRequestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.appConfig.secretKey}`
    }
  };

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private readonly appConfig: PsConfigModel,
    private readonly httpService: HttpService
  ) {}

  /**
   * Initialize a transaction
   * @param payload
   */
  initializeTransaction(
    payload: RequiredProperties<
      PsInitializeTransactionRequestModel,
      'amount' | 'email'
    >
  ): Observable<PsInitializeTransactionResponseModel> {
    if (!payload?.amount && !payload?.email) {
      throw new BadRequestException('amount ');
    }
    return this.httpService
      .post<PsInitializeTransactionResponseModel>(
        'transaction/initialize',
        payload,
        this.axiosRequestConfig
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
      .get<PsVerifyTransactionResponseModel>(
        `transaction/verify/${reference}`,
        this.axiosRequestConfig
      )
      .pipe(handleResponseAndError());
  }

  /**
   * List transactions carried out on your integration
   * @param queryParamsPayload - query parameters
   */
  listTransactions(
    queryParamsPayload: RequiredProperties<
      PsListTransactionsQueryParamsModel,
      'perPage' | 'page'
    >
  ): Observable<PsListTransactionsResponseModel> {
    return this.httpService
      .get<PsListTransactionsResponseModel>('transaction', {
        ...this.axiosRequestConfig,
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
      .get<PsFetchTransactionResponseModel>(
        `transaction/${transactionId}`,
        this.axiosRequestConfig
      )
      .pipe(handleResponseAndError());
  }

  /**
   * All authorizations marked as reusable can be charged with this endpoint whenever you need to receive payments
   * @param payload
   */
  chargeTransaction(
    payload: RequiredProperties<
      PsChargeTransactionRequestModel,
      'amount' | 'email' | 'authorization_code'
    >
  ): Observable<PsChargeTransactionResponseModel> {
    return this.httpService
      .post<PsInitializeTransactionResponseModel>(
        'transaction/charge_authorization',
        payload,
        this.axiosRequestConfig
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
        `transaction/timeline/${idOrReference}`,
        this.axiosRequestConfig
      )
      .pipe(handleResponseAndError());
  }

  /**
   * Total amount received on your account
   * @param queryParamsPayload
   */
  transactionTotals(
    queryParamsPayload: RequiredProperties<
      PsTransactionTotalsRequestModel,
      'perPage' | 'page'
    >
  ): Observable<PsTransactionTotalsResponseModel> {
    return this.httpService
      .get<PsTransactionTotalsResponseModel>(`transaction/totals`, {
        ...this.axiosRequestConfig,
        params: queryParamsPayload
      })
      .pipe(handleResponseAndError());
  }

  /**
   * Export a list of transactions carried out on your integration
   * @param queryParamsPayload
   */
  exportTransaction(
    queryParamsPayload: RequiredProperties<
      PsExportTransactionRequestModel,
      'perPage' | 'page'
    >
  ): Observable<PsExportTransactionResponseModel> {
    return this.httpService
      .get<PsTransactionTotalsResponseModel>(`transaction/export`, {
        ...this.axiosRequestConfig,
        params: queryParamsPayload
      })
      .pipe(handleResponseAndError());
  }

  /**
   * Retrieve part of a payment from a customer
   * @param payload
   */
  partialDebit(
    payload: RequiredProperties<
      PsPartialDebitRequestModel,
      'authorization_code' | 'currency' | 'amount' | 'email'
    >
  ): Observable<PsPartialDebitResponseModel> {
    return this.httpService
      .post<PsInitializeTransactionResponseModel>(
        'transaction/partial_debit',
        payload,
        this.axiosRequestConfig
      )
      .pipe(handleResponseAndError());
  }
}
