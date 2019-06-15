import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import styles from "../styles";

const Header = ({children, title, image = null}) => {

return (
<View style={{flex: 1, backgroundColor: "#000", padding: 20}}>
                <View style={{flexDirection: "row", alignContent: "flex-end"}}>
                        <View style={{flex: 1, justifyContent: "flex-end"}}>
                            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 22, letterSpacing: 1}}>{title}</Text>
                        </View>
                        {image ?
                        <Image
                            style={{width: 50, height: 50, borderRadius: 50, overflow: "hidden"}}
                            source={{uri: image}}
                        />
                        : null }
                </View>
                </View>
);
}

export default Header;