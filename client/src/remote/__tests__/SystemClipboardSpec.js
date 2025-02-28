 

import SystemClipboard from '../SystemClipboard';

import { Backend } from '../../app/__tests__/mocks';


describe('systemClipboard', function() {

  it('#writeText', function() {

    // given
    const sendSpy = (type, opts) => {

      // then
      expect(type).to.equal('system-clipboard:write-text');

      expect(opts).to.eql(options);
    };

    const backend = new Backend({ send: sendSpy });
    const systemClipboard = new SystemClipboard(backend);

    const options = {
      text: 'foobar'
    };

    // when
    systemClipboard.writeText(options);
  });

});
