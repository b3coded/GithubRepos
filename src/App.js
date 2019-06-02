import React, { Component } from "react";
import { View, Text } from "react-native";
import Routes from "./routes";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View style={{flex: 1}}>
                <Routes />
            </View>
        )
    }
}
 
export default App;