import { Injectable } from '@nestjs/common';
import {
    PsTransactionsService,
    PsInitializeTransactionRequestModel,
    PsInitializeTransactionResponseModel,
    PsListTransactionsQueryParamModel,
    PsListTransactionsResponseModel,
    PsVerifyTransactionResponseModel
} from '@bp-devtools/ns-paystack';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionsService {
    constructor(
        private readonly psTransactionsService: PsTransactionsService
    ) {}

    initializeTransaction(
        payload: PsInitializeTransactionRequestModel
    ): Observable<PsInitializeTransactionResponseModel> {
        return this.psTransactionsService.initializeTransaction(payload);
    }

    verifyTransaction(
        reference: string
    ): Observable<PsVerifyTransactionResponseModel> {
        return this.psTransactionsService.verifyTransaction(reference);
    }

    listTransactions(
        queryParamsPayload: PsListTransactionsQueryParamModel
    ): Observable<PsListTransactionsResponseModel> {
        return this.psTransactionsService.listTransactions(queryParamsPayload);
    }
}
