import { PsCustomerFieldsEntityModel } from './ps-customer-fields-entity.model';

export interface PsMetadataModel {
  custom_fields?: PsCustomerFieldsEntityModel[] | null;
  referrer?: string;
}
