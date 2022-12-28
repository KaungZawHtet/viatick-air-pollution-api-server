# Overview

This API Server simply store PM data from sensors and work like a Log Server.


There are some notable info you need to consider before setting up the backend project.

1. Database Name
2. Port Numbers (Port for Server and Port for MySql Server)
3. NodeJS existence in your machine.
4. MySQL existence in your machine.

## Steps to open

Here are some facts to adapt the project at ease.

1. In this project, DB Name is `viatick_air_pollution`. You should manually add the database into the MySQL Server before the other project setup steps.

2. Simply run the command `node server.js` at the root of `api-server` directory. Then, required data table, `pmlogs`, will automatically be created in the database `viatick_air_pollution`.

3. The required data table is `pmlogs` to store PM data from sensors. Fields are `id`,`sensorId`,`latitude`,`longitude`,`pm2P5`,`timestamp`,`createdAt`,`updatedAt`. Basically, `timestamps` and `createdAt` are the same. timestamp is created from client side and createdAt is created from server side. If there is some big latency between them, difference can be huge.

3. In the api-server directory, you will see `requests` directory. If you VS Code and REST Client extension, you can easily make some api calls with those http files. For not, you can use postman, insomnia and so on.

4. There are 3 main api points: `findAll`, `deleteAll`, `create`. Check the implementation in the `pmlog.controller.js` file.


## Notable Modules

1. Sequelize for ORM

## Engineering Recap

Because this is a test project built within a short time, there are some areas left to consider and build.

1. **Authentication** : Authentication does take part in this test project. For the real world applications, some common Authentication strategies such as Authentication Code, PKCE, Client Credentials, Devic Code, RefreshToken should be considered.

2. **HTTPS** : The Request & Response should be on encrypted communication in the real world application. For this test project, only HTTP is used.

3. **Customized API** : In this test project, the API calls looks like direct draw from database. For example, `createdAt` & `updatedAt` can be only for internal use in the server but they are included in the API call. In the real world applications, seperate data draw for API Call should be designed.

4. **API Versioning** : The API Versioning is not included in this test project.

5. **Pagination** : Paginationless API call can damage the performance for both of server and client on GET requests and should be included in the real world application. For this test project, pagination is not built.

6. **Authorization** : In some projects, authorization is also considered to build for the security purpose.




