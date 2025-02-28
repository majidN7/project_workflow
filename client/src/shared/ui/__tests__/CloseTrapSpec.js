 

import CloseTrap from '../trap/CloseTrap';


describe('<CloseTrap>', function() {

  it('should focus initiator', function() {

    // given
    const el = document.createElement('button');
    document.body.appendChild(el);

    const closeTrap = CloseTrap(el);

    // when
    closeTrap.mount();
    closeTrap.unmount();

    // then
    expect(document.activeElement).to.eql(el);
  });
});
