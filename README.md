# インストール
リポジトリをClone

```
$ git@github.com:fktlnz/react-hook-counter.git
```

# ビルド、スタート
```
$ cd react-hook-counter

$ npm i

$ npm start
```
http://127.0.0.1:3000 にアクセスしてアプリ開始  

<br>

# 【アプリ概要】
React Hooksでタイマー機能を実装しました。(useCounter.tsx)  
demoのgifのようにカウントアップとカウントダウンの両パターンに対応してます。

# demo
カウントアップとカウントダウンの両方に対応
![movie2.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/187747/17cefaaa-9a3f-f1ee-bbbf-93ccbc174b96.gif)


# 使い方

| step | must/want| 説明 |
|:-|:-:|:-|
|1. useCounter.tsxを読み込み|  must | カウントを表示したいtsxファイルに読み込む  |
|2. 必要な変数、関数を取り込む | must  | 必要な変数、関数を取り込む  |
|3. カウントを表示| must  | カウントを表示したい箇所に**count**を記載  |
|4. カウント終了を検知| want  | カウント終了を検知してなにかする  |


  
<br>

## [補足] 2. 必要な変数、関数を取り込む
- 読み込み例
最低限、countとstartCountがあればOK
```tsx:
const {count, isTimerEnd, initCount, startCount} = useCounter();
```


- 取り込める変数

| 名前| Type|概要|
|:-:|:-:|:-|
| *count*  | number | カウント情報|
| *isTimerEnd*  | boolean | ***true***： カウントが終了した<br>***false***：カウント中 or リセット状態|

- 取り込める関数

| 名前|引数・返り値|概要|
|:-:|:-|:-|
| *initCount*  | f(引数なし)：返り値なし| カウントをリセット（*count*を0にして、isTimerEndをfalseとする）|
| *startCount*  | f( **upLimit?**：number, **downLimit?**：number, **direction?**：string)：返り値なし<br>**upLimit**：カウント上限<br>**downLimit**：カウント下限<br>**direction**：どちらにカウントするか（"up"の場合、下限⇒上限に向かってカウント、"down"の場合、上限⇒下限に向かってカウント）| カウントを開始する|

**(startCountの呼び出し例)**

```tsx
//引数なし：10⇒0のカウントダウンになる（デフォルト設定）
//デフォルト設定は、useCounter.tsx(4,5,6行目で変更可)
startCount();

//100⇒0のカウントダウン
startCount(100, 0, "down");

//0⇒100のカウントアップ
startCount(100, 0, "up");
```