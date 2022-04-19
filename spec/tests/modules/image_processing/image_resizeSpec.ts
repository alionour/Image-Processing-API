import fs from 'fs';
import app from '../../../../src/app';
import supertest from 'supertest';
import {getFileMetadata}
  from '../../../../src/modules/images_processing/images_resize';
import path from 'path';

/**
     * creates a folder if not exists
     *
     * @param {string} directory
     * @return {*}  {Promise<boolean>}
     */
async function createFolderIfNotExists(directory:string):Promise<boolean> {
  try {
    if (!fs.existsSync('./assets/test')) {
      fs.mkdirSync(directory, {
        recursive: true,
      });
      return true;
    }
    return true;
  } catch (error) {
    return false;
  }
}

describe('IMAGES PROCESSING', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

  beforeAll((done:DoneFn)=>{
    
    try {
      createFolderIfNotExists('./assets/test/images/thumbnails/')
          .then(async (exists:boolean)=>{
            if (exists) {
              console.log('folder created');
              fs.copyFile(
                  './assets/images/fjord.jpg',
                  './assets/test/images/fjord.jpg',
                  (err) => {
                    if (err) throw err;
                    console.log('Image was copied to ./assets/test/images/');
                  });
            }
          });
      done();
    } catch (error) {
      throw error;
    }
  });

describe('Images',()=>{
  it('GET /api/images/resize', (done)=>{
    console.log('cwd' +process.cwd());

    supertest(app)
        .get(`/api/images/resize?filename=fjord&width=600&height=501&target=./assets/test/images/thumbnails/)`)
        .expect(200)
        .end(function(err, _res) {
          if (err) throw err;
          done();
        });
  });

  it('GET /api/images/rotate', (done)=>{
    console.log(process.cwd());
    
    supertest(app)
        .get(`/api/images/rotate?filename=fjord&angle=45&target=./assets/test/images/thumbnails/)`)
        .expect(200)
        .end(function(err, _res) {
          if (err) throw err;
          done();
        });
  });
})


  it('should return metadata', async () => {
    const metadata =
      await getFileMetadata('./assets/images/fjord.jpg');

    expect(metadata !== null ).toBeTrue();
  });


  afterAll(()=>{
    // deletes test folder
    fs.rmSync('./assets/test', {recursive: true, force: true});
  });
});
