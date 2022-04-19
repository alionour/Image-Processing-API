import sharp from "sharp";
import fs from "fs";
import path from "path";

interface ResizeImageParameters {
  source: string;
  target?: string;
  width: number;
  height: number;
}
/**
 * gets the metadata of the provided file
 *
 * @param {string} filename
 * @return {*}  {(Promise<sharp.Metadata|undefined>)}
 */
export async function getFileMetadata(
  filename: string
): Promise<sharp.Metadata | never> {
  try {
    return await sharp(filename).metadata();
  } catch (error) {
    if (error) console.log(`An error occurred during processing: ${error}`);
    throw error;
  }
}

/**
 *
 *
 * @param {ResizeImageParameters} params
 * @return {*}  {(Promise<string|never>)}
 */
async function resizeImage(
  params: ResizeImageParameters
): Promise<string | never> {
  try {
    console.log(params.source);
    const filePath = params.source;
    const width = params.width;
    const height = params.height;
    const metadata: sharp.Metadata | undefined = await getFileMetadata(
      params.source
    );
    const fileName = path.basename(filePath).split(".")[0];

    const target =
      params.target ?? "./assets/images/thumbnails/" +
      `${fileName}.${width}.${height}.${metadata?.format}`;
    console.log(`filepath : ${filePath}\n
    file output :${target}
    ` );

    // checks if image exists at thumbnails folder if not creates one
    if (!(await checkIfImageExists(target))) {
      await sharp(filePath).resize(width, height).toFile(target);
    }
    return target;
  } catch (err) {
    if (err) console.log(`An error occurred during processing: ${err}`);
    throw err;
  }
}

/**
 * checks if file exists
 *
 * @param {string} filePath
 */
async function checkIfImageExists(filePath: string): Promise<boolean | never> {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    throw error;
  }
}

export default resizeImage;
