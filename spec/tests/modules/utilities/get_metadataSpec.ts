import getFileMetadata from "../../../../src/utilities/get_metadata";

it('should behave... checks the returned metadata for the file fjord.jpg', async () => {
    const metadata =
      await getFileMetadata('./assets/images/fjord.jpg');

    expect(metadata !== null).toBeTrue();
  });
