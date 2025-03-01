 

const { notarize } = require('@electron/notarize');

module.exports = async function(context) {
  const {
    electronPlatformName,
    appOutDir,
    packager
  } = context;

  if (electronPlatformName !== 'darwin') {
    return;
  }

  const {
    info: {
      options: {
        publish
      }
    }
  } = packager;

  if (publish !== 'always') {
    console.log('  • skipped notarization for non-release');

    return;
  }

  const {
    productName: appName
  } = packager.config;

  const {
    APPLE_DEVELOPER_ID: appleId,
    APPLE_DEVELOPER_ID_PASSWORD: appleIdPassword,
    APPLE_TEAM_ID: appleTeamId
  } = process.env;

  const appPath = `${appOutDir}/${appName}.app`;

  console.log(`  • notarizing app from path: ${appPath}`);

  return await notarize({
    appPath,
    appleId,
    appleIdPassword,
    teamId: appleTeamId,
    tool: 'notarytool'
  });
};
