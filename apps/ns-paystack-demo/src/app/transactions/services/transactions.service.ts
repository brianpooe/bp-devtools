import { Injectable } from '@nestjs/common';
import {
    PsTransactionsService,
    PsInitializeTransactionRequestModel,
    PsInitializeTransactionResponseModel,
    PsListTransactionsQueryParamsModel,
    PsListTransactionsResponseModel,
    PsVerifyTransactionResponseModel,
    PsFetchTransactionResponseModel
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
        queryParamsPayload: PsListTransactionsQueryParamsModel
    ): Observable<PsListTransactionsResponseModel> {
        return this.psTransactionsService.listTransactions(queryParamsPayload);
    }

    fetchTransaction(
        transactionId: number
    ): Observable<PsFetchTransactionResponseModel> {
        return this.psTransactionsService.fetchTransaction(transactionId);
    }
}
