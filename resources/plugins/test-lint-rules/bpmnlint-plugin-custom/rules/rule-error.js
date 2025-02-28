 

/**
 * Rule that just blows up.
 */
module.exports = function() {

  function check(node, reporter) {
    throw new Error('I blow up');
  }

  return {
    check: check
  };
};
