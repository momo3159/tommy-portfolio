module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tommy-portfolio/' : '/',
  assetsDir: "./",
  outputDir: "docs",
};
