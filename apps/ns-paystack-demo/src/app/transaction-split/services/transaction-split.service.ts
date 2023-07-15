import { Injectable } from '@nestjs/common';
import {
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel,
  PsListSplitRequestModel,
  PsListSplitResponseModel,
  PsTransactionSplitService
} from '@devtools-bp/nestjs-paystack';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionSplitService {
  constructor(
    private readonly psTransactionSplitService: PsTransactionSplitService
  ) {}

  createSplit(
    payload: PsCreateSplitRequestModel
  ): Observable<PsCreateSplitResponseModel> {
    return this.psTransactionSplitService.createSplit(payload);
  }

  listSplit(
    queryParamsPayload: PsListSplitRequestModel
  ): Observable<PsListSplitResponseModel> {
    return this.psTransactionSplitService.listSplit(queryParamsPayload);
  }
}
