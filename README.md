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

## mamp など、既存の db に接続するには。。。

https://bgtu-techblog.com/2022/04/02/%E3%80%90prisma%E3%80%91%E6%97%A2%E5%AD%98%E3%81%AEdb%E3%81%8B%E3%82%89data-model%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/
<br>を参考にする。
