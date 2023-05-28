export interface PsAuthorizationModel {
    authorization_code?: string | null;
    bin?: string | null;
    last4?: string | null;
    exp_month?: string | null;
    exp_year?: string | null;
    card_type?: string | null;
    bank?: string | null;
    country_code?: string | null;
    brand?: string | null;
    account_name?: string | null;
}
