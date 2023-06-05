import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
    PsChargeTransactionRequestModel,
    PsChargeTransactionResponseModel,
    PsExportTransactionRequestModel,
    PsExportTransactionResponseModel,
    PsFetchTransactionResponseModel,
    PsInitializeTransactionRequestModel,
    PsInitializeTransactionResponseModel,
    PsListTransactionsQueryParamsModel,
    PsListTransactionsResponseModel,
    PsPartialDebitRequestModel,
    PsPartialDebitResponseModel,
    PsTransactionTotalsRequestModel,
    PsTransactionTotalsResponseModel,
    PsVerifyTransactionResponseModel,
    PsViewTransactionTimeLineResponseModel
} from '@devtools-bp/ns-paystack';
import { Observable } from 'rxjs';
import { TransactionsService } from '../services/transactions.service';

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Post('initialize')
    initialize(
        @Body() payload: PsInitializeTransactionRequestModel
    ): Observable<PsInitializeTransactionResponseModel> {
        return this.transactionsService.initializeTransaction(payload);
    }

    @Get('verify/:reference')
    verifyTransaction(
        @Param('reference') reference: string
    ): Observable<PsVerifyTransactionResponseModel> {
        return this.transactionsService.verifyTransaction(reference);
    }

    @Get()
    listTransactions(
        @Query() queryParamsPayload: PsListTransactionsQueryParamsModel
    ): Observable<PsListTransactionsResponseModel> {
        return this.transactionsService.listTransactions(queryParamsPayload);
    }

    @Get(':transactionId')
    fetchTransaction(
        @Param('transactionId') transactionId: number
    ): Observable<PsFetchTransactionResponseModel> {
        return this.transactionsService.fetchTransaction(transactionId);
    }

    @Post('charge_authorization')
    chargeTransaction(
        @Body() payload: PsChargeTransactionRequestModel
    ): Observable<PsChargeTransactionResponseModel> {
        return this.transactionsService.chargeTransaction(payload);
    }

    @Get('timeline/:idOrReference')
    viewTransactionTimeline(
        @Param('idOrReference') idOrReference: string
    ): Observable<PsViewTransactionTimeLineResponseModel> {
        return this.transactionsService.viewTransactionTimeline(idOrReference);
    }

    @Get()
    transactionTotals(
        @Query() queryParamsPayload: PsTransactionTotalsRequestModel
    ): Observable<PsTransactionTotalsResponseModel> {
        return this.transactionsService.transactionTotals(queryParamsPayload);
    }

    @Get()
    exportTransaction(
        @Query() queryParamsPayload: PsExportTransactionRequestModel
    ): Observable<PsExportTransactionResponseModel> {
        return this.transactionsService.exportTransaction(queryParamsPayload);
    }

    @Post('partial_debit')
    partialDebit(
        @Body() payload: PsPartialDebitRequestModel
    ): Observable<PsPartialDebitResponseModel> {
        return this.transactionsService.partialDebit(payload);
    }
}
