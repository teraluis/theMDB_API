const Rand = require("../core/Rand");
const assert = require('assert');
const server = require('../index');
// temporary solution
const dev_url = "http://localhost:" + process.env.PORT;
//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

/*
    Testing the rand class
 */
describe('Rand Class', function() {
    describe('Random number', function() {
        context('when calling random number', function() {
            const max = 10;
            const random = Rand.getRandomInt(max);
            it('should return number < max number', function() {
                assert.equal(random < max, true);
            });
        });

    });
});


/*
    Test the /GET movies/latest route
 */
describe('/GET movies/latest', function() {
    let connection;
    before(async function() {
        connection = server;
    });
    it('it should give the last movie', async function() {
        chai.request(dev_url)
            .get('/api/movies/random')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Object');
            });
    });
    after(async function() {
        return connection.close;
    });
});

/*
    Test the /GET movies/:id route
 */
describe('/GET movies/:id', function() {
    let connection;
    before(async function() {
        connection = server;
    });
    it('it should give une movie with id 14', (done) => {
        const id = '14';
        chai.request(dev_url)
            .get('/api/movies/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('title');
                res.body.should.have.property('img');
                res.body.should.have.property('date');
                res.body.should.have.property('id').eq(14);
                done();
            });
    });

    it('it shoulden\'t get a movie but a msg 404', (done) => {
        const id = '10';
        chai.request(dev_url)
            .get('/api/movies/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('msg');
                res.body.should.have.property('msg').eq("Request failed with status code 404");
                done();
            });
    });
    after(async function() {
        return connection.close;
    });
});

/*
    Test the /GET movies/:id/casting route
 */
describe('/GET movies/:id/casting', function() {

    let connection;
    before(async function() {
        connection = server;
    });

    it('it should give an array with specific values', (done) => {
        const id = '14';
        chai.request(dev_url)
            .get('/api/movies/' + id + '/casting')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(40);
                res.body.map(actor => {
                    actor.should.have.property('name');
                    actor.should.have.property('img');
                    actor.should.have.property('character');
                });
                res.body[0].should.have.property('name').eq('Kevin Spacey');
                res.body[1].should.have.property('name').eq('Annette Bening');
                done();
            });
    });

    after(async function() {
        return connection.close;
    });
});
