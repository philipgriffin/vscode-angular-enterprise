const vscode = require("vscode");
const settings = require("./settings.json");

async function activate(context) {
  // TODO: Update changelog, push to git, deploy
  // TODO: Test version bumping - remove icons for v15 and add to 15.1
  // TODO: Remove unused versions and start 15 base.
  // TODO: Turn clear version state into an executable command
  // TODO: Find out why the showError command does nothing.
  // clearVersionState(context);
  const newVersion = isNewVersion(context);

  if (newVersion) {
    updateVersionState(context, newVersion);
    await updateSettings();
  }
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

/**
 * Checks if a new version is available.
 * @param {vscode.ExtensionContext} context The extension context.
 * @returns { string | null } The new version number if found, null if not found.
 */
function isNewVersion(context) {
  const version = context.extension.packageJSON.version;
  const versionState = context.globalState.get(context.extension.id);

  return version === versionState ? null : version;
}

/**
 * Updates the global extension version state.
 * @param {vscode.ExtensionContext} context The extension context.
 * @param {string} version The new version to be set.
 */
function updateVersionState(context, version) {
  context.globalState.update(context.extension.id, version);
}

/**
 * Clears the global extension version state.
 * @param {vscode.ExtensionContext} context The extension context.
 */
async function clearVersionState(context) {
  context.globalState.update(context.extension.id, undefined);
  await vscode.window.showInformationMessage(
    "🗑️ Angular Enterprise cleared its version state."
  );
}

/**
 * Updates the global settings
 */
async function updateSettings() {
  const ids = Object.keys(settings);
  let failed = [];

  ids.forEach(async (id, index) => {
    await vscode.workspace
      .getConfiguration()
      .update(id, settings[id], vscode.ConfigurationTarget.Global)
      .then(
        () => {},
        () => {
          failed.push(id);
        }
      );
  });

  if (failed.length) {
    await vscode.window.showErrorMessage(
      `❌ Angular Enterprise failed to configure ${failed.length} setting(s). See the Debug Console for more information.`
    );
  } else {
    await vscode.window.showInformationMessage(
      "🚀 Angular Enterprise successfully configured global settings."
    );

    // TODO: Find out why this isn't working?
    await vscode.window.showErrorMessage(
      `❌ Angular Enterprise failed to configure ${failed.length} setting(s). See the Debug Console for more information.`
    );
  }
}
