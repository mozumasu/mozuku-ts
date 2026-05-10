# mozuku-ts

TypeScript / JavaScript の学習用リポジトリ。

開発環境は Nix flake で提供しているので、誰がどの OS で clone しても同じツールチェインで動作します。

---

## セットアップ

### 前提

- [Nix](https://nixos.org/download.html) がインストール済みで flakes が有効になっていること
  （Determinate Nix を入れていればデフォルトで有効）

対応プラットフォーム: `aarch64-darwin` / `x86_64-darwin` / `aarch64-linux` / `x86_64-linux`

### 開発シェルに入る

リポジトリ直下で:

```sh
nix develop
```

初回は nixpkgs からツールをダウンロードするため少し時間がかかります。
2 回目以降はキャッシュされ即座に立ち上がります。

devShell に入ると以下が `PATH` に揃います:

| 種別          | ツール                                                            |
| ------------- | ----------------------------------------------------------------- |
| ランタイム    | Node.js 22 (LTS) / Bun                                            |
| パッケージ管理 | npm (Node.js 同梱) / pnpm / yarn                                  |
| TypeScript    | typescript (`tsc`)                                                |
| LSP           | typescript-language-server / vscode-langservers-extracted         |
| Linter/Format | biome / prettier / eslint                                         |
| その他        | jq / git                                                          |

抜けるときは通常の `exit` でOK。

### direnv を使う場合（任意）

`.envrc` に `use flake` と書いておけば、ディレクトリに入った瞬間に
自動で環境が立ち上がります（必須ではない）。

---

## ロードマップ

このリポジトリは下記の順番で進めます。

### Step 0: 学習用プロジェクトの初期化

まだファイルは置かない。必要になったタイミングで下記のコマンドを **1 つずつ** 実行して
`package.json` / `tsconfig.json` を生成する。

#### Bun で始める場合（推奨）

1. `package.json` と `tsconfig.json` を一括生成する

   ```sh
   bun init
   ```

   （対話プロンプトはひとまず Enter で進めて OK）

#### Node.js + npm で始める場合

1. `package.json` を生成する

   ```sh
   npm init -y
   ```

2. TypeScript を `devDependencies` に追加する

   ```sh
   npm install --save-dev typescript
   ```

3. `tsconfig.json` を生成する

   ```sh
   npx tsc --init
   ```

学習中はここで生成されるテンプレートで十分。本格的に運用するときに改めて設定を見直す。

### Step 1: JavaScript の最初の一歩

<https://sorafujitani.me/blog/js-first-step/>

### Step 2: TypeScript の最初の一歩

<https://sorafujitani.me/blog/ts-first-step/>

### Step 3: TBD

---

## トラブルシュート

- `nix develop` でフリーズする / コマンドが見つからない
  → `nix flake update` で input を更新してから再試行
- 古いシェルが残って `command not found`
  → 一度 `exit` してから再度 `nix develop`
