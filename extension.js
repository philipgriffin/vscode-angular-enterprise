const vscode = require("vscode");
const settings = require("./settings.json");

async function activate(context) {
  const newVersion = isNewVersion(context);

  if (newVersion) {
    updateVersionState(context, newVersion);
    await updateSettings();
  }

  const disposable = vscode.commands.registerCommand(
    "angular-enterprise.clearVersionState",
    async () => {
      clearVersionState(context);
    }
  );
  context.subscriptions.push(disposable);
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
  context.globalState.update(context.extension.id, undefined).then(
    async () => {
      await vscode.window.showInformationMessage(
        "✅ Angular Enterprise cleared its version state."
      );
    },
    async () => {
      await vscode.window.showInformationMessage(
        "❌ Angular Enterprise failed to clear its version state. See the Debug Console for more information."
      );
    }
  );
}

/**
 * Updates the global settings. Will append to Object configs and overwrite specific id configuration.
 */
async function updateSettings() {
  const ids = Object.keys(settings);
  let failed = [];

  ids.forEach(async (id) => {
    let appendTo = null;

    if (isObject(settings[id])) {
      appendTo = { ...vscode.workspace.getConfiguration(id), ...settings[id] };
    }

    await vscode.workspace
      .getConfiguration()
      .update(id, appendTo ?? settings[id], vscode.ConfigurationTarget.Global)
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
      "✅ Angular Enterprise successfully updated global settings. 🚀"
    );
  }
}

/**
 *
 * @param { any } obj
 * @returns { boolean } Returns true if input is an Object. Otherwise, returns false.
 */
const isObject = (obj) => (obj ?? false)?.constructor?.name === "Object";
