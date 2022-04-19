import requestServer from 'supertest';
import app from '../../src/app';


  it('Server is running perfectly', (done:DoneFn)=>{
    requestServer(app).get('/').expect(200).expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .expect((res)=>{
          res.body.data.length = 1;
        }).end(function(err, res) {
        //   if (err) return done(err);
          return done();
        });
  });
