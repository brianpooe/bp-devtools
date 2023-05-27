import { Injectable } from '@nestjs/common';
import { NsPaystackService } from '@bp-devtools/ns-paystack';
import {
    InitializeTransactionRequestModel,
    InitializeTransactionResponseModel,
    VerifyTransactionResponseModel
} from '@bp-devtools/ns-paystack/types';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionService {
    constructor(private readonly nsPaystackService: NsPaystackService) {}

    initializeTransaction(
        payload: InitializeTransactionRequestModel
    ): Observable<InitializeTransactionResponseModel> {
        return this.nsPaystackService.initializeTransaction(payload);
    }

    verifyTransaction(
        reference: string
    ): Observable<VerifyTransactionResponseModel> {
        return this.nsPaystackService.verifyTransaction(reference);
    }
}
