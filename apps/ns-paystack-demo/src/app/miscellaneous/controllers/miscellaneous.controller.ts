import { Controller, Get, Query } from '@nestjs/common';
import { MiscellaneousService } from '../services/miscellaneous.service';
import {
  PsListBanksRequestModel,
  PsListBanksResponseModel
} from '@devtools-bp/nestjs-paystack';
import { Observable } from 'rxjs';

@Controller()
export class MiscellaneousController {
  constructor(private readonly miscellaneousService: MiscellaneousService) {}

  @Get('bank')
  listBanks(
    @Query() queryParamsPayload: PsListBanksRequestModel
  ): Observable<PsListBanksResponseModel> {
    return this.miscellaneousService.listBanks(queryParamsPayload);
  }
}
