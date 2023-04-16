const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8p74qj",
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: null,
    numTestsKeptInMemory: 1,
  },
});
