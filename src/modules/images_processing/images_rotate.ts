import sharp from "sharp";
import fs from "fs";
import path from "path";
import checkIfFileExists from "../../utilities/check_if_file_exists";
import getFileMetadata from "../../utilities/get_metadata";

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
    const filePath = params.source;
    const angle = params.angle;
    const metadata: sharp.Metadata | undefined = await getFileMetadata(
      params.source
    );
    const fileName = path.basename(filePath).split(".")[0];

    const target =
      (params.target ?? "./assets/images/thumbnails/") +
      `${fileName}.angle.${angle}.${metadata?.format}`;


    // checks if image exists at thumbnails folder if not creates one
    const exists = await checkIfFileExists(target);
    if (!exists) {

               await sharp(filePath).rotate(angle).toFile(target);

      }
  

    return target;
   
  } catch (err) {
    if (err) console.log(`An error occurred during processing: ${err}`);
    throw err;
  }
}



export default rotateImage;
