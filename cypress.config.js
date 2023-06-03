const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xhuc1f',
  e2e: {
    //baseUrl: 'https://www.google.com',
    baseUrl: 'https://mexc.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
