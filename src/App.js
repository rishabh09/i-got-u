import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Signup from './components/Signup/'
import Main from './components/Main/'

export default class App extends Component {
   renderComponent (route, navigator) {
     if (route.name === 'signup') {
      return <Signup navigator={navigator}/>
    }  
    if (route.name === 'main') {
      return <Main navigator={navigator}/>
    }  
  }


  render() {
    return (
      <Navigator initialRoute={{ name: 'main'}} renderScene={this.renderComponent.bind(this)} />    );
  }
}

const styles = StyleSheet.create({
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

