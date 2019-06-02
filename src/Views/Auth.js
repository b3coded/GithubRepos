import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    nextPage = () => {
        this.props.navigation.navigate("Home", {username: this.state.username});
    }

    render() { 
        return (
            <View style={{flex: 1, justifyContent: "center", padding: 20}}>
                <Text style={{textAlign: "center"}}>
                    <Icon size={120} name="github" color="#000" solid/>
                </Text>
                
                <TextInput 
                placeholder="Username"
                onChangeText={(username) => this.setState({username})}
                style={{marginVertical: 10, padding: 10, borderRadius: 5, borderWidth: 1, borderColor: "#000"}}
                autoCapitalize="none"
                autoCorrect={false}
                />
                <TouchableOpacity style={{backgroundColor: "#000", padding: 15, borderRadius: 5, borderWidth: 1, borderColor: "#000"}} onPress={this.nextPage}>
                    <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 18}}>Enter</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
 
export default Auth;