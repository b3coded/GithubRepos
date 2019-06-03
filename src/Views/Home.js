import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import styles from "../styles";
import ListItem from "../Components/ListItem";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            profilePicLink: '',
            repos: []
        }
    }

    componentWillMount(){
        const { navigation } = this.props;
        const username = navigation.getParam("username", "");
        this.setState({
            username: username,
            profilePicLink: ("https://avatars.githubusercontent.com/"+username)
        })
    }
    componentDidMount(){
        this.getData();
    }
    getData = async () => {
        const { username } = this.state;
        let link = "https://api.github.com/users/" + username + "/starred?sort=updated&direction=desc";

        await fetch(link).then(
            (response) => {
                return response.json();
            }
        ).then(
            (repos) => {
                this.setState({repos: repos});
            }
        ).catch(
            (err) => {
                alert(err);
            }
        );
    }

    render() {
        const { username, repos, profilePicLink } = this.state;
        return (
                <ScrollView>
                
                <View style={{flex: 1, backgroundColor: "#000", padding: 20}}>
                <View style={{flexDirection: "row", alignContent: "flex-end"}}>
                        <View style={{flex: 1, justifyContent: "flex-end"}}>
                            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 22, letterSpacing: 1}}>{username}</Text>
                        </View>
                        <Image
                            style={{width: 50, height: 50, borderRadius: 50, overflow: "hidden"}}
                            source={{uri: profilePicLink}}
                        />
                </View>
                <TextInput 
                    placeholder="search"
                    style={{marginVertical: 20, padding: 10, borderRadius: 5, borderWidth: 1, borderColor: "#fff", backgroundColor: "#fff", color: "#fff"}}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                </View>
                <View style={{flex: 1, backgroundColor: "#f7f7f7"}}>

                    <FlatList
                        data={repos}
                        renderItem={
                            ({item}) => {
                                return (
                                    <ListItem item={item} />
                                );
                            }
                        }
                    />
                    </View>
                </ScrollView>
        )
    }
}
 
export default Home;