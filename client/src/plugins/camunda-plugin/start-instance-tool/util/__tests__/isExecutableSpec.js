 

import isExecutable from '../isExecutable';

import executableXML from './fixtures/executable.bpmn';
import notExecutableXML from './fixtures/not_executable.bpmn';
import collaborationExecutableXML from './fixtures/collaboration_executable.bpmn';
import collaborationNotExecutableXML from './fixtures/collaboration_not_executable.bpmn';

describe('plugins/start-instance/util - isExecutable', function() {

  describe('single process', function() {

    it('should find executable process', async function() {

      // when
      const executable = await isExecutable(executableXML);

      // then
      expect(executable).to.be.true;
    });


    it('should NOT find executable process', async function() {

      // when
      const executable = await isExecutable(notExecutableXML);

      // then
      expect(executable).to.be.false;
    });
  });


  describe('collaboration', function() {

    it('should detect executable process', async function() {

      // when
      const executable = await isExecutable(collaborationExecutableXML);

      // then
      expect(executable).to.be.true;
    });


    it('should NOT find executable process', async function() {

      // when
      const executable = await isExecutable(collaborationNotExecutableXML);

      // then
      expect(executable).to.be.false;
    });

  });

});