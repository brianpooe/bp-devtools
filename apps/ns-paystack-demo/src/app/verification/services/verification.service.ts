import { Injectable } from '@nestjs/common';
import {
  PsResolveAccountRequestModel,
  PsResolveAccountResponseModel,
  PsValidateAccountRequestModel,
  PsValidateAccountResponseModel,
  PsVerificationService
} from '@devtools-bp/nestjs-paystack';
import { Observable } from 'rxjs';

@Injectable()
export class VerificationService {
  constructor(private readonly psVerificationService: PsVerificationService) {}

  resolveAccount(
    queryParamsPayload: PsResolveAccountRequestModel
  ): Observable<PsResolveAccountResponseModel> {
    return this.psVerificationService.resolveAccount(queryParamsPayload);
  }

  validateAccount(
    payload: PsValidateAccountRequestModel
  ): Observable<PsValidateAccountResponseModel> {
    return this.psVerificationService.validateAccount(payload);
  }
}
