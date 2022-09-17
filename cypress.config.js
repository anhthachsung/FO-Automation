const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    "defaultCommandTimeout": 30000,
    "pageLoadTimeout": 30000,
    "responseTimeout": 30000,
    "requestTimeout": 30000,
    "supportFile": "cypress/support/commands.js",
    "experimentalNetworkStubbing": true,
    "chromeWebSecurity": false,

    viewportHeight: 768,
    viewportWidth:	1366,
    
  },
});
