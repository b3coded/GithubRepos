import React from 'react';
import {View, StatusBar} from 'react-native';
import Routes from './routes';
import AppTheme from './styles';

export default function App () {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <AppTheme>
          <Routes />
        </AppTheme>
      </View>
    );
}
