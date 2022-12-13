module.exports = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-rtl",
    "storybook-addon-pseudo-states",
    "@storybook/addon-a11y",
  ],
  "framework": {
    name: "@storybook/angular",
    options: {},
  },
  "staticDirs": [
    '../public',
    {
      from: "../stories/assets",
      to: "/static/assets",
    },
  ],
  "features": {
    "interactionsDebugger": true
  },
  "core": {},
  // "docs": {
  //   // You can change this value to `false` to remove all automaitcally generated Docs Pages
  //   // We recommend instead to use them, and remove the "Overview" pages.
  //   // But there might be some features/content missing, so you be the judge.
  //   // For more information take a look here: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#docs-page
  //   "docsPage": "automatic",
  // },
  ,
  docs: {
    docsPage: "automatic"
  }
};
