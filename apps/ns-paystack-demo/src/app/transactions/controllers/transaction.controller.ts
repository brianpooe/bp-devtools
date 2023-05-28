import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
    PsInitializeTransactionRequestModel,
    PsInitializeTransactionResponseModel,
    PsListTransactionsQueryParamModel,
    PsListTransactionsResponseModel,
    PsVerifyTransactionResponseModel
} from '@bp-devtools/ns-paystack';
import { Observable } from 'rxjs';
import { TransactionService } from '../services/transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}

    @Post('initialize')
    initialize(
        @Body() payload: PsInitializeTransactionRequestModel
    ): Observable<PsInitializeTransactionResponseModel> {
        return this.transactionService.initializeTransaction(payload);
    }

    @Get('verify/:reference')
    verifyTransaction(
        @Param('reference') reference: string
    ): Observable<PsVerifyTransactionResponseModel> {
        return this.transactionService.verifyTransaction(reference);
    }

    @Get()
    listTransactions(
        @Query() queryParamsPayload: PsListTransactionsQueryParamModel
    ): Observable<PsListTransactionsResponseModel> {
        return this.transactionService.listTransactions(queryParamsPayload);
    }
}
