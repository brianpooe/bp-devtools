import { PsBaseModel } from './ps-base.model';
import { PsAuthorizationModel } from './ps-authorization.model';
import { PsCustomerModel } from './ps-customer.model';

export interface PsVerifyTransactionResponseModel extends PsBaseModel {
    data: PsVerifyTransactionDataEntity;
}

export interface PsVerifyTransactionDataEntity {
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
    log: PsVerifyTransactionLog;
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

export interface PsVerifyTransactionLog {
    start_time: number;
    time_spent: number;
    attempts: number;
    errors: number;
    success: boolean;
    mobile: boolean;
    input: unknown[];
    history: PsVerifyTransactionHistory[];
}

export interface PsVerifyTransactionHistory {
    type: string;
    message: string;
    time: number;
}
