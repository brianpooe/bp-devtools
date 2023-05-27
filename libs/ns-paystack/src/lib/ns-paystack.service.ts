import { Inject, Injectable } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './config.module-definition';
import { NsPaystackConfigModel } from './ns-paystack-config.model';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
import {
    InitializeTransactionRequestModel,
    InitializeTransactionResponseModel,
    VerifyTransactionResponseModel
} from './types';
import { handleResponseAndError } from './helpers.util';

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
        private readonly options: NsPaystackConfigModel,
        private readonly httpService: HttpService
    ) {}

    initializeTransaction(
        payload: InitializeTransactionRequestModel
    ): Observable<InitializeTransactionResponseModel> {
        return this.httpService
            .post<InitializeTransactionResponseModel>(
                'transaction/initialize',
                payload,
                this.requestOptions
            )
            .pipe(handleResponseAndError());
    }

    verifyTransaction(
        reference: string
    ): Observable<VerifyTransactionResponseModel> {
        return this.httpService
            .get(`transaction/verify/${reference}`, this.requestOptions)
            .pipe(handleResponseAndError());
    }
}
