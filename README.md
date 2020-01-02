## Hotels api

- CRUD rest api example 
- two microservices local `http://localhost:3000`, production `https://hotelsapp.adrianhorizon.now.sh`
- deploy production use [Zeit](Zeit.co)

## Install project

- `$ npm install`

### Set Enviroment to development mode

- `$ npm run init`

### Run project

- `$ npm run dev`

## Docker compile

- `$ npm run docker`

## Docker compose

- docker-compose build
- docker-compose up

### requirements

- `Nodejs`
- `Docker`
- `MongoDb`

### USE hotels api development Postman or soapUi

- GET 
```
curl --location --request GET 'http://localhost:3001/api/hotels'
```

- POST
```
curl --location --request POST 'http://localhost:3001/api/hotels' \
--header 'Content-Type: application/json' \
--data-raw '{
   "name":"Hotel viña del mar",
   "stars":"1",
   "images":[
      "https://a0.muscache.com/im/pictures/d2fff754-183d-43a9-88d8-8081cb997316.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/a449a829-0ffc-40d7-9c40-54f19d2bc414.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/3db93c37-8360-453d-a3a3-c3155b576d8f.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/2ae8f587-136b-40cc-8be7-5b4563c7fc87.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/d1221a6f-09d9-4c0a-83bf-601763a9826a.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/9b3955e1-0f59-4e2e-b7d6-70a817087b38.jpg?aki_policy=xx_large"
   ],
   "price":"1800"
}'
```

- PUT
```
curl --location --request PUT 'http://localhost:3001/api/hotels/5e0d4e07a246c97e9a07d729' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Hotel aventura",
    "stars": "5",
    "images": [
        "https://a0.muscache.com/im/pictures/d2fff754-183d-43a9-88d8-8081cb997316.jpg?aki_policy=xx_large"
    ],
    "price": "3800"
}'
```

- DELETE
```
curl --location --request DELETE 'http://localhost:3001/api/hotels/5e0d37dcad07d956423d9de8'
```

### File Structure

```
├── config
├── lib
├── routes
├── services
├── test
└── utils
```

