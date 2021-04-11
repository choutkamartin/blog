const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cs"],
  },
  localePath: path.resolve("./public/static/locales"),
};
