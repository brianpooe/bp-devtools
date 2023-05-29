import { Inject, Injectable } from '@nestjs/common';
import {
    PsConfigModel,
    PsFetchTransactionResponseModel,
    PsInitializeTransactionRequestModel,
    PsInitializeTransactionResponseModel,
    PsListTransactionsQueryParamsModel,
    PsListTransactionsResponseModel,
    PsVerifyTransactionResponseModel
} from '../../models';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
import { handleResponseAndError, MODULE_OPTIONS_TOKEN } from '../../helpers';

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
     * @returns PsInitializeTransactionResponseModel
     */
    initializeTransaction(
        payload: PsInitializeTransactionRequestModel
    ): Observable<PsInitializeTransactionResponseModel> {
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
     * @returns PsVerifyTransactionResponseModel
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
     * @returns PsListTransactionsResponseModel
     */
    listTransactions(
        queryParamsPayload: PsListTransactionsQueryParamsModel
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
     * @returns PsFetchTransactionResponseModel
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
}
