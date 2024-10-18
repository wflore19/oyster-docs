# Contributing
Technical documentation for Oyster. The goal is to help users and contributers understand how to use and maintain Oyster. You may find guides or support here related to: 

- onboarding 
- common bug fixes
- tutorials
- example code
- etc..

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Git](https://git-scm.com/) installed
- [Node.JS](https://nodejs.org/en/download/prebuilt-binaries) installed (x64 or ARM64, version >=20.x)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) (v1) installed

## Installation

To set up the project locally, follow these steps:

1. Clone the repository
2. Navigate to the project directory
3. Run the following command to install dependencies:

```
$ yarn
```

## Local Development
To start the local development server, use the following command:

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Building

To build the static content, use:

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## License

By contributing your code to the this GitHub repository, you agree to license your contribution under the MIT license.

