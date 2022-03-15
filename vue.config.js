const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  devServer: {
    open: true,
    host: "localhost",
  },
  transpileDependencies: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/global.less")],
    },
  },
});
