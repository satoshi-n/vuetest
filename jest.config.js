module.exports = {
    verbose: true,
    moduleFileExtensions: [
        "js",
        "json",
        // tell Jest to handle *.vue files
        "vue",
    ],
    transform: {
        // process js with babel-jest
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        // process *.vue files with vue-jest
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    // support the same @ -> src alias mapping in source code
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
}