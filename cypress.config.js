const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: "./node_modules/mochawesome/src/mochawesome.js",

  reporterOptions: {
    reportDir: "cypress/reports/separate-reports",
    reportFilename: "full_report",
    overwrite: true,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/e2e/**/*.spec.js"
  },
});
