 

import {
  getLatestStable,
  ENGINES
} from '../Engines';


describe('util/Engines', function() {

  describe('should provide latestStable', function() {

    function verifyLatestStable(platform, expected) {

      return function() {

        // then
        expect(getLatestStable(platform)).to.eql(expected);
      };
    }

    it('Platform', verifyLatestStable(ENGINES.PLATFORM, '7.22.0'));

    it('Cloud', verifyLatestStable(ENGINES.CLOUD, '8.6.0'));

  });

});
