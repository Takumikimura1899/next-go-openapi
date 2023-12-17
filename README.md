## prism-cli install

`volta install @stoplight/prism-cli`

## mock 起動

`prism mock ./spec/openapi.json`

## swagger-cli をインストール

 <!-- (分割した openAPI ファイルを結合するツール) -->

`volta install @apidevtools/swagger-cli`

## swagger-cli で bundle を実行

`swagger-cli bundle -o ./build/openapi.json -t json ./spec/openapi.json`
