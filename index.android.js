//index.android.js place coee here for Android
//import a library to create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component
const App = () => (
	<View style={{flex: 1}}>
		<Header headerText={'Albums'} />
		<AlbumList/>
	</View>
);

//render component to device
AppRegistry.registerComponent('albums', () => App);
