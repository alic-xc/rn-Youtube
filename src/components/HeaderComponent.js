import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons, Fontisto, FontAwesome, EvilIcons} from '@expo/vector-icons'

const HeaderComponent = () => {
    return (
        <View style={styles.headerStyle}>
            <View style={styles.logoStyle}>
                <MaterialCommunityIcons name="youtube" size={40} color="red" />
                <Text style={styles.titleStyle}> YouTube </Text>
            </View>
            <View style={styles.iconSyle}>
                <TouchableOpacity>
                    <FontAwesome name="video-camera" size={18} color="#555"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Fontisto name="search" size={18} color="#555" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("Done") }>
                    <EvilIcons name="user" size={23} color="#555" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        height:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff'
    },
    logoStyle: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'

    },
    iconSyle: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: -2,
    }
})

export default HeaderComponent;
