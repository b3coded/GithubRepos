import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import languages from '../Utils/languages.json';

const styles = {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 2
}
const ListItem = ({item}) => {
    let customColor = "#000";
    if(item.language != null){
        customColor = languages[item.language].color;
    }
    return (
    <TouchableOpacity style={styles} >
        <View style={{flex: 1}}>
            <Text style={{color: "#000", fontWeight: "bold", fontSize: 22, marginBottom: 10}}>
                <Icon name="book" color="#000" size={18} /> {item.name}
            </Text>
            <Text style={{fontSize: 14, marginBottom: 10}}>{item.description}</Text>

            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 14}}>
                    <Icon name="circle" color={customColor} size={16} solid /> {item.language ? item.language : "Undefined"}
                </Text>
                <Text style={{fontSize: 14}}>
                    <Icon name="star" color="#000" /> {item.stargazers_count}
                </Text>
                <Text style={{fontSize: 14}}>
                    <Icon name="eye" color="#000" /> {item.watchers}
                </Text>
                <Text style={{fontSize: 14}}>
                    <Icon name="code-branch" color="#000" /> {item.forks_count}
                </Text>
            </View>

        </View>
        <View>
            <Text></Text>
        </View>
    </TouchableOpacity>
    )
}


export default ListItem;