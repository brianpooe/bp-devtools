import { Injectable } from '@nestjs/common';
import {
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel,
  PsFetchSplitResponseModel,
  PsListSplitRequestModel,
  PsListSplitResponseModel,
  PsTransactionSplitService
} from '@devtools-bp/ns-paystack';
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

  fetchSplit(id: string): Observable<PsFetchSplitResponseModel> {
    return this.psTransactionSplitService.fetchSplit(id);
  }
}
