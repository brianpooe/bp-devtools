import { Injectable } from '@nestjs/common';
import {
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel,
  PsFetchSplitResponseModel,
  PsListSplitRequestModel,
  PsListSplitResponseModel,
  PsTransactionSplitService,
  PsUpdateSplitRequestModel,
  PsUpdateSplitResponseModel,
  PsUpsertSubaccountSplitRequestModel,
  PsUpsertSubaccountSplitResponseModel
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

  /**
   * list splits
   * @param queryParamsPayload
   */
  listSplit(
    queryParamsPayload: PsListSplitRequestModel
  ): Observable<PsListSplitResponseModel> {
    return this.psTransactionSplitService.listSplit(queryParamsPayload);
  }

  fetchSplit(id: string): Observable<PsFetchSplitResponseModel> {
    return this.psTransactionSplitService.fetchSplit(id);
  }

  updateSplit(
    id: string,
    payload: PsUpdateSplitRequestModel
  ): Observable<PsUpdateSplitResponseModel> {
    return this.psTransactionSplitService.updateSplit(id, payload);
  }

  upsertSubaccountSplit(
    id: string,
    payload: PsUpsertSubaccountSplitRequestModel
  ): Observable<PsUpsertSubaccountSplitResponseModel> {
    return this.psTransactionSplitService.upsertSubaccountSplit(id, payload);
  }
}
