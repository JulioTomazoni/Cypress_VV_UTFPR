const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dt1d26',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  chromeWebSecurity: false,
  },
});
