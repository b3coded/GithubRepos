import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import styles from "../styles";
import Header from "../Components/Header";
import Icon from "react-native-vector-icons/FontAwesome5";
const base64 = require('base-64');


class Repository extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            details: {
                owner: {}
            },
            readme: {},
            releases: []
        }
    }

    componentWillMount(){
        const { navigation } = this.props;
        const id = navigation.getParam("repo");
        this.setState({
            id: id
        })
    }
    componentDidMount(){
        this.getData();
    }

    getData = async () => {
        const { id } = this.state;
        let link = "https://api.github.com/repositories/" + id ;

        await fetch(link).then(
            (response) => {
                return response.json();
            }
        ).then(
            (details) => {
                this.setState({details: details});
                
                this.getData2();
                this.getData3();
            }
        ).catch(
            (err) => {
                alert(err);
            }
        );
    }
    
    getData2 = async () => {
        const { details } = this.state;

        let link = `https://api.github.com/repos/${details.owner.login}/${details.name}/contents/README.md`;

        await fetch(link).then(
            (response) => {
                return response.json();
            }
        ).then(
            (details) => {
                // details.content = base64.decode(details.content);
                this.setState({readme: details});
            }
        ).catch(
            (err) => {
                alert(err);
            }
        );
    }
    getData3 = async () => {
        const { details } = this.state;

        let link = `https://api.github.com/repos/${details.owner.login}/${details.name}/releases`;

        await fetch(link).then(
            (response) => {
                return response.json();
            }
        ).then(
            (details) => {
                console.log(link)
                console.log(details);
                this.setState({releases: details});
            }
        ).catch(
            (err) => {
                alert(err);
            }
        );
    }

    render(){
    const { details, readme, releases } = this.state;
        return (
        <View>
                <Header
                title={details.name}
                image={details.owner.avatar_url}
                />

                <Text>Created at: <Text>{details.created_at}</Text> </Text>
                <Text>Updated at: <Text>{details.updated_at}</Text> </Text>

                <Text>
                    <Icon name="book" color="#000" size={18} /> Open Issues: {details.open_issues}
                </Text>
                <Text>
                    <Icon name="info" color="#000" size={18} /> Description: {details.description}
                </Text>
                
                <Text>Releases: {releases.length ? releases.length : null}</Text>
                {releases.map((item, i) => (
                    <View style={{marginVertical: 20}}>
                        <Text>Version: {item.tag_name}</Text>
                        <Text>Publish Date: {item.published_at}</Text>

                    </View>
                ))}
                

        </View>
        );
    }

}
export default Repository;