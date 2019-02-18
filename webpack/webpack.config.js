const path = require('path');


const FileLoaders = [
    {
        test: /\.jsx?$/,
        use: [
            {
                loader: 'babel-loader',
            }
        ]
        
    },
];


function getModuleRules() {
    console.log('getModuleRules - FileLoaders', FileLoaders);
    return FileLoaders;
}

const PROJECT_DIRECTORY = path.resolve(__dirname, '..');
const OUTPUT_PATH = path.resolve(__dirname, '..', 'dist');

module.exports = {
    module: {
        rules: getModuleRules(),
    },
    resolve: {
        alias: {
            lib: '../lib'
        },
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, 'lib'),
            'node_modules',
        ],
    },
    
    entry: path.resolve(PROJECT_DIRECTORY, 'src', 'index'),
    output: {
        filename: 'main.js',
        path: OUTPUT_PATH
    }
}