import { PsHistoryModel } from './ps-history.model';

export interface PsLogModel {
  start_time: number;
  time_spent: number;
  attempts: number;
  errors: number;
  success: boolean;
  mobile: boolean;
  input?: null[] | null;
  history?: PsHistoryModel[] | null;
}
