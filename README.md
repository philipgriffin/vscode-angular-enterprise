# Angular Enterprise VSCode Extension Pack

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/philipgriffin.angular-enterprise?color=green&style=flat-square)
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?color=blue&style=flat-square)](http://opensource.org/licenses/MIT)
[![Visual Studio Code Support](https://img.shields.io/badge/Visual%20Studio%20Code-%5E1.69.1-blue?style=flat-square&logo=visualstudiocode)](https://code.visualstudio.com)

## Description

Angular Enterprise is a curation of Visual Studio Code extensions, settings and key bindings to assist in developing enterprise-grade Angular applications. Once installed, Angular Enterprise will preload your IDE with the below extensions. All extensions, the global workspace and key bindings will then be preconfigured for optimal performance.

## Install

Available via [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=philipgriffin.angular-enterprise&ssr=false#overview).

## Actions & Commands

### Extension Installation

Upon installation all new extensions will be installed. Once complete configuration is applied to the workspace and key bindings are updated. This step is repeated for each version change.

### Clear Version State

> **Warning**
> Once executed the next reload will reapply Angular Enterprise's `settings.json`.

Clears the global version state. This can be useful if you would like to force a rerun of the Extension Installation phase. Simply execute this command then reload your workspace.

## Configuration

> **Note**
> You do not need to setup this configuration. Angular Enterprise will automatically apply upon installation.

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "workbench.iconTheme": "material-icon-theme",
  "typescript.preferences.importModuleSpecifier": "project-relative",
  "javascript.preferences.importModuleSpecifier": "project-relative",
  "editor.tabSize": 2,
  "workbench.colorTheme": "One Dark Pro Darker",
  "editor.cursorBlinking": "phase"
}
```

## Key Bindings

> **Note**
> You do not need to setup these key bindings. Angular Enterprise will automatically apply upon installation.

| Command  | OS      | Default Binding                             | Angular Enterprise Binding                        |
| -------- | ------- | ------------------------------------------- | ------------------------------------------------- |
| Save All | Windows | <kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>S</kbd> | <kbd>Ctrl</kbd> + <kbd>SHIFT</kbd> + <kbd>S</kbd> |
| Save All | Mac     | <kbd>⌥</kbd> + <kbd>⌘</kbd> + <kbd>S</kbd>  | <kbd>⌘</kbd> + <kbd>SHIFT</kbd> + <kbd>S</kbd>    |

## Extension List

| Extension Name                                                                                        |
| ----------------------------------------------------------------------------------------------------- |
| [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)   |
| [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)                |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                  |
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                |
| [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)             |
| [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)  |
| [JEST Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)       |
| [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)                       |
| [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) |
| [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)                       |
| [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)       |

---

<img src='./logo-banner.png' width="350">
