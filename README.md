# The Movie Data Base API IN NODEJS

With the movie data base api you can directly request theMDB API to get movies list castings etc...

## Requirements

A Mongose Data Base

## Installation

Use the package manager [npm](https://www.npmjs.com) to install theMDBAPI.

```bash
npm install
```
## Run the app

```bash
npm start
```
## Run the tests

```bash
npm test
```

## Configuration

Open the .env file and then you can change the port
the api key and the latest id of the movie database API (to reduce
or increase the rand spectrum for the rand route) and the mongose database configuration.

exemple :
```bash
PORT = 8080
API_KEY = 123456789
LATEST = 10000
DATABASE_PORT = 27017
DATABASE_NAME = theMDB
```
## Usage exemple

Open a terminal and execute oone of this commands or use Postman app
```shell script
curl --location --request GET 'http://localhost:3000/api/movies/casting/random'
curl --location --request GET 'http://localhost:3000/api/movies/{movie_id}/casting'
curl --location --request GET 'http://localhost:3000/api/movies/{movie_id}'
curl --location --request GET 'http://localhost:3000/api/movies/movie/latest'
curl --location --request GET 'http://localhost:3000/api/movies/movie/random'
curl --location --request GET 'http://localhost:3000/api/movies/search?name=%27star%20wars%27'
```
Notice for random movies you can specify in your query a "latest" param 
to have a wider spectrum
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
