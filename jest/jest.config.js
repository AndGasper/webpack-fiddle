const path = require('path');
// Since I have this in a separate directory
// <rootDir> will refer to /path/to/jest/jest.config.js
// and I'd rather not have to read the path.resolve 
// statement in the configuration listings
const PROJECT_DIRECTORY = path.resolve(__dirname, '..');


module.exports = {
    "verbose": true,
    "roots": [
        "<rootDir>/src",
        "<rootDir>/lib"
    ],
    // "transform": {
    //     "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest"
    // },
    "transformIgnorePatterns": ["/node_modules/"]
}