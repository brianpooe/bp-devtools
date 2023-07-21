import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../custom-http/custom-http.service';
import {
  PsResolveAccountRequestModel,
  PsResolveAccountResponseModel,
  PsResolveCardBinResponseModel,
  PsValidateAccountRequestModel,
  PsValidateAccountResponseModel
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

  /**
   * Confirm the authenticity of a customer's account number before sending money
   * @param payload
   */
  validateAccount(
    payload: PsValidateAccountRequestModel
  ): Observable<PsValidateAccountResponseModel> {
    return this.httpService
      .post<PsValidateAccountResponseModel>('bank/validate', payload)
      .pipe(handleResponseAndError());
  }

  /**
   * Get more information about a customer's card
   * @param bin - First 6 characters of card
   */
  resolveCardBin(bin: string): Observable<PsResolveCardBinResponseModel> {
    return this.httpService
      .get<PsResolveCardBinResponseModel>(`decision/bin/${bin}`)
      .pipe(handleResponseAndError());
  }
}
