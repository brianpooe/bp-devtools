import { Injectable } from '@nestjs/common';
import {
    InitializeTransactionRequestModel,
    InitializeTransactionResponseModel,
    NsPaystackService,
    VerifyTransactionResponseModel
} from '@bp-devtools/ns-paystack';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class TransactionService {
    constructor(private readonly nsPaystackService: NsPaystackService) {}

    initializeTransaction(
        payload: InitializeTransactionRequestModel
    ): Observable<InitializeTransactionResponseModel> {
        return this.nsPaystackService.initializeTransaction(payload);
    }

    verifyTransaction(
        reference: string
    ): Observable<VerifyTransactionResponseModel> {
        return this.nsPaystackService.verifyTransaction(reference).pipe(
            catchError((error) => {
                console.log(error);
                return throwError(() => error);
            })
        );
    }
}
