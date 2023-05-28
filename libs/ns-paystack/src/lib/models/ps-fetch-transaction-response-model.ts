import {
    PsAuthorizationModel,
    PsBaseModel,
    PsCustomerModel,
    PsLogModel,
    PsMetadataModel
} from './';

export interface PsFetchTransactionResponseModel extends PsBaseModel {
    data: PsFetchTransactionResponseDataModel;
}

export interface PsFetchTransactionResponseDataModel {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message?: null;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: PsMetadataModel;
    log: PsLogModel;
    fees: number;
    fees_split?: null;
    authorization: PsAuthorizationModel;
    customer: PsCustomerModel;
    plan: unknown;
    subaccount: unknown;
    order_id?: null;
    paidAt: string;
    createdAt: string;
    requested_amount: number;
}
