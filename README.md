# React app (Vite)

## Installation

```
yarn
```

## Running dev server

```
yarn start
```

This will start a local server listening for http requests on port 3000.

It will also ask your browser to open a tab to `http://localhost:3000/`

Any type-check and linting errors will appear in the browser and in the terminal output as you browse.

## Getting type-check and lint errors into vscode's problem list

Run the default build task in vscode using ctrl-shift-B (or mac: Cmd-shift-B)
This will run first type-checking and if that passes will then run eslint.
VSCode's problems list will be populated with errors from the first of those tasks to fail.

This is configured in .vscode/tasks.json

## Useful Links

[Architectural Diagram](https://whimsical.com/dog-breed-app-RZHfRL4Mx86aSxchAtZTvV)
[Back-end Code](https://github.com/danivoro/c7b4-doog-breeds-app)
[Deployed Front-end](https://vote-dog-breeds.netlify.app/)
