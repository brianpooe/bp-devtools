import { PsBaseModel } from '../common';

export interface PsResolveCardBinResponseModel extends PsBaseModel {
  data: PsResolveCardBinResponseDataModel;
}

export interface PsResolveCardBinResponseDataModel {
  bin: string;
  brand: string;
  sub_brand: string;
  country_code: string;
  country_name: string;
  card_type: string;
  bank: string;
  linked_bank_id: number;
}
