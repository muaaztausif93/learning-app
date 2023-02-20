# learn-language-mvp

## 1. Project Overview

The project is built with React Native (non-Expo) and with Typescript.

### Development Environment

- node 14+
- yarn 1.22+
- XCode 13+
- Android Studio

## 2. Basic Libraries

    React Native 0.71.3
    Navigation Library: [React Navigation 6](https://reactnavigation.org)
    Library for Api integration: Axios + [React Query](https://react-query.tanstack.com)  

    2.1: Video player library
          We will be using react-native-video for playing video and for the video controls function we will be using  react-native-video-controls or react-native-video-player. The reason for using this package is that it has regular updates and large community.
    
    2.2: State management library
          We will be using Redux-Toolkit for managing state inside the application. The reason behind this is that it is mostly recommended for javascript application in sense of managing state. Other than this it is the updated version of Redux so that we using Redux-Toolkit istead of Redux.

    2.3: Styling library
          We will be using react-native-elements, react-native-vector-icons for basic ui components and assets. And for styling we will be using Stylesheet for React Native. These libraries are covering most of the designing related components and due to this feasibility we require less time to design our application.

    2.4: API handling library
          React-Query is best for making api calls using the Axios request manager. Why React-Query?. Because it has built in states for loading, error handling, success case handling and more often its has the capablity to cache the query results to make the user experience more reliable.

    2.5: Testing library
          Jest will be used as testing library to test our functionality inside the application to deliver minimal bug free application. Why Jest?. Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

    2.6: Design patterns
          Following the Container-View pattern for building our application. As React is a library for building user interfaces so using MVC is not suitable not fit in for React based application.