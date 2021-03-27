# The Movie Data Base API IN NODEJS

With the movie data base api you can directly request theMDB API to get movies list castings etc...

## Installation

Use the package manager [npm](https://www.npmjs.com) to install theMDBAPI.

```bash
npm install
```
Go to the file doct env and then change your port and api key
## Usage exemple

```shell script
npm start
curl --location --request GET 'http://localhost:3000/api/movies/casting/random'
curl --location --request GET 'http://localhost:3000/api/movies/{movie_id}/casting'
curl --location --request GET 'http://localhost:3000/api/movies/random'
curl --location --request GET 'http://localhost:3000/api/movies/search'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
