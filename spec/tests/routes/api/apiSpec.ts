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

    it('GET /api/images/resize', (done) => {
      supertest(app)
        .get(
          `/api/images/resize?filename=fjord&width=600&height=501`
        )
        .expect(200)
        .end(function (err, _res) {
          if (err) throw err;
          done();
        });
    });

    it('GET /api/images/rotate', (done) => {
      supertest(app)
        .get(`/api/images/rotate?filename=fjord&angle=45`)
        .expect(200)
        .end(function (err, _res) {
          if (err) throw err;
          done();
        });
    });


});
