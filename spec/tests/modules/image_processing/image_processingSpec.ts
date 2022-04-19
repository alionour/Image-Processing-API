import fs from "fs";
import resizeImage from "../../../../src/modules/images_processing/images_resize";
import checkIfFileExists from "../../../../src/utilities/check_if_file_exists";
import getFileMetadata from "../../../../src/utilities/get_metadata";
import rotateImage from "../../../../src/modules/images_processing/images_rotate";

/**
 * creates a folder if not exists
 *
 * @param {string} directory
 * @return {*}  {Promise<boolean>}
 */
export async function createFolderIfNotExists(
  directory: string
): Promise<boolean> {
  try {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, {
        recursive: true,
      });
    }
    return true;
  } catch (error) {
    return false;
  }
}

describe("IMAGES PROCESSING FUNCTIONALITY", () => {
  beforeAll((done: DoneFn) => {
    try {
      createFolderIfNotExists("./assets/test/");
      done();
    } catch (error) {
      throw error;
    }
  });

  it("should behave... RESIZE IMAGE", async () => {
    const filePath = await resizeImage({
      source: "./assets/images/fjord.jpg",
      width: 500,
      height: 500,
      target: "./assets/test/",
    });
    const exists = checkIfFileExists(filePath);
    expect(exists).toBeTrue();
    getFileMetadata(filePath).then((value) => {
      expect(value.width).toBe(500);
      expect(value.height).toBe(500);
    });
  });

  it("should behave... ROTATE IMAGE", async () => {
    const filePath = await rotateImage({
      source: "./assets/images/fjord.jpg",
      angle: 120,
      target: "./assets/test/",
    });
    const exists = checkIfFileExists(filePath);
    expect(exists).toBeTrue();
  });

  afterAll(() => {
    // deletes test folder
    fs.rmSync("./assets/test", { recursive: true, force: true });
  });
});
