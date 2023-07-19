import { Injectable } from '@nestjs/common';
import {
  PsResolveAccountRequestModel,
  PsResolveAccountResponseModel,
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
}
