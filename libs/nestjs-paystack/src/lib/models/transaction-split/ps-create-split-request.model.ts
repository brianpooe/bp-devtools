export interface PsCreateSplitRequestModel {
  name: string;
  type: string;
  currency: string;
  subaccounts: SubaccountsEntityCreatedSplit[];
  bearer_type: string;
  bearer_subaccount: string;
}

export interface SubaccountsEntityCreatedSplit {
  subaccount: string;
  share: number;
}
