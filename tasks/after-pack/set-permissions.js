 

const fs = require('fs');
const path = require('path');

const FILE_PERMISSIONS = 0o664;
const EXEC_FILE_PERMISSIONS = 0o775;
const DIR_PERMISSIONS = 0o755;

module.exports = function(context) {
  const {
    appOutDir,
    electronPlatformName
  } = context;

  if (electronPlatformName !== 'linux') {
    console.log(`  • skipped file permission update for ${ electronPlatformName }`);

    return;
  }

  console.log(`  • setting file permissions    file=${appOutDir}`);

  const executableFiles = [
    'camunda-modeler',
    'chrome-sandbox',
    'support/xdg_register.sh',
    'support/xdg_unregister.sh'
  ].reduce((files, name) => {
    files[path.join(appOutDir, name)] = 1;
    return files;
  }, {});

  function walk(root) {

    const entries = fs.readdirSync(root, { withFileTypes: true });

    for (const entry of entries) {

      const entryPath = path.join(root, entry.name);

      const isDirectory = entry.isDirectory();

      const permissions = (
        isDirectory ? DIR_PERMISSIONS : (
          entryPath in executableFiles
            ? EXEC_FILE_PERMISSIONS
            : FILE_PERMISSIONS
        )
      );

      fs.chmodSync(entryPath, permissions);

      // recurse
      if (isDirectory) {
        walk(entryPath);
      }
    }
  }

  walk(appOutDir);
};

