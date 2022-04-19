import sharp from "sharp";
import fs from "fs";
import path from "path";
import { getFileMetadata } from "./images_resize";

interface RotateImageParameters {
  source: string;
  target?: string;
  angle: number;
  
}



/**
 *
 *
 * @param {ResizeImageParameters} params
 * @return {*}  {(Promise<string|never>)}
 */
async function rotateImage(
  params: RotateImageParameters
): Promise<string | never> {
  try {
    console.log(params.source);
    const filePath = params.source;
    const angle = params.angle;
    const metadata: sharp.Metadata | undefined = await getFileMetadata(
      params.source
    );
    const fileName = path.basename(filePath).split(".")[0];

    const target =
      (params.target ?? "./assets/images/thumbnails/") +
      `${fileName}.angle.${angle}.${metadata?.format}`;
      
      console.log(`filepath : ${filePath}\n
      file output :${target}
      ` );

    // checks if image exists at thumbnails folder if not creates one
    if (!(await checkIfImageExists(target))) {
      await sharp(filePath).rotate(angle).toFile(target);
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

export default rotateImage;
