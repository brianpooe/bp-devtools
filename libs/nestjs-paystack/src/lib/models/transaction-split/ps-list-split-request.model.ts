export interface PsListSplitRequestModel {
  name: string;
  active: boolean;
  sort_by?: string;
  perPage?: number;
  page?: number;
  from?: string;
  to?: string;
}
