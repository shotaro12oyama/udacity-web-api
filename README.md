# Project 3: RESTful Web API with Node.js Framework

creating a RESTful web API for own private blockchain. The API project will require two endpoints:

* GET block
* POST block

## Getting Started

```
git clone https://github.com/shotaro12oyama/udacity-web-api.git
cd udacity-web-api
node api.js
```

### Prerequisites & Installing

#### Node.JS 
visit https://nodejs.org/en/, download package and install.

#### Node.JS Components

```
npm install crypto-js —save
npm install level --save
npm install express --save

```

## Endpoints

The endpoints implemented are:

### GET block/{height}

example: 
```
curl http://localhost:8000/block/0
```
result:
```{"hash":"efa0bb5e505097077d8dee9a27d7d4cd36623653a7414fb0f95c08218c38bd4b","height":0,"body":"First block in the chain - Genesis block","time":"1539150167","previousBlockHash":""}oyama
```


### POST /block

example:
``` 
curl -X "POST" "http://localhost:8000/block" -H 'Content-Type: application/json' -d $'{"body":"block body contents"}'
```

result:
```
Block requested {"hash":"d275d189babdb8b824247d277b806fd6a13fec09d23b8d0ce51294ab51ad83cb","height":14,"body":{"body":"block body contents"},"time":"1539593154","previousBlockHash":"b66f2d336cd5fd381f3752fe9baa32d6202991eba4c73285e935cb121289aa0d"}
Block added 15
::1 - - [15/Oct/2018:09:17:57 +0000] "POST /block HTTP/1.1" 200 - "-" "curl/7.60.0"
```



