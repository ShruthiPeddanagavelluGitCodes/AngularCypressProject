const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://172.31.18.255:4200",  // Ensure correct base URL
    chromeWebSecurity: false,  // Disable security to allow cross-origin requests
  },
});




/*import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});*/
