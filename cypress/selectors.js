export const header = {
    logo: "[test-data='logo-img']",
    title: "[test-data='title']"
};
export const filter = {
    name: "[test-data='filter-name']",
    city: "[test-data='filter-city']",
    submitButton: "[test-data='filter-button-submit']",
    clearButton: "[test-data='filter-button-clear']"
};
export const column = {
    applied: "[test-data='column-Applied']",
    interviewing: "[test-data='column-Interviewing']",
    hired: "[test-data='column-Hired']"
};
export const container = {
    member: (name = '') => `[test-data$='${name}-container']`,
    info: (name = '') => `[test-data$='${name}-container-info']`,
    photo: (name = '') => `[test-data$='${name}-photo']`,
    buttonDown: (name = '') => `[test-data$='${name}-button-down']`,
    buttonUp: (name = '') => `[test-data$='${name}-button-up']`
};