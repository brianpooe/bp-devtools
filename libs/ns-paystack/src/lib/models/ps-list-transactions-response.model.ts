import { PsBaseModel } from './ps-base.model';
import { PsCustomerModel } from './ps-customer.model';
import { PsAuthorizationModel } from './ps-authorization.model';

export interface PsListTransactionsResponseModel extends PsBaseModel {
    data?: PsListTransactionsDataEntity[] | null;
}

export interface PsListTransactionsDataEntity {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message?: null;
    gateway_response: string;
    paid_at?: null;
    created_at: string;
    channel: string;
    currency: string;
    ip_address?: null;
    metadata?: PsListTransactionsMetadata | null;
    timeline?: null;
    customer: PsCustomerModel;
    authorization: PsAuthorizationModel;
    plan?: unknown | null;
    requested_amount: number;
    log?: null;
    fees?: null;
    paidAt?: string | null;
    createdAt?: string | null;
}

export interface PsListTransactionsMetadata {
    custom_fields?: PsListTransactionsCustomFieldsEntity[] | null;
}

export interface PsListTransactionsCustomFieldsEntity {
    display_name: string;
    variable_name: string;
    value: string;
}
