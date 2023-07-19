import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../custom-http/custom-http.service';
import {
  PsResolveAccountRequestModel,
  PsResolveAccountResponseModel
} from '../../models';
import { Observable } from 'rxjs';
import { handleResponseAndError } from '../../helpers';

@Injectable()
export class PsVerificationService {
  constructor(private readonly httpService: CustomHttpService) {}

  /**
   * Confirm an account belongs to the right customer
   * @param queryParamsPayload
   */
  resolveAccount(
    queryParamsPayload: PsResolveAccountRequestModel
  ): Observable<PsResolveAccountResponseModel> {
    return this.httpService
      .get<PsResolveAccountResponseModel>('bank/resolve', {
        params: queryParamsPayload
      })
      .pipe(handleResponseAndError());
  }
}
