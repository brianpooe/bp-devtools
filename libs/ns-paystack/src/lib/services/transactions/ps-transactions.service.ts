import { Inject, Injectable } from '@nestjs/common';
import {
    PsConfigModel,
    PsInitializeTransactionRequestModel,
    PsInitializeTransactionResponseModel,
    PsListTransactionsQueryParamModel,
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

    listTransactions(
        queryParamsPayload: PsListTransactionsQueryParamModel
    ): Observable<PsListTransactionsResponseModel> {
        return this.httpService
            .get<PsListTransactionsResponseModel>('transaction', {
                ...this.axiosRequestConfig,
                params: queryParamsPayload
            })
            .pipe(handleResponseAndError());
    }
}
