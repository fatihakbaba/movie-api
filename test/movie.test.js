const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const server = require('../app');

chai.use(chaiHttp);

let token, movieId;

describe('/api/movies tests ', () => {
    before((done) => {
        chai.request(server)
            .post('/authenticate')
            .send({ username: 'fatih1', password: '123456' })
            .end((err, res) => {
                token = res.body.token;
                done();
            });
    });

    
});