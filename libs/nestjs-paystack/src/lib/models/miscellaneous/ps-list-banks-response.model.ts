import { PsBaseModel } from '../common';

export interface PsListBanksResponseModel extends PsBaseModel {
  data?: PsListBanksResponseDataModel[] | null;
}

export interface PsListBanksResponseDataModel {
  name: string;
  slug: string;
  code: string;
  longcode: string;
  gateway?: null;
  pay_with_bank: boolean;
  active: boolean;
  is_deleted: boolean;
  country: string;
  currency: string;
  type: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}
