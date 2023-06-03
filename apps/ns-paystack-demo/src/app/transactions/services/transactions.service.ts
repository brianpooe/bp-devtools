import { Injectable } from '@nestjs/common';
import {
    PsTransactionsService,
    PsInitializeTransactionRequestModel,
    PsInitializeTransactionResponseModel,
    PsListTransactionsQueryParamsModel,
    PsListTransactionsResponseModel,
    PsVerifyTransactionResponseModel,
    PsFetchTransactionResponseModel,
    PsChargeTransactionRequestModel,
    PsChargeTransactionResponseModel,
    PsViewTransactionTimeLineResponseModel,
    PsTransactionTotalsResponseModel,
    PsTransactionTotalsRequestModel,
    PsExportTransactionRequestModel,
    PsExportTransactionResponseModel
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

    chargeTransaction(
        payload: PsChargeTransactionRequestModel
    ): Observable<PsChargeTransactionResponseModel> {
        return this.psTransactionsService.chargeTransaction(payload);
    }

    viewTransactionTimeline(
        idOrReference: string
    ): Observable<PsViewTransactionTimeLineResponseModel> {
        return this.psTransactionsService.viewTransactionTimeline(
            idOrReference
        );
    }

    transactionTotals(
        queryParamsPayload: PsTransactionTotalsRequestModel
    ): Observable<PsTransactionTotalsResponseModel> {
        return this.psTransactionsService.transactionTotals(queryParamsPayload);
    }

    exportTransaction(
        queryParamsPayload: PsExportTransactionRequestModel
    ): Observable<PsExportTransactionResponseModel> {
        return this.psTransactionsService.exportTransaction(queryParamsPayload);
    }
}
