import supertest from 'supertest';
import app from '../../../../src/app';

describe('API ROUTING TESTING', ()=>{
  it('GET /api', (done)=>{
    supertest(app).get('/api').expect(200).end(function(err, res) {
      //   if (err) return done(err);
      return done();
    });
  });
  it('GET /api/images', (done)=>{
    supertest(app).get('/api/images/').expect(200).end(function(err, res) {
      //   if (err) return done(err);
      return done();
    });
  });
});
