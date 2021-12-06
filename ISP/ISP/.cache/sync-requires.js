const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/workspace/englishisp/ISP/ISP/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/workspace/englishisp/ISP/ISP/src/pages/404.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/workspace/englishisp/ISP/ISP/src/templates/blog-post.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("/workspace/englishisp/ISP/ISP/src/templates/index.js")))
}

