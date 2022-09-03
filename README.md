
# babylonjs-webpack-sample
# 背景
webpack+Babylon.jsで3D表現するWebページを作るためのサンプルページです。

# 動作環境

- Node.js v16.14.0

# Setup

clone
``` 
git git@github.com:iwaken71/babylonjs-webpack-sample.git
cd babylonjs_webpack_template
```

SetUp

```
npm install
```

Dev実行

```
npm run dev
```

Build
./dist以下にbundleファイルができる
```
npm run build
```

dist以下のファイルをホスティングするとWebページとして動作する。

# 使い方

src/index.jsの[createScene関数](https://github.com/iwaken71/babylonjs-webpack-sample/blob/02386c6a038c3d5df0a4a988f06d0b8c427cedb2/src/index.js#L10)

```js
const createScene = async function () {
    //PlayGroundと同じ内容を書く
}
```

Inspectorの表示。不要ならば消す。([source code](https://github.com/iwaken71/babylonjs-webpack-sample/blob/3b0a8a6b00328651373a8a2b513a18fb316b7160/src/index.js#L40))
```js
// show inspector
scene.debugLayer.show(); 
```
