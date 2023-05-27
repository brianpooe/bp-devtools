import { Body, Controller, Post } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';
import {
    InitializeTransactionRequestModel,
    InitializeTransactionResponseModel,
} from '@bp-devtools/ns-paystack';
import { Observable } from 'rxjs';

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}

    @Post('initialize')
    initialize(
        @Body() payload: InitializeTransactionRequestModel
    ): Observable<InitializeTransactionResponseModel> {
        return this.transactionService.initializeTransaction(payload);
    }
}
