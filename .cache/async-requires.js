// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("D:\\Portfolio\\gatsby-starter-strata\\node_modules\\gatsby-plugin-offline\\app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-404-js": () => import("D:\\Portfolio\\gatsby-starter-strata\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("D:\\Portfolio\\gatsby-starter-strata\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "D:\\Portfolio\\gatsby-starter-strata\\.cache\\data.json")

