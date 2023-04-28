const cypress = require("cypress");
const { defineConfig } = require("cypress");

//Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a Tauri error about the window
  // and don't want to fail the test so we return false
//  if (err.message.includes('window.__TAURI_IPC__ is not a function')) {
//    return false;
//  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
//});

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    test_env: 'https://apisandbox.braspag.com.br',
    MerchantId: 'b3534df1-ab4c-4eba-9b35-7cdcda9786d9',
    MerchantKey: 'XRWXJQLFSNEOGVMBOUNFXFKYGMFXYXERSHDATDXC'
  }
});