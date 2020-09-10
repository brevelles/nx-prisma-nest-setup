# NX Workspace Setup with Prisma and NestJS

Prisma isn't supported by NX at the moment. This setup implements Prisma with a NestJS application.

The Prisma folder can be located anywhere in the monorepo. But the migration and generation commands have to be run from the Prisma folder.

Multiple Prisma folders can be added for multiple projects living in the same monorepo. But only one Prisma Client can be generated at a time.

In order to generate the Prisma Client for your application, install the packages and run the migration and generation commands.

The current setup includes a Docker Compose file for the PostgreSQL database inside the Prisma folder.

<p align="center" style="margin: 30px 0">
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="200">
  <img src="https://docs.nestjs.com/assets/logo-small.svg" width="140" style="margin-left: 20px">
  <img src="https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png" width="120" style="margin-left: 20px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/330px-Postgresql_elephant.svg.png" width="120" style="margin-left: 20px">
  
</p>

<br>

# Installation

Install the dependencies:

\$ `yarn install`

<br>

Enter the prisma folder:

\$ `cd apps/prisma`

<br>

Start the PostgreSQL Docker container:

\$ `docker-compose up -d`

<br>

Migrate the database (to be done every time you change the prisma schema):

\$ `npx prisma migrate save -c --experimental`

\$ `npx prisma migrate up -c --experimental`

(Note: At the moment the --experiemntal flag is required)

<br>

Generate the Prisma Client:

\$ `npx prisma generate`

<br>

Serve the Nest app from the root of the monorepo:

\$ `cd ../..` (if needed)

\$ `nx serve nest`

<br>

The API should be listening on `http://localhost:3333/api`

<br>

# NX

**Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@prisma/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
