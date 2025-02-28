 

import BpmnModdle from 'bpmn-moddle';

import {
  find
} from 'min-dash';

var moddle = new BpmnModdle();

export default async function isExecutable(xml) {

  try {

    const { rootElement } = await moddle.fromXML(xml);

    const { rootElements } = rootElement;

    return !!find(rootElements, r => r.isExecutable);

  } catch (err) {

    return false;
  }

}
