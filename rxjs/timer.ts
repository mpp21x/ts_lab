import {concatMap, of, timer} from "rxjs";

const source = of(1, 2, 3);

/**
 *
 * Creates an observable that will wait for a specified time period, or exact date, before emitting the number 0.
 */
timer(3000)
    .pipe(concatMap(() => source))
    .subscribe(console.log);
