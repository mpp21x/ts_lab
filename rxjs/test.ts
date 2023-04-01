import {of, timer} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';

// Function that simulates an HTTP request with a delay
function makeRequest(value) {
    return timer(2000 * value).pipe(
        tap(() => console.log(`Request ${value} completed`)),
    );
}

const source$ = of(1, 2, 3);

source$
    .pipe(
        switchMap(value => {
            console.log(`Starting request ${value}`);
            return makeRequest(value);
        }),
    )
    .subscribe(result => console.log(`Result: ${result}`));

