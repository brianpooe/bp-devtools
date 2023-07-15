import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../custom-http/custom-http.service';
import {
  handleResponseAndError,
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel,
  PsListSplitRequestModel,
  PsListSplitResponseModel,
  PsFetchSplitResponseModel
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
}
