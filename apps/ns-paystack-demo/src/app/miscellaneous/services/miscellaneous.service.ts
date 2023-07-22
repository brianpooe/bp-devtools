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
  constructor(private readonly psMiscellaneous: PsMiscellaneousService) {}

  listBanks(
    queryParamsPayload: PsListBanksRequestModel
  ): Observable<PsListBanksResponseModel> {
    return this.psMiscellaneous.listBanks(queryParamsPayload);
  }

  listCountries(): Observable<PsListCountriesResponseModel> {
    return this.psMiscellaneous.listCountries();
  }

  listStates(country: string): Observable<PsListStatesResponseModel> {
    return this.psMiscellaneous.listStates(country);
  }
}
