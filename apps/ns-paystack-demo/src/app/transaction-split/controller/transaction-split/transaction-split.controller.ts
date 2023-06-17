import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel,
  PsListSplitRequestModel,
  PsListSplitResponseModel
} from '@devtools-bp/ns-paystack';
import { Observable } from 'rxjs';
import { TransactionSplitService } from '../../services/transaction-split.service';

@Controller('transaction-split')
export class TransactionSplitController {
  constructor(
    private readonly transactionSplitService: TransactionSplitService
  ) {}

  @Post('split')
  createSplit(
    @Body() payload: PsCreateSplitRequestModel
  ): Observable<PsCreateSplitResponseModel> {
    return this.transactionSplitService.createSplit(payload);
  }

  @Get('split')
  listSplit(
    @Query() queryParamsPayload: PsListSplitRequestModel
  ): Observable<PsListSplitResponseModel> {
    return this.transactionSplitService.listSplit(queryParamsPayload);
  }
}
