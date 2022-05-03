const WebpackPwaManifest = require("webpack-pwa-manifest");

new WebpackPwaManifest({
    name: "Houston Volleyball Social",
    short_name: "Houston Volleyball Social",
    description: "An app that allows you to view volleyball events near you",
    start_url: "../index.html",
    background_color: "#01579b",
    theme_color: "#ffffff",
    fingerprints: false,
    inject: false,
    icons: [{
      src: path.resolve("images/image5.jpeg"),
      sizes: [96, 128, 192, 256, 384, 512],
      destination: path.join("images", "icons")
    }]
  })