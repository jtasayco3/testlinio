const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: 'cypress/reportes',
	metadata:{
        browser: {
            name: 'chrome',
            version: '69'
        },
        device: 'PC Local',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Test Automation'},
            {label: 'Release', value: '1'},
            {label: 'Cycle', value: '1'},
            {label: 'Execution Start Time', value: 'Enero 2022, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Enero 2022, 02:56 PM EST'}
        ]
    }
});