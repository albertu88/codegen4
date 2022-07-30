
const assert = require('assert');
var users = require('../controllers/users.js');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:8080';

//TRIAL:
describe('group of tests', () => {
  let testValue; // Variable used by both tests
  beforeEach(() => {
    testValue = 5;
  }); 
  //Write it functions here
   it('returns the sum of its arguments', () => {
    // Write assertions here
    assert.ok(3 + 4 === 7) 
  }); 
}); 


//USERS:
describe('get all users: ',()=>{
    it('should get all users', (done) => {
    chai.request(url)
    .get('/users')
    .end(function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });

   describe('update a user with id 2: ',()=>{
    it('update a user with id 2', (done) => {
    chai.request(url)
    .put('/updateusers/2')
    .send({nameUser: 'Al', passwordUser: '12345'})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });


   describe('Insert a user ',()=>{
    it('should receive an error because we use a user that already exist', (done) => {
    chai.request(url)
    .post('/signup')
    .send({nameUser: 'Al', passwordUser: '12345'})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(409);
    done();
    });
    });
   });

   ///to do....