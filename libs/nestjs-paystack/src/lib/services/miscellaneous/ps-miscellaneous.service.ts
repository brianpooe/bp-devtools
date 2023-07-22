import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../custom-http/custom-http.service';
import {
  handleResponseAndError,
  PsListBanksRequestModel,
  PsListBanksResponseModel
} from '../../models';
import { Observable } from 'rxjs';

@Injectable()
export class PsMiscellaneousService {
  constructor(private readonly httpService: CustomHttpService) {}

  /**
   * Get a list of all supported banks and their properties
   * @param queryParamsPayload
   */
  listBanks(
    queryParamsPayload: PsListBanksRequestModel
  ): Observable<PsListBanksResponseModel> {
    return this.httpService
      .get<PsListBanksResponseModel>('bank', {
        params: queryParamsPayload
      })
      .pipe(handleResponseAndError());
  }
}
