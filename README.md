## bundle と mock の起動を行うシェルを実行

`./scripts/openApiBundleAndStartMock.sh`

### swagger-cli で bundle を実行

`swagger-cli bundle -o ./build/openapi.json -t json ./spec/openapi.json`

### bundle した openAPI ファイルで mock を起動する

`prism mock ./build/openapi.json`

## ツールインストール

### prism-cli install

`volta install @stoplight/prism-cli`

## swagger-cli をインストール

 <!-- (分割した openAPI ファイルを結合するツール) -->

`volta install @apidevtools/swagger-cli`
