### MERN Template with Typescript

## How to start Project

Git clone
After clone, open in terminal.\
then run\
**npm install or yarn**

to start\
**npm start or yarn start**

to build run\
**npm build or yarn build**

### A directory layout

    .
    ├── dist         # Compiled files (alternatively `build`)
    ├── frontend     # React and Typescript Frontend Code
    ├── mobile       #React Native and Typescript Code for Andriod and IOS Applications
    ├── src          # Main files and implementation of backend
    |      |
    |      ├── config                # Database and Env vaialbles
    |      ├── controllers           # Controllers function operating on model according to routes
    |      ├── models                # MongoDb Models files
    |      ├── routes                # All routes according to controller
    |      ├── types                 # Interfaces and type of models and data
    |      ├── utils                 # Helper finctions and middlewares
    |      ├── app.ts
    |
    |
    ├── package.json
    ├── README.md
    └── tsconfig.json

### frontend Folder directory layout

    .
    ├── build         # Compiled files (alternatively `dist`)
    ├── public        # static files
    ├── src
    |     ├── assets                     #images and assets folder
    |     ├── components                 # global components
    |     ├── constants                  #global constant
    |     ├── interfaces                 #interfaces and type of components data
    |     ├── pages                      #screens and .tsx components
    |     ├── redux                      #state management
    |     ├── router                     #routes
    |     ├── interfaces                 #interfaces and type of components data
    |     ├── utils                      #helper and utils functions
    |     ├── App.tsx
    |     ├── index.tsx
    |     ├── react-app-env.d.ts
    |     ├── ThemeProvider.tsx
    |
    ├── package.json
    ├── tsconfig.json
    └── README.md

### mobile Folder directory layout

    .
    ├── android         #Android App setting and configurations related to Andriod Atudio
    ├── ios             #IOS App setting and configurations related to Xcode
    ├── src
    |   ├── assets                     #images and assets folder
    |   ├── components                 # global components
    |   ├── constants                  #global constant
    |   ├── interfaces                 #interfaces and type of components data
    |   ├── navigations                #routes or screens for navigation
    |   ├── redux                      #state management
    |   ├── screens                    #screens and .tsx components
    |   ├── interfaces                 #interfaces and type of components data
    |   ├── utils                      #helper and utils functions
    |   ├── App.tsx
    |
    |
    ├── .buckconfig
    ├── app.json
    ├── babel.confiq.json
    ├── index.js                #entry point of APP
    ├── mertro.confiq.js
    ├── package.json
    ├── rn-cli.config.json
    |── tsconfig.json

## Backend packages used

**bcryptjs**

**body-parser**

**concurrently**

**cookie-parser**

**cors**

**dotenv**

**express**

**jsonwebtoken**

**mongoose**

**typescript**

## Frontend React packages used

**@material-ui/core**

**@material-ui/icons**

**@testing-library/jest-dom**

**@testing-library/react**

**@testing-library/user-event**

**@types/jest**

**@types/node**

**@types/react**

**@types/react-dom**

**@types/react-router-dom**

**axios**

**react**

**react-dom**

**react-router-dom**

**react-scripts**

**typescript**

**web-vitals**

## React Native packages used

**@react-native-community/masked-view**

**@react-navigation/drawer**

**@react-navigation/material-bottom-tabs**

**@react-navigation/native**

**@react-navigation/stack**

**axios**

**moment**

**react**

**react-native**

**react-native-gesture-handler**

**react-native-paper**

**react-native-reanimated**

**react-native-safe-area-context**

**react-native-screens**

**react-native-status-bar-height**

**react-native-vector-icons**

**react-native-web**

**react-navigation**

**styled-components**
