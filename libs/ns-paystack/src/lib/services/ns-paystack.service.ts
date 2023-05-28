import { Inject, Injectable } from '@nestjs/common';
import { PsConfigModel } from '../models';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
import {
    PsInitializeTransactionRequestModel,
    PsInitializeTransactionResponseModel,
    PsVerifyTransactionResponseModel,
    PsListTransactionsResponseModel
} from '../models';
import { handleResponseAndError, MODULE_OPTIONS_TOKEN } from '../helpers';

@Injectable()
export class NsPaystackService {
    requestOptions: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.options.secretKey}`
        }
    };

    constructor(
        @Inject(MODULE_OPTIONS_TOKEN)
        private readonly options: PsConfigModel,
        private readonly httpService: HttpService
    ) {}

    initializeTransaction(
        payload: PsInitializeTransactionRequestModel
    ): Observable<PsInitializeTransactionResponseModel> {
        return this.httpService
            .post<PsInitializeTransactionResponseModel>(
                'transaction/initialize',
                payload,
                this.requestOptions
            )
            .pipe(handleResponseAndError());
    }

    verifyTransaction(
        reference: string
    ): Observable<PsVerifyTransactionResponseModel> {
        return this.httpService
            .get<PsVerifyTransactionResponseModel>(
                `transaction/verify/${reference}`,
                this.requestOptions
            )
            .pipe(handleResponseAndError());
    }

    listTransactions(): Observable<PsListTransactionsResponseModel> {
        return this.httpService
            .get<PsListTransactionsResponseModel>(
                'transaction',
                this.requestOptions
            )
            .pipe(handleResponseAndError());
    }
}
