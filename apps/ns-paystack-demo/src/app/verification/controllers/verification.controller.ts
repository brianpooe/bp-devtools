import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { VerificationService } from '../services/verification.service';
import {
  PsResolveAccountRequestModel,
  PsResolveAccountResponseModel,
  PsValidateAccountRequestModel,
  PsValidateAccountResponseModel
} from '@devtools-bp/nestjs-paystack';
import { Observable } from 'rxjs';

@Controller()
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Get('bank/resolve')
  resolveAccount(
    @Query() queryParamsPayload: PsResolveAccountRequestModel
  ): Observable<PsResolveAccountResponseModel> {
    return this.verificationService.resolveAccount(queryParamsPayload);
  }

  @Post('bank/validate')
  validateAccount(
    @Body() payload: PsValidateAccountRequestModel
  ): Observable<PsValidateAccountResponseModel> {
    return this.verificationService.validateAccount(payload);
  }
}
