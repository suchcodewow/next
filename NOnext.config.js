// next.config.js

const theme = require("shiki/themes/dracula-soft.json");
const { remarkCodeHike } = require("@code-hike/mdx");

module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  // Support loading `.md`, `.mdx`:
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            remarkPlugins: [
              require("remark-prism"),
              {
                /* options */
              },
            ],
          },
        },
      ],
    });

    return config;
  },
};
