export interface PsCustomerModel {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    metadata?: unknown;
    customer_code: string;
    id?: number | null;
    risk_action?: string | null;
    international_format_phone: unknown;
}
