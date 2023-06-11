import { AxiosError, AxiosResponse } from 'axios';
import {
  catchError,
  map,
  Observable,
  OperatorFunction,
  throwError
} from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';

export const handleResponseAndError = <
  T extends AxiosResponse,
  R
>(): OperatorFunction<T, R> => {
  return (source: Observable<T>): Observable<R> => {
    return source.pipe(
      map(({ data }) => data),
      catchError((error: AxiosError<HttpException>) => {
        console.error(error);
        const errorMessage = error.response?.data || {
          status: false,
          message: 'Something went wrong. Please try again later.'
        };
        switch (error.response?.status) {
          case HttpStatus.BAD_REQUEST:
            return throwError(
              () => new HttpException(errorMessage, HttpStatus.BAD_REQUEST)
            );
          case HttpStatus.UNAUTHORIZED:
            return throwError(
              () => new HttpException(errorMessage, HttpStatus.UNAUTHORIZED)
            );
          case HttpStatus.NOT_FOUND:
            return throwError(
              () => new HttpException(errorMessage, HttpStatus.NOT_FOUND)
            );
          default:
            return throwError(
              () =>
                new HttpException(
                  errorMessage,
                  HttpStatus.INTERNAL_SERVER_ERROR
                )
            );
        }
      })
    );
  };
};
