 

const path = require('path');

const Flags = require('../flags');


describe('flags', function() {

  it('should instantiate', function() {

    // when
    const flags = new Flags({
      paths: [
        absPath('flags/1'),
        absPath('flags/2')
      ],
      overrides: {
        TWO: 'overridden'
      }
    });


    // then
    expect(flags.getAll()).to.eql({
      ONE: true,
      TWO: 'overridden'
    });

  });


  it('should provide default value', function() {

    // given
    const flags = new Flags({
      paths: [
        absPath('flags/1'),
        absPath('flags/2')
      ],
      overrides: {
        TWO: 'overridden'
      }
    });

    // then
    expect(flags.get('ONE')).to.equal(true);
    expect(flags.get('NON_EXISTING')).not.to.exist;

    expect(flags.get('NON_EXISTING', 10000)).to.eql(10000);
  });

});


function absPath(file) {
  return path.resolve(__dirname, file);
}
