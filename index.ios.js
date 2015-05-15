/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  DeviceEventEmitter,
  Text,
  View,
} = React;

// Load Up our Native Module..
var {
    RNCloudinary
} = require('NativeModules');


var subscription = DeviceEventEmitter.addListener(
  RNCloudinary.ProgressEvent,
  (progressInfo) => console.log(progressInfo)
);


RNCloudinary.uploadImage("", function(_response){
  console.log(JSON.stringify(_response,null,2));


  // Don't forget to unsubscribe, typically in componentWillUnmount
  subscription.remove();

});

var RNCloudinaryDemo = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNCloudinaryDemo', () => RNCloudinaryDemo);
