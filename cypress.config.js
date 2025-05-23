const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    experimentalStudio: true,
    hideXHR: true,
    setupNodeEvents(on, config) {
      config.env = config.env || {};
      config.env.SHOPIFY_URL = process.env.SHOPIFY_URL;
      config.env.THEME_ID = process.env.THEME_ID;
      return config;
    },
  },
});