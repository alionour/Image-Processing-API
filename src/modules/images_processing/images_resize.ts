import sharp from "sharp";
import checkIfFileExists from "../../utilities/check_if_file_exists";
import path from "path";
import getFileMetadata from "../../utilities/get_metadata";

interface ResizeImageParameters {
  source: string;
  target?: string;
  width: number;
  height: number;
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
    const filePath = params.source;
    const width = params.width;
    const height = params.height;
    const metadata: sharp.Metadata | undefined = await getFileMetadata(
      params.source
    );
    const fileName = path.basename(filePath).split(".")[0];

    const target =
    (params.target ?? "./assets/images/thumbnails/") +
        `${fileName}.${width}.${height}.${metadata?.format}`;
    

    // checks if image exists at thumbnails folder if not creates one
    const exists = await checkIfFileExists(target);
      if (!exists) {
        await sharp(filePath).resize(width, height).toFile(target);
      }
    return target;
  } catch (err) {
    if (err) console.log(`An error occurred during processing: ${err}`);
    throw err;
  }
}



export default resizeImage;
