## 参考情報

このながれで db 作成<br>
https://numb86-tech.hatenablog.com/entry/2022/03/26/180052

```
yarn run prisma migrate dev --name init
または
npx prisma migrate dev --name init
```

で、schema.prisma に記載したのモデルが定義される。name は migration ファイルのフォルダ名。<br>
これを実行してできたのが( /migrations/20230916051721_init/migration.sql ）

## 型定義ファイル

前述の migrate を実行すると、prisma/client/index.d.ts に型定義ファイルが作成される

## クエリ実行

```
yarn run ts-node-dev src/index.ts
または
npx ts-node-dev src/index.ts
```
