import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel,
  PsFetchSplitResponseModel,
  PsListSplitRequestModel,
  PsListSplitResponseModel,
  PsUpdateSplitRequestModel,
  PsUpdateSplitResponseModel
} from '@devtools-bp/nestjs-paystack';
import { Observable } from 'rxjs';
import { TransactionSplitService } from '../../services/transaction-split.service';

@Controller('transaction/split')
export class TransactionSplitController {
  constructor(
    private readonly transactionSplitService: TransactionSplitService
  ) {}

  @Post()
  createSplit(
    @Body() payload: PsCreateSplitRequestModel
  ): Observable<PsCreateSplitResponseModel> {
    return this.transactionSplitService.createSplit(payload);
  }

  @Get()
  listSplit(
    @Query() queryParamsPayload: PsListSplitRequestModel
  ): Observable<PsListSplitResponseModel> {
    return this.transactionSplitService.listSplit(queryParamsPayload);
  }

  @Get(':id')
  fetchSplit(@Param('id') id: string): Observable<PsFetchSplitResponseModel> {
    return this.transactionSplitService.fetchSplit(id);
  }

  @Put(':id')
  updateSplit(
    @Param('id') id: string,
    @Body() payload: PsUpdateSplitRequestModel
  ): Observable<PsUpdateSplitResponseModel> {
    return this.transactionSplitService.updateSplit(id, payload);
  }
}
