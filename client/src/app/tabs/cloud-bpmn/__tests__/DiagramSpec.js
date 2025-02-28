 

describe('tabs/cloud-bpmn', function() {

  describe('initial diagram', function() {

    it('should contain placeholders', function() {

      // when
      const contents = require('../diagram.bpmn');

      // then
      expect(contents).to.contain('id="Definitions_{{ ID }}"');
      expect(contents).to.contain('id="Process_{{ ID:process }}"');
    });


    it('should have initial start event snapped to grid', function() {

      // when
      const contents = require('../diagram.bpmn');

      // then
      expect(contents).to.match(
        /<bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\s+<dc:Bounds x="182" y="162" width="36" height="36" \/>\s+<\/bpmndi:BPMNShape>/
      );
    });

  });

});
