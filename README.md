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

Navigate the site’s directory and run this command.

```shell
yarn
```

### Start developing

Navigate the site’s directory and start it up. Will be located on url: [http://localhost:3000](http://localhost:3000)

```shell
yarn start
```

### Build the project

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```shell
yarn build
```

### Test the project

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Eject the project

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Status

[![current release](https://img.shields.io/github/release/bromso/school-frontend.svg)](https://img.shields.io/github/release/bromso/school-frontend)

[![license](https://img.shields.io/github/license/bromso/school-frontend.svg)](https://img.shields.io/github/license/bromso/school-frontend)

[![peerDependencies Status](https://img.shields.io/david/peer/bromso/school-frontend)](https://david-dm.org/bromso/school-frontend?type=peer)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## What's included

### File structure

```text
🗄️ school-frontend
┃
┠── 📁 .github
┃    ├┄┄ 📁 ISSUE_TEMPLATE
┃    └┄┄ 📁 workflows
┃        └┄┄ 📄 semantic-release.yml
┃
┠── 📁 .vscode
┃   └┄┄ 📄 settings.json
┃
┠── 📁 docs
┃   └┄┄ 📁 img
┃
┠── 🖥️ client
┃
┠── ⚙️ server
┃
┠┄┄ 🐭 .editorconfig
┠┄┄ 📝 README.md
┠┄┄ 📝 CONTRIBUTING.md
┠┄┄ 📦 package.json
┖┄┄ 🧶 yarn.json

```

### Model, View, Controller (MVC) Design Pattern

```text
            ┏━━━━━━━━━━┓             ┏━━━━━━━━━━┓
    ┄┄┄┄┄┄┄┄◉    ⚙️     ┃        ┄┄┄┄◉    🛢️     ┃
   ┆        ┃Controller┃        ┆    ┃ Database ┃
   ┆        ┗━━○━━━◉━━━┛        ┆    ┗━━○━━━━━━━┛
┏━━◉━━━━━━━┓   ┆   ┆    ┏━━━━━━━◉━━┓    ┆
┃    💻    ○┄┄┄      ┄┄┄◉    ⚛️     ○┄┄┄┄
┃   View   ┃            ┃   Model  ┃
┗━━━━◉━━━━━┛            ┗━━━━━━━━━━┛
     ┆
┏━━━━◉━━━━━┓
┃    🧍    ┃
┃   User   ┃
┗━━━━━━━━━━┛
```

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

| Avatar                                         | Name        | Email                                                                                                                                           | Website                                  | Instagram                                                                                                                                                      | Twitter                                                                                                                                        | Facebook                                                                                                                                              | LinkedIn                                                                                                                                                        | Github                                                                                                                                       |
| ---------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Jonas Bröms Avatar](docs/img/jonasbroms.png) | Jonas Bröms | <a href="mailto:jonasbroms@icloud.com"><img src="https://cdn.svgporn.com/logos/google-gmail.svg" alt="eMail logo" width="48" height="48" /></a> | [jonasbroms.com](https://jonasbroms.com) | <a href="https://www.instagram.com/jonasbroms/"><img src="https://cdn.svgporn.com/logos/instagram-icon.svg" alt="Instagram logo" width="48" height="48" /></a> | <a href="https://twitter.com/jonasbroms"><img src="https://cdn.svgporn.com/logos/twitter.svg" alt="Twitter logo" width="48" height="48" /></a> | <a href="https://www.facebook.com/jonasbroms"><img src="https://cdn.svgporn.com/logos/facebook.svg" alt="Facebook logo" width="48" height="48" /></a> | <a href="https://www.linkedin.com/in/jonas-broms/"><img src="https://cdn.svgporn.com/logos/linkedin-icon.svg" alt="LinkedIn logo" width="48" height="48" /></a> | <a href="https://github.com/bromso"><img src="https://cdn.svgporn.com/logos/github-icon.svg" alt="Github logo" width="48" height="48" /></a> |

## Copyright and license

This project is licensed under the terms of the MIT license.
For more information, [click here](https://github.com/bromso/school-frontend/blob/master/LICENSE).
