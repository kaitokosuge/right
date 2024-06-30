# React TypeScript Vite環境の整備されたコードセット

pnpm 8.6.6

node 20.12.2

## **reactセットアップ**

```
pnpm create vite right --template react-ts
```

```
cd right
```
```
pnpm install
```
```
pnpm run dev
``` 

(https://vitejs.dev/guide/)

## **eslintセットアップ**

 viteであれば何もせず`pnpm run lint` を実行できる。

試しに使っていな変数やany注釈の変数を定義するとエラーを吐いてくれる

reactで推奨されているlint項目を設定

```
pnpm install eslint eslint-plugin-react --save-dev
```

**eslintrc.cjs**

```jsx
extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
],
settings: {
    react: {
        version: "detect",
    },
},
```

(https://www.npmjs.com/package/eslint-plugin-react)

## **prettierセットアップ**

```
pnpm add --save-dev --save-exact prettier
```

(https://prettier.io/docs/en/install.html)

「.prettierrc」をトップレベルで作成、下記を追記（お好み）。自分は`"tabWidth": 4,` が好み

```
{ "tabWidth": 4, "semi": true }
```

（https://prettier.io/docs/en/options)

package.jsonに下記「format」追記

```json
"scripts": {
        "dev": "vite",
        "build": "tsc -b && vite build",
        "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview",
        "format": "pnpm exec prettier . --write"
    },
```

`npm run format`でpritteirによるフォーマットが可能に

eslintとprettierの競合を防ぐ

```
pnpm install --save-dev eslint-config-prettier
```

```jsx
extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier",
    ],
```

（https://github.com/prettier/eslint-config-prettier)
