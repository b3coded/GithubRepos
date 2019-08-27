import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Title} from './styles';
import TextInput from '../../Components/input';
import Button from '../../Components/Button';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  nextPage = () => {
    const {username} = this.state;
    if (username.length === 0) return;
    this.props.navigation.navigate('Home', {username});
  };

  render() {
    return (
      <Container>
        <Icon size={120} name="github" color="#000" solid />
        <Title>Github Repos</Title>
        <TextInput
          placeholder="username"
          onChangeText={username => this.setState({username})}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button text="Show Repositories" onPress={this.nextPage} />
      </Container>
    );
  }
}

export default Auth;
