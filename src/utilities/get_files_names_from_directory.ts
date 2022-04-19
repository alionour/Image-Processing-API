import fs from 'fs';

/**
 * gets the name of the files in a specified directory
 *
 * @export
 * @param {string} dir the directory to get fil names from
 * @return {*}  {Array<string>}
 */
 function getAvailableFiles(dir:string) :Array<string>{
    const images:Array<string> = []; 
    fs.readdirSync(dir).forEach((file)=>{
      images.push(file.split('.')[0]);
    })    
    return images;
  }


  export default getAvailableFiles;