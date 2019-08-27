import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components';

export const Colors = {
  lightBackground: '#FFF',
  primary: '#000',
  text: '#FFF',
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,

    elevation: 8,
    borderWidth: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: '#ccc',
  },
});

const AppTheme = ({children}) => (
  <ThemeProvider theme={Colors}>
    <>{children}</>
  </ThemeProvider>
);

export default AppTheme;
