let Rx = require('rxjs/Rx');
let fetch = require('node-fetch');

/** 
** fetch, flatmap and observable. 
**/
const fetchSubscription = Rx.Observable
    .from(fetch('http://swapi.co/api/people/1'))
    .flatMap((res) => Rx.Observable.from(res.json()))
    .subscribe((fetchRes) => {
        console.log('fetch sub', fetchRes);
    });

/** 
** Create. 
**/

let createObs = Rx.Observable.create(observer => {
    observer.next(1);
});

createObs.subscribe(data => {
    console.log(`create obs: ${data}`);
});


/** 
** range.
** form => Rx.Observable.from([2,3,4,6,54])
** promise => Rx.Observable.from(new Promise(resolve, reject))
** of => Rx.Observable.of(1,2)

**/

let rangeObs = Rx.Observable.range(0, 3);

rangeObs.subscribe(data => {
    console.log(`range obs: ${data}`);
});

/**
 * combine latest, concat, merge, zip
 */

let source1 = Rx.Observable.interval(100)
    .map(val => "source1 " + val).take(2);
let source2 = Rx.Observable.interval(50)
    .map(val => "source2 " + val).take(1);
let combineLatest = Rx.Observable.concat(
    source1,
    source2
);
combineLatest.subscribe(data => console.log(data));

/** 
 * max, min, sum, reduce, average
 */

let max = Rx.Observable.of(2, 4, 5, 7, 8, 3, 4, 67).reduce(
    (accumulated, current) => {
        return accumulated + current;
    });
max.subscribe(data => {
    console.log(`data from reduce: ${data}`);
});

/**
 * interval, timer, delay, debounce
 */

 var interval = Rx.Observable.interval(1000).take(3);
 interval.subscribe(data=>{
    console.log(`data from interval: ${data}`);
 });