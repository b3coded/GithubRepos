import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Routes />
      </View>
    );
  }
}

export default App;
