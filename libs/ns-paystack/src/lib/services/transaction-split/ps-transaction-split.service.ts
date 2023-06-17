import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../custom-http/custom-http.service';
import {
  handleResponseAndError,
  PsCreateSplitRequestModel,
  PsCreateSplitResponseModel
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
}
