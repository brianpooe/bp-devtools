import { Injectable } from '@nestjs/common';
import {
  PsResolveAccountRequestModel,
  PsResolveAccountResponseModel,
  PsResolveCardBinResponseModel,
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

  resolveCardBin(bin: string): Observable<PsResolveCardBinResponseModel> {
    return this.psVerificationService.resolveCardBin(bin);
  }
}
