import {
  catchError,
  EMPTY,
  finalize,
  Observable,
  take,
  throwError,
  timeout
} from 'rxjs';
import { AxiosError } from 'axios';
import { HttpException } from '@nestjs/common';
import { handleResponseAndError } from '../handle-response-and-error/handle-response-and-error.util';
import { SubscriberSpy, subscribeSpyTo } from '@hirez_io/observer-spy';

interface ObservableTestingModel<T> {
  actualObservable: Observable<T>;
  done: (resp?: unknown) => void;
}

export const expectObservable = <T>(
  model: ObservableTestingModel<T>,
  matcher?: (result: T) => void,
  finalized?: () => void
): void => {
  model.actualObservable
    .pipe(
      timeout(60000),
      take(1),
      catchError((e: Error) => {
        model.done(e);

        return EMPTY;
      }),
      finalize(() => finalized?.())
    )
    .subscribe((result: T) => {
      matcher?.(result);
      model.done();
    });
};

export const getThrownError = (
  response: AxiosError<HttpException>
): SubscriberSpy<unknown> => {
  return subscribeSpyTo(
    throwError(() => response).pipe(handleResponseAndError()),
    {
      expectErrors: true
    }
  );
};
