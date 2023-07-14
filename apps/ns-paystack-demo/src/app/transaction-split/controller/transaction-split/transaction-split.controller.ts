import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel,
  PsFetchSplitResponseModel,
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

  @Get(':id')
  fetchSplit(@Param('id') id: string): Observable<PsFetchSplitResponseModel> {
    return this.transactionSplitService.fetchSplit(id);
  }
}
