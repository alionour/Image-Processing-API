import checkIfFileExists from "../../../../src/utilities/check_if_file_exists";


it('should behave... returns true because the file exists', () => {
    expect(checkIfFileExists('./assets/images/fjord.jpg')).toBeTrue();
    ;
});