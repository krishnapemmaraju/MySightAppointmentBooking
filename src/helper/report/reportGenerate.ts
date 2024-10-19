const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./test-result/report",
  reportPath: "./test-result/report",
  reportName:"WolseleyUK Automation Report",
  pageTitle: "Wolseley UK Website Functions",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "114",
    },
    device: "SVTSTIF001",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "WolseleyUK Reality Regression" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "REG-1" }
    ],
  },
});