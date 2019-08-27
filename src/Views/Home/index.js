import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import ListItem from '../../Components/ListItem';
import Header from '../../Components/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      profilePicLink: '',
      repos: [],
      orgs: [],
      orgRepos: [[]],
    };
  }

  componentWillMount() {
    const {navigation} = this.props;
    const username = navigation.getParam('username', '');
    this.setState({
      username: username,
      profilePicLink: 'https://avatars.githubusercontent.com/' + username,
    });
  }

  componentDidMount() {
    this.setOrgs();
    this.setRepos();
  }

  setRepos = async () => {
    let {username} = this.state;
    let link = 'https://api.github.com/users/' + username + '/repos';

    await fetch(link)
      .then(response => {
        return response.json();
      })
      .then(repos => {
        this.setState({repos: repos});
      })
      .catch(err => {
        alert(err);
      });
  };

  setOrgs = async () => {
    const {username} = this.state;
    let link = 'https://api.github.com/users/' + username + '/orgs';

    await fetch(link)
      .then(response => {
        return response.json();
      })
      .then(orgs => {
        this.setState({orgs: orgs});
        this.setOrgRepos();
      })
      .catch(err => {
        alert(err);
      });
  };

  setOrgRepos = async () => {
    let {orgs} = this.state;

    let reps = [];
    orgs.forEach(async (item, index) => {
      const link =
        'https://api.github.com/users/' + orgs[index].login + '/repos';

      await fetch(link)
        .then(response => {
          return response.json();
        })
        .then(repos => {
          reps.push(repos);
        })
        .catch(err => {
          alert(err);
        });
      this.setState({orgRepos: reps});
    });
  };

  _OnItemPress = id => {
    this.props.navigation.navigate('Repository', {repo: id});
  };

  render() {
    const {username, repos, profilePicLink, orgs, orgRepos} = this.state;
    console.log(orgRepos);
    const organizations = orgs.map((item, index) => (
      <View>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 22,
            marginVertical: 10,
          }}>
          {item.login}
        </Text>

        {orgRepos[index].map((it, i) => (
          <ListItem item={it} onPress={() => this._OnItemPress(it.id)} />
        ))}
      </View>
    ));

    return (
      <ScrollView>
        <Header title={username} image={profilePicLink} />

        <TextInput
          placeholder="search"
          style={{
            marginVertical: 20,
            marginHorizontal: 10,
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#000',
            backgroundColor: '#fff',
            color: '#000',
          }}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#f7f7f7',
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 22,
              marginBottom: 10,
            }}>
            Your Repositories
          </Text>

          <FlatList
            data={repos}
            keyExtractor={(item, index) => item.key}
            renderItem={({item}) => {
              return (
                <ListItem
                  item={item}
                  onPress={() => this._OnItemPress(item.id)}
                />
              );
            }}
            removeClippedSubviews={false}
            extraData={this.state}
          />
          {organizations}
        </View>
      </ScrollView>
    );
  }
}

export default Home;
