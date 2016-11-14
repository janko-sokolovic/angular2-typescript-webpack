# Simple app using angular2, typescript, webpack and docker

#Stack used#
* Angular 2
* Typescript
* Webpack
* Docker
* TsLint
* Karma
* Jasmine
* Sass


# Installing and running on local #
```javascript
npm i
npm run start
npm run build (build for production)
npm test
```

# Testing production code on docker container #
## Build image ##
```javascript
docker build -t angular2-typescript-webpack .
```
## Run container ##
```javascript
docker images (find the id of image)
docker run -p 80:80 -it [image id]
```

### Open localhost in your browser ###
