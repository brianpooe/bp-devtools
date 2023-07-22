import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../custom-http/custom-http.service';
import {
  handleResponseAndError,
  PsListBanksRequestModel,
  PsListBanksResponseModel,
  PsListStatesResponseModel,
  PsListCountriesResponseModel
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

  /**
   * Get a list of states for a country for address verification
   * @param country
   */
  listStates(country: string): Observable<PsListStatesResponseModel> {
    return this.httpService
      .get<PsListBanksResponseModel>(
        `address_verification/states?country=${country}`
      )
      .pipe(handleResponseAndError());
  }

  /**
   * Gets a list of countries that Paystack currently supports
   */
  listCountries(): Observable<PsListCountriesResponseModel> {
    return this.httpService
      .get<PsListBanksResponseModel>(`country`)
      .pipe(handleResponseAndError());
  }
}
