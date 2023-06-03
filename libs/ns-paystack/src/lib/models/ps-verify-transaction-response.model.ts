import {
    PsBaseModel,
    PsAuthorizationModel,
    PsCustomerModel,
    PsLogModel
} from './';

export interface PsVerifyTransactionResponseModel extends PsBaseModel {
    data: PsVerifyTransactionResponseDataModel;
}

export interface PsVerifyTransactionResponseDataModel {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: unknown;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: string;
    log: PsLogModel;
    fees: number;
    fees_split: unknown;
    authorization: PsAuthorizationModel;
    customer: PsCustomerModel;
    plan: unknown;
    split: unknown;
    order_id: unknown;
    paidAt: string;
    createdAt: string;
    requested_amount: number;
    pos_transaction_data: unknown;
    source: unknown;
    fees_breakdown: unknown;
    transaction_date: string;
    plan_object: unknown;
    subaccount: unknown;
}
