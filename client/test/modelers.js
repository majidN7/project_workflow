 

var scopedTests = require.context('../src', true, /\/__tests__\/bpmn-io-modelers.*Spec\.js$/);

scopedTests.keys().forEach(scopedTests);

var allTests = require.context('.', true, /bpmn-io-modelers.*Spec\.js$/);

allTests.keys().forEach(allTests);