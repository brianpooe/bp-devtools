import { PsBaseModel } from '../common';

export interface PsListCountriesResponseModel extends PsBaseModel {
  data: PsListCountriesResponseDataModel[] | null;
}

export interface PsListCountriesResponseDataModel {
  id: number;
  name: string;
  iso_code: string;
  default_currency_code: string;
  integration_defaults: unknown;
  relationships: PsRelationshipsModel;
}

export interface PsRelationshipsModel {
  currency: PsCurrencyOrIntegrationTypeOrPaymentMethodModel;
  integration_feature: PsIntegrationFeatureModel;
  integration_type: PsCurrencyOrIntegrationTypeOrPaymentMethodModel;
  payment_method: PsCurrencyOrIntegrationTypeOrPaymentMethodModel;
}

export interface PsCurrencyOrIntegrationTypeOrPaymentMethodModel {
  type: string;
  data?: string[] | null;
}

export interface PsIntegrationFeatureModel {
  type: string;
  data?: unknown[] | null;
}
