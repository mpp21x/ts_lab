
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
* `switchMap` ：將 source 轉換成新的 source，並且會取消前一個 source，只會保留最後一個 source。
* `concatMap`：將 source 轉換成新的 source，並且會等待前一個 source 完成後，才會開始下一個 source。
