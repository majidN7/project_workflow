 

const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports send tasks are awesome.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'bpmn:SendTask')) {
      reporter.report(node.id, 'This is awesome 😍', {
        name: node.name
      });
    }
  }

  return {
    check: check
  };
};
