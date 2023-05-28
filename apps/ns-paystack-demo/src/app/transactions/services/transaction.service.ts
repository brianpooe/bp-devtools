import { Injectable } from '@nestjs/common';
import {
    NsPaystackService,
    PsInitializeTransactionRequestModel,
    PsInitializeTransactionResponseModel,
    PsVerifyTransactionResponseModel
} from '@bp-devtools/ns-paystack';

import { Observable } from 'rxjs';

@Injectable()
export class TransactionService {
    constructor(private readonly nsPaystackService: NsPaystackService) {}

    initializeTransaction(
        payload: PsInitializeTransactionRequestModel
    ): Observable<PsInitializeTransactionResponseModel> {
        return this.nsPaystackService.initializeTransaction(payload);
    }

    verifyTransaction(
        reference: string
    ): Observable<PsVerifyTransactionResponseModel> {
        return this.nsPaystackService.verifyTransaction(reference);
    }
}
