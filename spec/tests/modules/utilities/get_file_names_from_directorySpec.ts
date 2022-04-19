import getAvailableFiles from "../../../../src/utilities/get_files_names_from_directory";

it('should behave... return an array of all filenames exist in directory', () => {
    const filenames = getAvailableFiles('./assets/images');
    expect(filenames.length).toBeGreaterThan(0);
    expect(filenames).toContain('fjord');
});