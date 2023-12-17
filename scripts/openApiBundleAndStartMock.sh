echo "remove build folder"
rm -rf ./build

if [ $? -eq 0 ]; then
  echo "build folder removed"
else
  echo "build folder not found"
fi 

echo "create build folder"
swagger-cli bundle -o ./build/openapi.json -t json ./spec/openapi.json

echo "start prism mock server"
prism mock ./build/openapi.json
