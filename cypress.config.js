
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const cypressOnFix = require('cypress-on-fix'); //

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on = cypressOnFix(on);//

      on("file:preprocessor", bundler);
      require('cypress-mochawesome-reporter/plugin')(on);

      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: ["cypress/e2e/features/*.feature", "cypress/e2e/features/*.js"],
    experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false,
    defaultcommandtimeout: 4500000,
    viewportWidth: 1600,
    viewportHeight: 908,
    pageLoadTimeout: 45000000,
    requestTimeout: 2500000,
    responseTimeout: 2500000,
    retries: {
      runMode: 2,
      openMode: 2,
    },
    baseUrl: "https://partner.stg.toptalla.com/en/",
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportDir: "cypress/results",
    reportPageTitle: 'Test Execution Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite:false,
    json:true,
    html:true
  },
  video: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns:false,
});