# Configuração

# https://gist.github.com/joaobibiano/3d758fb82b4ee4d86697ac0f9c4a8efa

# settings.json

{
  "editor.fontSize": 14,
  "editor.fontLigatures": true,
  "explorer.compactFolders": false,
  "editor.rulers": [80, 120],
  "editor.formatOnSave": true,
  "eslint.packageManager": "yarn",
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.associations": {
    ".sequelizerc": "javascript",
    ".stylelintrc": "json",
    ".prettierrc": "json"
  },
  // left signal on selected line
  "editor.renderLineHighlight": "gutter",
  "terminal.integrated.fontSize": 14,
  "workbench.iconTheme": "vscode-icons",
  "workbench.startupEditor": "newUntitledFile",
  "editor.tabSize": 2,
  "extensions.ignoreRecommendations": true,
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },

  "gitlens.codeLens.recentChange.enabled": false,
  "gitlens.codeLens.authors.enabled": false,
  "gitlens.codeLens.enabled": false,
  "git.enableSmartCommit": true,
  "editor.parameterHints.enabled": false,
  "typescript.updateImportsOnFileMove.enabled": "never",
  "explorer.confirmDragAndDrop": false,
  "liveshare.featureSet": "insiders",
  "explorer.confirmDelete": false,
  "typescript.tsserver.log": "verbose",
  "javascript.suggest.autoImports": false,
  "typescript.suggest.autoImports": false,
  "workbench.activityBar.visible": true,
  // Sync config
  "git.autofetch": true,
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "git.confirmSync": false,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "editor.suggestSelection": "first",
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "none",
  "workbench.editor.untitled.hint": "hidden",
  "editor.inlineSuggest.enabled": true,
  "editor.bracketPairColorization.enabled": true,
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": true,
    "markdown": true,
    "javascript": true
  },
  "workbench.colorTheme": "Winter is Coming (Dark Blue)",
  "html.autoClosingTags": true,
  "editor.linkedEditing": true,
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript", // if you are using typescript
    "typescriptreact": "javascript" // if you are using typescript with react
  },
  "editor.quickSuggestions": {
    "strings": true // forces VS Code to trigger completions when editing "string" content
  },
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)", // tw`...`
    "tw\\.[^`]+`([^`]*)`", // tw.xxx<xxx>`...`
    "tw\\(.*?\\).*?`([^`]*)" // tw(Component)<xxx>`...`
  ],
  "code-runner.clearPreviousOutput": true,
  "code-runner.saveFileBeforeRun": true,
  "files.autoSave": "afterDelay",
  "remote.WSL.fileWatcher.polling": true,
  "remote.WSL.debug": true,
  "files.autoSaveDelay": 500
}


# extensions.json

{
  "recommendations": [
    "formulahendry.auto-rename-tag",
    "hookyqr.beautify",
    "naumovs.color-highlight",
    "aeschli.vscode-css-formatter",
    "dbaeumer.vscode-eslint",
    "github.copilot",
    "abusaidm.html-snippets",
    "zignd.html-css-class-completion",
    "xabikos.javascriptsnippets",
    "davidanson.vscode-markdownlint",
    "christian-kohler.npm-intellisense",
    "christian-kohler.path-intellisense",
    "esbenp.prettier-vscode",
    "tal7aouy.rainbow-bracket",
    "rocketseat.rocketseatreactnative",
    "rocketseat.rocketseatreactjs",
    "bradlc.vscode-tailwindcss",
    "hotchemi.vscode-find-pr",
    "styled-components.vscode-styled-components",
    "formulahendry.code-runner",
    "ms-vscode.js-debug-nightly",
    "negokaz.live-server-preview",
    "ms-vsliveshare.vsliveshare",
    "vscode-icons-team.vscode-icons",
    "ms-vsliveshare.vsliveshare-pack",
    "editorconfig.editorconfig",
    "ms-vsliveshare.vsliveshare-audio",
    "ritwickdey.LiveServer"
  ]
}

# Extensions

# Copy and paste into your integrated terminal to install

# https://aka.ms/PowerShell-Release?tag=v7.2.4

code --install-extension formulahendry.auto-rename-tag
code --install-extension hookyqr.beautify
code --install-extension naumovs.color-highlight
code --install-extension aeschli.vscode-css-formatter
code --install-extension abusaidm.html-snippets
code --install-extension zignd.html-css-class-completion
code --install-extension xabikos.javascriptsnippets
code --install-extension davidanson.vscode-markdownlint
code --install-extension christian-kohler.path-intellisense
code --install-extension hotchemi.vscode-find-pr
code --install-extension formulahendry.code-runner
code --install-extension ms-vscode.js-debug-nightly
code --install-extension negokaz.live-server-preview
code --install-extension ms-vsliveshare.vsliveshare-pack
code --install-extension editorconfig.editorconfig
code --install-extension ms-vsliveshare.vsliveshare-audio
code --install-extension ms-vscode-remote.remote-wsl
code --install-extension eg2.vscode-npm-script
code --install-extension christian-kohler.npm-intellisense
code --install-extension tal7aouy.rainbow-bracket
code --install-extension styled-components.vscode-styled-components
code --install-extension vscode-icons-team.vscode-icons
code --install-extension bradlc.vscode-tailwindcss
code --install-extension dbaeumer.vscode-eslint
code --install-extension DotJoshJohnson.xml
code --install-extension dracula-theme.theme-dracula
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension eamodio.gitlens
code --install-extension esbenp.prettier-vscode
code --install-extension GitHub.copilot
code --install-extension johnpapa.winteriscoming
code --install-extension jpoissonnier.vscode-styled-components
code --install-extension ms-vsliveshare.vsliveshare
code --install-extension naumovs.color-highlight
code --install-extension PKief.material-icon-theme
code --install-extension ritwickdey.LiveServer
code --install-extension rocketseat.rocketseatreactjs
code --install-extension rocketseat.rocketseatreactnative
code --install-extension rocketseat.theme-omni
code --install-extension Shan.code-settings-sync