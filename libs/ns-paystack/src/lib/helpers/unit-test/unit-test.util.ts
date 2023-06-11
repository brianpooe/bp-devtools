import { catchError, EMPTY, finalize, Observable, take, timeout } from 'rxjs';

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
