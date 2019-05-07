# New York Time Reviews v.1

This is an simple multiplatform app powered by [Expo](https://docs.expo.io) and [React Native](https://facebook.github.io/react-native/docs/getting-started).

## Introduction

New York Time Reviews is a React Native powered app built on top of the  [New York Times's Movie Reviews API](https://developer.nytimes.com/docs/movie-reviews-api/1/overview). This app just fetch NYT's movie reviews to show details and organize it by the user preference with a like/dislike feature. It does not persists data, so everything done will be reset when the system section get updated. 
The next sections will present how to install, run and test the app.

**Disclaimers:**
> Web support in Expo is experimental and subject to breaking changes. Do not use this in production yet. Therefore, the provided dockerfile was not tested for production environment.
> The provided API key is currently hard coded to ease the first glance and test. In the next versions, this resource should be provided by an environment variable,thus the user have to resister at NYT API and request an API KEY by their own.


## Set Up

- Install [yarn](https://yarnpkg.com/en/docs/install) for package and dependency management
- Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to aquire the source files and versioning
- Clone this repo using `git clone https://github.com/IveTou/altec-frontend-test.git`
- Run `yarn` in the `altec-frontend-test` directory.
- 
## Running the app with Expo DevTools

#### Web
For a we deployment just follow this steps:

- Run `yarn web`.
- You can now view **Frontend Test** in the browser.

#### Android/iOS
This project the folowwing steps describe how to deploy this app using Expo DevTools and Metro Builder in a development environment. The expo package version which is used for a web deployment, does not belong to canonical expo versions, and  does not provides support for iteractive Android/iOS devices wirh metro builder and 

- Install the last expo package by `yarn add expo --save`
- Run `yarn start`.
- Make sure the server and target device is in the same network
- Scan the QR code above with the [Expo app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) (Android) or the Camera app (iOS).

## Testing the app

To run unit test just run `yarn test`

