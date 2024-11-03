# TodoApp with Create Solidity and React App(Truffle)
```
npm install -g truffle  
```
```
truffle version
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
参考 :https://www.techpit.jp/courses/36/curriculums/37/sections/302/parts/1010

https://zenn.dev/json_hardcoder/articles/102fa6aa4f3880
# npm ver
├── @testing-library/jest-dom@5.16.5  
├── @testing-library/react@11.2.7  
├── @testing-library/user-event@12.8.3  
├── bootstrap@5.2.3  
├── react-beautiful-dnd@13.1.1  
├── react-bootstrap@1.0.1  
├── react-dom@17.0.2  
├── react-scripts@5.0.0  
├── react@17.0.2  
├── web-vitals@0.2.4  
└── web3@1.9.0 
### ガナッシュにコンパイル＆デプロイする方法
```
truffle compile　　コンパイル
truffle migrate 　　デプロイ
truffle migrate 　　再デプロイ
```
### testnetにコンパイル＆デプロイする方法

```
truffle compile　　コンパイル
truffle migrate --network sepolia　　デプロイ
truffle migrate --network sepolia --reset　　再デプロイ
```

古い記事なので
 npm add react-bootstrap@1.0.1をしないとエラー  


### Top level awaitを有効にする方法
```
yarn add -D webpack webpack-cli webpack-dev-server babel-loader @babel/core  @babel/preset-env @babel/preset-react html-webpack-plugin
```
```
yarn add react react-dom
```


### .envの形式  
```
PRIVATE_KEY=メタマスクの秘密鍵  
INFURA_PROJECT_ID=INFURAのapiキー 
```

## 実行方法：ルート(package.jsonの階層)で`npm start`(詳しくは↓)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---



## Truffleプロジェクトを作成するためのステップバイステップガイド

Truffleは、Ethereumスマートコントラクトの開発、テスト、デプロイを効率化するためのフレームワークです。以下に、Truffleプロジェクトを作成するためのステップバイステップガイドを示します。

---

## 1. 前提条件の確認

Truffleを使用するためには、以下のソフトウェアがインストールされている必要があります。

- **Node.js**: JavaScriptランタイム。バージョン12.x以上を推奨。
- **npm**: Node.jsパッケージマネージャー（Node.jsに同梱されています）。
- **Git**: バージョン管理システム（オプションですが推奨）。

## 2. Node.jsとnpmのインストール

まだインストールしていない場合は、[Node.jsの公式サイト](https://nodejs.org/)から最新のLTS（長期サポート）バージョンをダウンロードしてインストールしてください。インストール後、ターミナル（またはコマンドプロンプト）で以下のコマンドを実行して、正しくインストールされたか確認します。

```bash
node -v
npm -v
```

## 3. Truffleのインストール

グローバルにTruffleをインストールします。ターミナルで以下のコマンドを実行してください。

```bash
npm install -g truffle
```

インストールが完了したら、以下のコマンドでTruffleのバージョンを確認します。

```bash
truffle version
```

## 4. 新しいプロジェクトの作成

Truffleプロジェクトを作成したいディレクトリに移動し、以下のコマンドを実行して新しいプロジェクトを初期化します。

```bash
mkdir my-truffle-project
cd my-truffle-project
truffle init
```

このコマンドにより、基本的なディレクトリ構造が作成されます。

## 5. プロジェクト構造の確認

`truffle init`を実行すると、以下のようなディレクトリ構造が生成されます。

```
my-truffle-project/
├── contracts/
│   └── Migrations.sol
├── migrations/
│   └── 1_initial_migration.js
├── test/
│   └── Migrations.test.js
├── truffle-config.js
```

- **contracts/**: スマートコントラクトのソースコードを配置するディレクトリ。
- **migrations/**: デプロイメントスクリプトを配置するディレクトリ。
- **test/**: テストスクリプトを配置するディレクトリ。
- **truffle-config.js**: Truffleの設定ファイル。

## 6. ローカル開発ブロックチェーンのセットアップ（オプション）

開発中は、ローカルでブロックチェーンを実行するためにGanacheを使用することが一般的です。

### Ganacheのインストール

GanacheにはGUI版とCLI版があります。ここではCLI版のインストール方法を示します。

```bash
npm install -g ganache-cli
```

### Ganacheの起動

別のターミナルウィンドウを開き、以下のコマンドでGanacheを起動します。

```bash
ganache-cli
```

デフォルトでは、ローカルの8545ポートでEthereumブロックチェーンが起動します。

## 7. Truffleの設定

`truffle-config.js`ファイルを開き、ローカルのGanacheネットワークを設定します。以下は基本的な設定例です。

```javascript
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // ローカルホスト
      port: 8545,            // Ganacheのデフォルトポート
      network_id: "*",       // 任意のネットワークID
    },
  },
  // Solidityコンパイラの設定など他の設定もここに追加可能
};
```

## 8. スマートコントラクトの作成

`contracts/`ディレクトリに新しいスマートコントラクトファイルを作成します。例えば、`HelloWorld.sol`というファイルを作成します。

```solidity
// contracts/HelloWorld.sol
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }
}
```

## 9. マイグレーションスクリプトの作成

`migrations/`ディレクトリに新しいマイグレーションファイルを作成します。例えば、`2_deploy_contracts.js`というファイルを作成します。

```javascript
// migrations/2_deploy_contracts.js
const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld, "Hello, Truffle!");
};
```

## 10. コントラクトのコンパイル

以下のコマンドでスマートコントラクトをコンパイルします。

```bash
truffle compile
```

成功すると、`build/contracts/`ディレクトリにコンパイル済みのJSONファイルが生成されます。

## 11. コントラクトのデプロイ

ローカルのGanacheネットワークにコントラクトをデプロイします。

```bash
truffle migrate
```

初回実行時にはすべてのマイグレーションが適用されます。再度実行する場合は、以下のコマンドでリセットして再デプロイできます。

```bash
truffle migrate --reset
```

## 12. スマートコントラクトとのインタラクション

Truffleコンソールを使用してデプロイされたコントラクトと対話できます。

```bash
truffle console
```

コンソールが開いたら、以下のように操作します。

```javascript
// コントラクトのインスタンスを取得
const instance = await HelloWorld.deployed()

// メッセージを取得
const message = await instance.message()
console.log(message) // "Hello, Truffle!"

// メッセージを更新
await instance.setMessage("Hello, Ethereum!")

// 更新後のメッセージを取得
const newMessage = await instance.message()
console.log(newMessage) // "Hello, Ethereum!"
```

## 13. テストの実行

`test/`ディレクトリにテストスクリプトがある場合、以下のコマンドでテストを実行できます。

```bash
truffle test
```

例えば、`HelloWorld.test.js`というファイルを作成してテストを記述できます。

```javascript
// test/HelloWorld.test.js
const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", accounts => {
  it("should initialize with correct message", async () => {
    const instance = await HelloWorld.deployed();
    const message = await instance.message();
    assert.equal(message, "Hello, Truffle!", "Initial message is incorrect");
  });

  it("should update the message correctly", async () => {
    const instance = await HelloWorld.deployed();
    await instance.setMessage("Hello, Ethereum!", { from: accounts[0] });
    const newMessage = await instance.message();
    assert.equal(newMessage, "Hello, Ethereum!", "Message was not updated correctly");
  });
});
```

## 14. デプロイ先のネットワーク設定（オプション）

実際のEthereumネットワーク（例：Ropsten、Rinkeby、Mainnet）にデプロイする場合は、`truffle-config.js`に対応するネットワーク設定を追加します。例えば、Infuraを使用する場合の設定例です。

```javascript
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "your mnemonic here";

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID`),
      network_id: 3,       // RopstenのネットワークID
      gas: 5500000,        // ガスリミット
      confirmations: 2,    // 確認待ちのブロック数
      timeoutBlocks: 200,  // タイムアウトまでのブロック数
      skipDryRun: true     // デプロイ前のテストをスキップ
    },
  },
  // 他の設定
};
```

**注意**: 実際のネットワークにデプロイする際は、セキュリティに十分配慮し、秘密鍵やニーモニックフレーズを安全に管理してください。

## 15. その他のリソース

- [Truffle公式ドキュメント](https://www.trufflesuite.com/docs/truffle/overview)
- [Ethereum公式ドキュメント](https://ethereum.org/ja/developers/docs/)
- [Solidity公式ドキュメント](https://docs.soliditylang.org/ja/v0.8.21/)

---

以上が、Truffleプロジェクトを作成するための基本的な手順です。プロジェクトの要件に応じて、さらに詳細な設定やツールの導入を検討してください。Truffleは多機能で柔軟性が高いため、公式ドキュメントを参考にしながら自分のプロジェクトに最適な設定を見つけてください。
