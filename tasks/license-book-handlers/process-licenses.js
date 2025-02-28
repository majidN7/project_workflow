 

const fs = require('node:fs');
const path = require('node:path');

/**
 *
 *
 * @returns {{
 *  name: string,
 *  repository: string,
 *  licenseId: string,
 *  licenseText: string,
 *  version: string
 * }[]}
 */
module.exports = function processLicenses(dependencies) {
  const processedLicenses = [];
  const warnings = [];

  for (const dependency of dependencies) {

    // special case: luxon nested package.json
    if (/camunda-modeler\/node_modules\/luxon\/src/.test(dependency.directory)) {
      dependency.packageJson = require('luxon/package.json');
      dependency.licenseId = 'MIT';
      dependency.licenseText = fs.readFileSync(path.join(dependency.directory, '../LICENSE.md'), 'utf-8');
    }

    const {
      licenseId,
      licenseText,
      packageJson: {
        name,
        repository,
        version
      }
    } = dependency;


    if (!repository) {
      warnings.push(`missing repository: ${name}`);
    }

    if (!licenseText) {
      warnings.push(`missing license text: ${name}`);
    }

    processedLicenses.push({
      name: `${name}@${version}`,
      repository: repository && repository.url || repository,
      licenseId,
      licenseText
    });
  }

  return {
    processedLicenses,
    warnings
  };
};
