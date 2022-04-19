import sharp from "sharp";
/**
 * gets the metadata of the provided file
 *
 * @param {string} filepath
 * @return {*}  {(Promise<sharp.Metadata|undefined>)}
 */
 export async function getFileMetadata(
    filepath: string
  ): Promise<sharp.Metadata | never> {
    try {
      return await sharp(filepath).metadata();
    } catch (error) {
      if (error) console.log(`An error occurred during processing: ${error}`);
      throw error;
    }
}

export default getFileMetadata;