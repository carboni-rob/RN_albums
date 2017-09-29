//index.android.js place coee here for Android
//import a library to create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a component
const App = () => (
	<Header/>
);

//render component to device
AppRegistry.registerComponent('albums', () => App);
