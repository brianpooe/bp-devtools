import { PsCurrencyModel } from '../common';

export interface PsListBanksRequestModel {
  country: string;
  use_cursor: boolean;
  perPage: number;
  pay_with_bank_transfer?: boolean;
  pay_with_bank?: boolean;
  next?: string;
  previous?: string;
  gateway?: string;
  type?: string;
  currency?: PsCurrencyModel;
}
