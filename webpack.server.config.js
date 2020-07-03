const path = require("path");
const nodeExternals = require("webpack-node-externals");
var CopyPlugin = require("copy-webpack-plugin");

const srcDir = "./src/";
const outputDir = path.resolve(__dirname, "dist");

module.exports = {
    target: "node",
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()],
    entry: {
        server: srcDir + "server.ts"
    },
    output: {
        path: outputDir,
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)?$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: srcDir + "/server/views",
                    to: outputDir + "/static"
                }
            ]
        })
    ]
}