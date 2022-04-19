import fs from "fs";
/**
 * checks if file exists
 *
 * @param {string} filePath
 */
function checkIfFileExists(filePath: string): boolean | never {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    throw error;
  }
}

export default checkIfFileExists;
