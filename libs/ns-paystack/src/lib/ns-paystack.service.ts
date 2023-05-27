import { Inject, Injectable } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './config.module-definition';
import { NsPaystackConfigModel } from './ns-paystack-config.model';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { RawAxiosRequestHeaders } from 'axios';
import {
    InitializeTransactionRequestModel,
    InitializeTransactionResponseModel,
} from './types';
import { handleResponseAndError } from './helpers.util';
import { VerifyTransactionResponseModel } from './types';

@Injectable()
export class NsPaystackService {
    headers: RawAxiosRequestHeaders;

    constructor(
        @Inject(MODULE_OPTIONS_TOKEN)
        private readonly options: NsPaystackConfigModel,
        private readonly httpService: HttpService
    ) {
        this.headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.options.secretKey}`,
        };
    }

    initializeTransaction(
        payload: InitializeTransactionRequestModel
    ): Observable<InitializeTransactionResponseModel> {
        return this.httpService
            .post<InitializeTransactionResponseModel>(
                'transaction/initialize',
                payload,
                {
                    headers: this.headers,
                }
            )
            .pipe(handleResponseAndError());
    }

    verifyTransaction(
        reference: string
    ): Observable<VerifyTransactionResponseModel> {
        return this.httpService
            .get(`transaction/verify/${reference}`, {
                headers: this.headers,
            })
            .pipe(handleResponseAndError());
    }
}
