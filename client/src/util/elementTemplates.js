 

import { CloudElementTemplatesValidator } from 'camunda-bpmn-js/lib/camunda-cloud/ElementTemplatesValidator';

import { filter } from 'min-dash';

const elementTemplatesValidator = new CloudElementTemplatesValidator();

export function getCloudTemplates(templates) {
  return filterTemplatesBySchema(templates, true);
}

export function getPlatformTemplates(templates) {
  return filterTemplatesBySchema(templates, false);
}

function filterTemplatesBySchema(templates, shouldApply) {
  return filter(templates, template => {
    const { $schema } = template;
    return !!elementTemplatesValidator.isSchemaValid($schema) === shouldApply;
  });
}