import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../custom-http/custom-http.service';
import {
  handleResponseAndError,
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel,
  PsListSplitRequestModel,
  PsListSplitResponseModel,
  PsFetchSplitResponseModel,
  PsUpdateSplitRequestModel,
  PsUpsertSubaccountSplitResponseModel,
  PsUpdateSplitResponseModel,
  PsUpsertSubaccountSplitRequestModel,
  PsRemoveSubaccountSplitRequestModel,
  PsRemoveSubaccountSplitReponseModel
} from '../../models';
import { Observable } from 'rxjs';

@Injectable()
export class PsTransactionSplitService {
  constructor(private readonly httpService: CustomHttpService) {}

  /**
   * Create a split payment
   * @param payload
   */
  createSplit(
    payload: PsCreateSplitRequestModel
  ): Observable<PsCreateSplitResponseModel> {
    return this.httpService
      .post<PsCreateSplitResponseModel>('split', payload)
      .pipe(handleResponseAndError());
  }

  /**
   * List the transaction splits available
   * @param queryParamsPayload
   */
  listSplit(
    queryParamsPayload: PsListSplitRequestModel
  ): Observable<PsListSplitResponseModel> {
    return this.httpService
      .get<PsListSplitResponseModel>('split', {
        params: queryParamsPayload
      })
      .pipe(handleResponseAndError());
  }

  /**
   * Get details of a split transaction
   * @param id -The id of the split
   */
  fetchSplit(id: string): Observable<PsFetchSplitResponseModel> {
    return this.httpService
      .get<PsListSplitResponseModel>(`split/${id}`)
      .pipe(handleResponseAndError());
  }

  /**
   * Update a transaction split details
   * @param id -The id of the split
   * @param payload
   */
  updateSplit(
    id: string,
    payload: PsUpdateSplitRequestModel
  ): Observable<PsUpdateSplitResponseModel> {
    return this.httpService
      .put<PsUpdateSplitResponseModel>(`split/${id}`, payload)
      .pipe(handleResponseAndError());
  }

  /**
   * Add a Subaccount to a Transaction Split, or update the share of an existing Subaccount in a Transaction Split
   * @param id - split id
   * @param payload
   */
  upsertSubaccountSplit(
    id: string,
    payload: PsUpsertSubaccountSplitRequestModel
  ): Observable<PsUpsertSubaccountSplitResponseModel> {
    return this.httpService
      .post<PsUpsertSubaccountSplitResponseModel>(
        `split/${id}/subaccount/add`,
        payload
      )
      .pipe(handleResponseAndError());
  }

  removeSubaccountSplit(
    id: string,
    payload: PsRemoveSubaccountSplitRequestModel
  ): Observable<PsRemoveSubaccountSplitReponseModel> {
    return this.httpService
      .post<PsRemoveSubaccountSplitReponseModel>(
        `split/${id}/subaccount/remove`,
        payload
      )
      .pipe(handleResponseAndError());
  }
}
