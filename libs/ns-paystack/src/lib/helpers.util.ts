import {
    catchError,
    map,
    Observable,
    OperatorFunction,
    throwError,
} from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { HttpException } from '@nestjs/common';

export const handleResponseAndError = <
    T extends AxiosResponse,
    R
>(): OperatorFunction<T, R> => {
    return (source: Observable<T>): Observable<R> => {
        return source.pipe(
            map(({ data }) => data),
            catchError((error: AxiosError<HttpException>) => {
                console.error(error.response);
                return throwError(() => error.response?.data);
            })
        );
    };
};
