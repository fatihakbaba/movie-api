const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const server = require('../app');

chai.use(chaiHttp);

describe('Node Server', () => {
    describe('(GET /) returns the homepage', () => {
        it('(GET /) returns the homepage', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    // describe('/register user', () => {
    //     it('/register user', (done) => {
    //         chai.request(server)
    //             .post('/register')
    //             .send({ username: 'fatih', password: '123456' })
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 done();
    //             });
    //     });
    // });
});