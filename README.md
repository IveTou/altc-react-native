# New York Time Reviews v.1

This is a simple multiplatform app powered by [Expo](https://docs.expo.io) and [React Native](https://facebook.github.io/react-native/docs/getting-started).

## Introduction

New York Time Reviews is a React Native powered app built on top of the  [New York Times's Movie Reviews API](https://developer.nytimes.com/docs/movie-reviews-api/1/overview). This app just fetches NYT's movie reviews to show details and organize it by the user preference with a like/dislike feature. It does not persist data, so everything done will be reset when the system section gets updated. 
The next sections will present how to install, run and test the app.

**Disclaimers:**
> Web support in Expo is experimental and subject to breaking changes. Do not use this in production yet. Therefore, the provided dockerfile was not tested for a production environment.
> The provided API key is currently hardcoded to ease the first glance and test. In the next versions, this resource should be provided by an environment variable, thus the user has to register at NYT API and request an API KEY by their own.
> This project was tested in Ubuntu 16.04 LTS. Some of the commands described below may require administrator permission (prepend `sudo` in ubuntu) 
> About Expo CLI and SDK web support beta we are using: "It is stable enough for you to start playing with it, but not quite stable enough that you should use it to deploy an important app to production quite yet. Additionally, **it will not be until the next SDK version that Expo Web projects are compatible with managed Android and iOS projects since this web beta is not part of an official Expo SDK version.**" [blog.expo.io - Evan Bacon](https://blog.expo.io/expo-cli-and-sdk-web-support-beta-d0c588221375)


## Set Up

- Install [yarn](https://yarnpkg.com/en/docs/install) for package and dependency management
- Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to aquire the source files and versioning
- Clone this repo using `git clone https://github.com/IveTou/altec-frontend-test.git`
- Run `yarn` in the `altec-frontend-test` directory.
- 
## Running the app with Expo DevTools

#### Web

We are using an **experimental** web support for the Expo CLI and SDK.
For a web deployment just follow these steps:

- Run `yarn web`.
- You can now view **Frontend Test** in the browser.

#### Android/iOS
This project the following steps describe how to deploy this app using Expo DevTools and Metro Builder in a development environment. The expo package version which is used for web deployment is not part of an official Expo SDK version and  does not provide support for interactive Android/iOS devices with metro builder and 


- In package.json file, change `"expo": "^33.0.0-alpha.web...",` to `"expo": "^32.0.0",`
- Run `rm -rf node_modules/ && yarn cache clean`
- Run `npm i`
- Run `rm -rf $TMPDIR/haste-map-* && rm -rf $TMPDIR/metro-cache*` to clean metro cache
- Run `npm run start`.
- Make sure the server and target device is in the same network
- Scan the QR code above with the [Expo app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) (Android) or the Camera app (iOS).

## Testing the app
- First, go back to yarn running `rm -rf node_modules/ && npm cache clean --force` 
- To install packages with yarn again run `yarn` 
- To run unit test just run `yarn test`

