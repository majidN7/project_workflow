 

'use strict';

module.exports = function generateSummary(processedLicenses, warnings = []) {
  return `${warnings.join('\n')}
Summary of used third party licenses:
${createLicensesSummary(processedLicenses)}
`;
};

function createLicensesSummary(processedLicenses) {
  const licenseCounts = {};

  for (const licenseInfo of processedLicenses) {
    const licenseName = licenseInfo.licenseId || 'unknown';

    if (!licenseInfo.licenseId) {
      console.warn(`Could not find license ID for ${licenseInfo.name}`);
    }

    licenseCounts[licenseName] = (licenseCounts[licenseName] || 0) + 1;
  }

  return Object.entries(licenseCounts).map(([ licenseName, count ]) => {
    return `- ${licenseName} - ${count}`;
  }).join('\n');
}
