import { NsPaystackBaseModel } from './ns-paystack-base.model';

export interface VerifyTransactionResponseModel extends NsPaystackBaseModel {
    data: Data;
}

export interface Data {
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
    log: Log;
    fees: number;
    fees_split: unknown;
    authorization: Authorization;
    customer: Customer;
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

export interface Log {
    start_time: number;
    time_spent: number;
    attempts: number;
    errors: number;
    success: boolean;
    mobile: boolean;
    input: unknown[];
    history: History[];
}

export interface History {
    type: string;
    message: string;
    time: number;
}

export interface Authorization {
    authorization_code: string;
    bin: string;
    last4: string;
    exp_month: string;
    exp_year: string;
    channel: string;
    card_type: string;
    bank: string;
    country_code: string;
    brand: string;
    reusable: boolean;
    signature: string;
    account_name: unknown;
}

export interface Customer {
    id: number;
    first_name: unknown;
    last_name: unknown;
    email: string;
    customer_code: string;
    phone: unknown;
    metadata: unknown;
    risk_action: string;
    international_format_phone: unknown;
}
