# pkg-loading-time
Illustrates module require time difference in pkg between npm and pnpm

## Pre-requisites
- npm
- pnpm

## How-to

`src.js` requires 2 modules, recording the time it takes to require them.

- Run `npm run pkg-npm` to run the pkg'd version of `src.js` using npm to install the dependencies.
- Run `npm run pkg-pnpm` to run the pkg'd version of `src.js` using pnpm to install the dependencies.

## Results
Executables whose dependencies were installed with pnpm exhibit faster require times than those installed with npm.
Example output:

```
$ npm run pkg-npm
aws-sdk required in 105ms
ssh2 required in 31ms

$ npm run pkg-pnpm
aws-sdk required in 122ms
ssh2 required in 511ms
```