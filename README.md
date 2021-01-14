![Skylite logo](https://github.com/SlDo/skylite-cli/blob/main/skylite.png?raw=true)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7088018572284836b2d8a9cd8144e286)](https://app.codacy.com/gh/SlDo/skylite-cli?utm_source=github.com&utm_medium=referral&utm_content=SlDo/skylite-cli&utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/SlDo/skylite-cli/branch/main/graph/badge.svg?token=FXCIP5Z5VS)](https://codecov.io/gh/SlDo/skylite-cli)
![GitHub package.json version](https://img.shields.io/github/package-json/v/sldo/skylite-cli)
![Downloads](https://img.shields.io/npm/dt/skylite)
![GitHub issues](https://img.shields.io/github/issues/sldo/skylite-cli) 
![NPM](https://img.shields.io/npm/l/skylite?color=blue)

Skyline is created for **fast generation of productive Nodes.js applications.** It solves the problem of generating a startup project, as well as its modules (such as controller and dal)

## Installation

```
npm install -g skylite
```

## Usage

💻 **Creating a project**

```
skylite create <name of project>
cd <name of project>
npm i <name of project>
```

🔌 **Creating a controller**

```
cd <name of project>
skylite generate controller <name of module>
```

🗃 **Creating a DAL**

```
cd <name of project>
skylite generate dal <name of module>
```

## License

[Apache 2.0](https://github.com/SlDo/skylite-cli/blob/main/LICENSE)



