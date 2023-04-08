import { Subject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Create a new Subject
const subject$ = new Subject();

// Create a new Observable that subscribes to the Subject and handles errors
const errorHandlingObservable$ = subject$.pipe(
    catchError(error => {
        console.error('Error caught:', error);
        // Return a new Observable that emits nothing and completes
        return of();
    })
);

// Subscribe to the errorHandlingObservable
errorHandlingObservable$.subscribe(
    value => console.log('Value:', value),
    error => console.error('Error in subscription:', error),
    () => console.log('Completed')
);

// Emit values and an error
subject$.next(1);
subject$.next(2);
subject$.error(new Error('An error occurred'));
subject$.next(3);
