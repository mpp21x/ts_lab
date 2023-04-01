import {interval, take, shareReplay, tap} from 'rxjs';

const shared$ = interval(2000).pipe(
    tap(x => console.log(`tap: ${x}`)),
    take(6),
    shareReplay(3)
);

shared$.subscribe(x => console.log('sub A: ', x));
shared$.subscribe(y => console.log('sub B: ', y));

setTimeout(() => {
    shared$.subscribe(y => console.log('sub C: ', y));
}, 11000);


// 2000
// 4000
// 6000
// 8000
// 10000
// 12000
