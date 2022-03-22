const CracoLessPlugin = require("craco-less");
const { NormalModuleReplacementPlugin } = require("webpack");
const path = require("path");

module.exports = {
  // webpack: {
  //   configure: (config, { env, paths }) => {
  //     config.plugins.push(
  //       new NormalModuleReplacementPlugin(
  //         /node_modules\/antd\/lib\/style\/index\.less/,
  //         path.resolve(__dirname, "src/style/global.less")
  //       )
  //     );
  //     return config;
  //   },
  // },
  style: {
    postcssOptions: {
      plugins: [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#2bd909" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
