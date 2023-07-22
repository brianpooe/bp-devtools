import { Injectable } from '@nestjs/common';
import {
  PsListBanksRequestModel,
  PsListBanksResponseModel,
  PsListCountriesResponseModel,
  PsListStatesResponseModel,
  PsMiscellaneousService
} from '@devtools-bp/nestjs-paystack';
import { Observable } from 'rxjs';

@Injectable()
export class MiscellaneousService {
  constructor(
    private readonly psMiscellaneousService: PsMiscellaneousService
  ) {}

  listBanks(
    queryParamsPayload: PsListBanksRequestModel
  ): Observable<PsListBanksResponseModel> {
    return this.psMiscellaneousService.listBanks(queryParamsPayload);
  }

  listCountries(): Observable<PsListCountriesResponseModel> {
    return this.psMiscellaneousService.listCountries();
  }

  listStates(country: string): Observable<PsListStatesResponseModel> {
    return this.psMiscellaneousService.listStates(country);
  }
}
