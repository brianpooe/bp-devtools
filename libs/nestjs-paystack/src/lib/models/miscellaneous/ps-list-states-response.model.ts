import { PsBaseModel } from '../common';

export interface PsListStatesResponseModel extends PsBaseModel {
  data: PsListStatesDataModel[] | null;
}

export interface PsListStatesDataModel {
  name: string;
  slug: string;
  abbreviation: string;
}
