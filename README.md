# amir-wallet-2


## Getting started

Installation of next package managers:
1. pnpm (https://www.npmjs.com/package/pnpm)

On macOS, Linux, or Windows Subsystem for Linux:
>curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

On Windows (using PowerShell):
>(Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing).Content | node - add --global pnpm

2. nx (https://nx.dev/getting-started/intro)
> npm i -g nx
> pnpm add nx -D -w

3. nestjs
> npm i -g @nestjs/cli

## Run/add package/ an app
1. Using pnpm
> pnpm add --filter <app-name> <package-name>

For example: >pnpm add --filter shared-ui typescript -D

## Add your files


## Integrate with your tools


## Collaborate with your team



## Test and Deploy


# Editing this README

// pnpm add --filter api-gateway @nestjs/microservices

Adding a new package only through pnpm:
 > pnpm add --filter <name-app> <napme-package>
For example:
 > pnpm add --filter proto-schema rxjs googole-protobuf

Start command: ❯ pnpm --filter <package-name> <command>
For Example: 
> pnpm --filter proto-schema build

Adding an app to the other app as package: ❯ pnpm add proto-schema --filter service-account --workspace

pnpm add : Installs a package and any packages that it depends on.
pnpm install : is used to install all dependencies for a project.

https://pnpm.io/cli/install 
https://pnpm.io/cli/add

# How add proto to nestjs

https://www.npmjs.com/package/nestjs-proto-gen-ts