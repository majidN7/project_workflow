 

/* global sinon */
import UpdateChecksAPI from '../UpdateChecksAPI';

describe('<UpdateChecksAPI>', function() {

  let API, fetchStub;

  beforeEach(function() {
    API = new UpdateChecksAPI('http://myEndpoint');
    fetchStub = sinon.stub(window, 'fetch');
  });

  afterEach(function() {
    window.fetch.restore();
  });


  it('should throw on invalid response', async function() {

    // given
    fetchStub.callsFake(function() {
      return Promise.resolve({
        status: 400
      });
    });

    // when
    let err;
    try {
      await API.sendRequest('/foo');
    } catch (e) {
      err = e;
    }

    // then
    expect(err).to.exist;
    expect(err.message).to.eql('Your version is not compatible with update server.');

  });

});
