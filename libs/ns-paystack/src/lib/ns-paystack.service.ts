import { Inject, Injectable } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './config.module-definition';
import { NsPaystackConfigModel } from './ns-paystack-config.model';
import { HttpService } from '@nestjs/axios';
import { InitializeTransactionRequestModel } from './types/initialize-transaction-request.model';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import {
    InitializeTransactionData,
    InitializeTransactionResponseModel,
} from './types/initialize-transaction-response.model';

@Injectable()
export class NsPaystackService {
    constructor(
        @Inject(MODULE_OPTIONS_TOKEN)
        private readonly options: NsPaystackConfigModel,
        private readonly httpService: HttpService
    ) {}

    initializeTransaction(
        payload: InitializeTransactionRequestModel
    ): Observable<AxiosResponse<InitializeTransactionResponseModel>> {}
}
