const { defineConfig } = require("cypress");
//const { type } = require("cypress/types/jquery" );

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 10000,
    setupNodeEvents(on, config) {
     
           // implement node event listeners here
    },
  },
});