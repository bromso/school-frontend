# school-frontend

Repository for School project & assignments

## Table of Contents

- [External Documents](#external-documents)
- [Milestones](#milestones)
- [Projects](#projects)
- [Quick start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creator](#creator)
- [Copyright and license](#copyright-and-license)

## External Documents

- [Contributing](https://github.com/bromso/school-frontend/blob/main/CONTRIBUTING.md)
- [Changelog](https://github.com/bromso/school-frontend/blob/main/CHANGELOG.md)
- [Wiki](https://github.com/bromso/school-frontend/wiki)

## Projects

- [Issues](https://github.com/bromso/school-frontend/projects/1)
- [Pull requests](https://github.com/bromso/school-frontend/projects/2)
- [Questions](https://github.com/bromso/school-frontend/projects/3)

## Milestones

- [Create App Architecture](https://github.com/bromso/school-frontend/milestone/4)
- [Create Git Architecture](https://github.com/bromso/school-frontend/milestone/5)
- [Set Coding Conventions](https://github.com/bromso/school-frontend/milestone/3)
- [Create Documentation Architecture](https://github.com/bromso/school-frontend/milestone/2)
- [Assignment #2](https://github.com/bromso/school-frontend/milestone/5)
- [Assignment #3](https://github.com/bromso/school-frontend/milestone/6)
- [Assignment #4](https://github.com/bromso/school-frontend/milestone/9)
- [Assignment #5](https://github.com/bromso/school-frontend/milestone/10)
- [Assignment #6](https://github.com/bromso/school-frontend/milestone/7)

## Quick start

### Download

Navigate the a directory on your computer were you are working on sites and run this command:

```shell
git clone https://github.com/bromso/school-frontend.git
```

### Install packages

Navigate to the server directory and run this command.

```shell
yarn
```

### Start developing

Navigate the site’s directory and start it up. Will be located on url: [http://localhost:3001](http://localhost:3001)

```shell
nodemon
```

### Build the project

Builds the app for production to the `build` folder.\

```shell
yarn build
```

### Test the project

## Status

[![current release](https://img.shields.io/github/release/bromso/school-frontend.svg)](https://img.shields.io/github/release/bromso/school-frontend)

[![license](https://img.shields.io/github/license/bromso/school-frontend.svg)](https://img.shields.io/github/license/bromso/school-frontend)

[![peerDependencies Status](https://img.shields.io/david/peer/bromso/school-frontend)](https://david-dm.org/bromso/school-frontend?type=peer)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## What's included

### File structure

```text
🗄️ server
┃
┠── 📁 config
┃   └┄┄ 📄 index.js
┃
┠── 📁 src
┃   ├── 📁 controllers
┃   │   └┄┄ 📄 User.controller.js
┃   ├┄┄ 📁 middlewares
┃   ├┄┄ 📁 models
┃   └┄┄ 📁 routes
┃
┠┄┄ 🪟 .env
┠┄┄ ♻️ .index.js
┠┄┄ 📝 README.md
┠┄┄ 📦 package.json
┖┄┄ 🧶 yarn.json

```

### Model, View, Controller (MVC) Design Pattern

```text
            ┏━━━━━━━━━━┓             ┏━━━━━━━━━━┓
   ╭┄┄┄┄┄┄┄→◉    ⚙️    ○←┄┄╮    ╭┄┄┄┄◉    🛢️     ┃
   ┆        ┃Controller┃   ┆    ┆    ┃ Database ┃
   ┆        ┗━━○━━━◉━━━┛   ↓    ┆    ┗━━○━━━━━━━┛
┏━━◉━━━━━━━┓   ┆   ┆    ┏━━○━━━━◉━━┓    ↑
┃    💻    ○←┄┄╯   ╰┄┄┄→◉     ⚛️    ○┄┄┄┄╯
┃   View   ┃            ┃   Model  ┃
┗━━○━━━◉━━━┛            ┗━━━━━━━━━━┛ Data
   ┆   ↑
   ↓   ┆
┏━━○━━━◉━━━┓
┃    🧍    ┃
┃   User   ┃
┗━━━━━━━━━━┛ UI
```

### Dependencies

I recommended to have these CLI's and dependencies in order to download and install everything without a clitch.

| Logo                                                                                      | Name                                       | Comments                                             |
| ----------------------------------------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------- |
| <img src="https://cdn.svgporn.com/logos/homebrew.svg" alt="Homebrew Logo" height="48" />  | [Homebrew](https://brew.sh/)               | Package manager (for Mac)                            |
| ![NVM Logo](docs/img/nvm.png)                                                             | [NVM](https://github.com/nvm-sh/nvm)       | Node & NPM Version Manager                           |
| <img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="NodeJS Logo" height="48" /> | [NodeJS](https://nodejs.org/)              | JavaScript Runtime Engine                            |
| <img src="https://cdn.svgporn.com/logos/npm-icon.svg" alt="NPMJS Logo" height="48" />     | [NPMJS](https://www.npmjs.com/)            | Node Page Manager                                    |
| <img src="https://cdn.svgporn.com/logos/git-icon.svg" alt="Git Logo" height="48" />       | [Git](https://git-scm.com)                 | Distributed version control system                   |
| <img src="https://cdn.svgporn.com/logos/markdown.svg" alt="Markdown Logo" height="48" />  | [Markdown](https://www.markdownguide.org/) | Markup language for formating virtually any document |

### Tech Stack

### Required

The project uses these technologies.

| Logo                                                                                   | Name                                      | Category           | Description       |
| -------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------ | ----------------- |
| <img src="https://cdn.svgporn.com/logos/eslint.svg" alt="" ESLint Logo height="48" />  | [ESLint](https://eslint.org/)             | Coding conventions | JavaScript linter |
| ![EditorConfig Logo](docs/img/editorconfig.png)                                        | [EditorConfig](https://editorconfig.org/) | Coding conventions | IDE coding styles |
| <img src="https://cdn.svgporn.com/logos/nodemon.svg" alt="Nodemon Logo" height="48" /> | [Nodemon](https://nodemon.io/)            | Server             | Utility & Watcher |
| <img src="https://cdn.svgporn.com/logos/mongodb.svg" alt="MongoDB Logo" height="48" /> | [MongoDB](https://www.mongodb.org/)       | Database           | Database          |

### Design Pattern

All components, templates & pages are trying to follow the [MVC Framework](https://github.com/bromso/school-frontend/blob/main/DESIGN.md)

## Contributing

Please read through our [contributing guidelines](https://github.com/bromso/school-frontend/blob/main/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

## Bugs, Feature requests, Questions & Need help

Have a bug, feature request, need help or just want to question? Please first read the [issue guidelines](https://github.com/bromso/school-frontend/blob/main/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/bromso/school-frontend/issues/new).

- [🐛 Report a bug](https://github.com/bromso/school-frontend/issues/new?template=BUG_REPORT.md)
- [🛠️ Feature request](https://github.com/bromso/school-frontend/issues/new?template=FEATURE_REQUEST.md)
- [💬 Ask a question](https://github.com/bromso/school-frontend/issues/new?template=QUESTION.md)

## Versioning

For transparency into my release cycle and in striving to maintain backward compatibility, odd-gat is maintained under the [Semantic-Release](https://semantic-release.gitbook.io/semantic-release/) & [Semantic Versioning guidelines](https://semver.org). Sometimes we screw up, but we adhere to those rules whenever possible.

See the Releases section of our GitHub project for [CHANGELOG](https://github.com/bromso/school-frontend/blob/main/CHANGELOG.md) for each release version of odd-gat projects.

## Creator

| Avatar                                            | Name        | Email                                                                                                                                           | Website                                  | Instagram                                                                                                                                                      | Twitter                                                                                                                                        | Facebook                                                                                                                                              | LinkedIn                                                                                                                                                        | Github                                                                                                                                       |
| ------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Jonas Bröms Avatar](../docs/img/jonasbroms.png) | Jonas Bröms | <a href="mailto:jonasbroms@icloud.com"><img src="https://cdn.svgporn.com/logos/google-gmail.svg" alt="eMail logo" width="48" height="48" /></a> | [jonasbroms.com](https://jonasbroms.com) | <a href="https://www.instagram.com/jonasbroms/"><img src="https://cdn.svgporn.com/logos/instagram-icon.svg" alt="Instagram logo" width="48" height="48" /></a> | <a href="https://twitter.com/jonasbroms"><img src="https://cdn.svgporn.com/logos/twitter.svg" alt="Twitter logo" width="48" height="48" /></a> | <a href="https://www.facebook.com/jonasbroms"><img src="https://cdn.svgporn.com/logos/facebook.svg" alt="Facebook logo" width="48" height="48" /></a> | <a href="https://www.linkedin.com/in/jonas-broms/"><img src="https://cdn.svgporn.com/logos/linkedin-icon.svg" alt="LinkedIn logo" width="48" height="48" /></a> | <a href="https://github.com/bromso"><img src="https://cdn.svgporn.com/logos/github-icon.svg" alt="Github logo" width="48" height="48" /></a> |

## Copyright and license

This project is licensed under the terms of the MIT license.
For more information, [click here](https://github.com/bromso/school-frontend/blob/master/LICENSE).
