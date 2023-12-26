const nodeExternals = require('webpack-node-externals');

// let target = 'react';
// if (process.env.REACT_APP_MODE === 'electron') {
//     target = 'electron-renderer'
// };
// console.log(`craco.config.js: setting webpack target to: ${target}`);

module.exports = {
    webpack: {
        configure: {
            target: "electron-renderer",
            externals: [
                nodeExternals({
                    allowlist: [/webpack(\/.*)?/, "electron-devtools-installer"],
                }),
            ],
        },
    },
};