import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image } from "react-native";

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
                <View style={{flex: 1, padding: 20}}>
                    <View style={{flexDirection: "row", alignContent: "flex-end", marginBottom: 20}}>
                        <View style={{flex: 1}}>
                            <Text style={{color: "#000", fontWeight: "bold", fontSize: 20}}>{username}</Text>
                        </View>
                        <Image
                            style={{width: 50, height: 50, borderRadius: 50, overflow: "hidden"}}
                            source={{uri: profilePicLink}}
                        />

                    </View>

                    

                    <FlatList
                        data={repos}
                        renderItem={
                            ({item}) => {
                                return (
                                    <TouchableOpacity
                                    style={{flex: 1, flexDirection: "row", marginVertical: 10}}
                                    onPress={() => {alert(item.name)}}
                                    >
                                        <View style={{flex: 1}}>
                                            <Text style={{color: "#000", fontWeight: "bold", fontSize: 18}}>{item.name}</Text>
                                            <Text>{item.description}</Text>
                                        </View>
                                        <View>
                                            <Text></Text>
                                        </View>
                                    </TouchableOpacity>
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