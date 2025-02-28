 

import { getProcessVariables } from '@bpmn-io/extract-process-variables';

import { getBpmnDefinitions } from '../parse';

export async function getProcessVariablesCount(file, type) {

  const {
    contents
  } = file;

  // ignore other engine profiles for now
  if (type !== 'bpmn') {
    return null;
  }

  const processVariables = [];

  const definitions = await getBpmnDefinitions(contents, type);

  const rootElements = definitions.get('rootElements');

  await Promise.all(
    rootElements.map(async (element) => {
      processVariables.push(...await getProcessVariables(element));
    })
  );

  return processVariables.length;
}
