
* interval：無限的產生 element，每隔一段時間就會產生一個 element，並且會一直產生下去，直到 unsubscribe。
* take：只取前幾個 element，與 interval 搭配，可關閉 interval.

```js
interval(1000).pipe(
    tap((x) => console.log(x)),
    take(4),
)
```

* 在 take 這個例子，也能清楚其實 pipe 看似在 observable 後面，在實際是會直接影響源頭運作的，不論其 operator 在 pipe 哪個位置。
* take 只會影響前一個 source，如果前一個 source 之前還有 source，則不受影響，可以參考以下範例

```js
const {fromEvent, concatMap, interval, take, tap} = rxjs;
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
    concatMap(ev => interval(1000).pipe(
        tap((x) => console.log(x)),
        take(4)
    ))
);
result.subscribe(x => console.log(x));
```
* `switchMap` ：將 value 轉換成新的 Observable 並取出新的 observable 裏面的 value，如果 source 連發出數個 values，如果轉成的 observable 是有用類似 `timer` 等 observable，則 values 只會變成 value 。
* `concatMap`：將 source 轉換成新的 source，並且會等待前一個 source 完成後，才會開始下一個 source。

#### Understanding RxJS map, mergeMap, switchMap and concatMap

* [連結](https://luukgruijs.medium.com/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff#:~:text=Use%20mergeMap%20if%20you%20simply,order%20is%20important%20to%20you.)


Mapping data to the format you need is a common task. RxJS comes with a few very neat operators that help you get the job done.

To recap: map is for mapping ‘normal’ values to whatever format you need it to be.

The return value will be wrapped in an Observable again, so you can keep using it in your data stream.

When you have to deal with an ‘inner’ Observable it’s easier to use mergeMap, switchMap or concatMap.

* Use mergeMap if you simply want to flatten the data into one Observable.
* use switchMap if you need to flatten the data into one Observable but only need the latest value.
* use concatMap if you need to flatten the data into one Observable and the order is important to you.

