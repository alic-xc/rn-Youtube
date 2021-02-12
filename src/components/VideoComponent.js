import React, { useState } from 'react'
import {Image, View, Text, StyleSheet} from 'react-native' 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import  { useNavigation } from '@react-navigation/native'


const VideoComponent = ({video, gridDisplay}) => {

    const navigation = useNavigation()

    return (
        <View style={gridDisplay?styles.gridStyle: null}>
            <TouchableOpacity>
                <Image source={require('../../assets/naruto.png')} style={gridDisplay?styles.imageGridStyle:styles.imageStyle} />
            </TouchableOpacity>
            <View style={styles.barStyle}>
                <View style={gridDisplay?styles.HideProfileStyle:styles.profileContainerStyle}>
                    <Image source={require('../../assets/icon.jpeg')} style={styles.profileStyle} />
                </View>
                <TouchableOpacity style={gridDisplay? styles.titleGridContainerStyle: styles.titleContainerStyle} onPress={() => navigation.navigate('Details', {name: video.name}) }>
                    <Text style={gridDisplay? styles.titleGridStyle :styles.titleStyle}>{video.name}</Text>
                    <Text style={gridDisplay? styles.textGridStyle :styles.textStyle}> naruto . 12.4k views . 20 hours ago </Text>
                </TouchableOpacity>
                <Menu style={styles.iconContainerStyle}>
                    <MenuTrigger>     
                       <MaterialCommunityIcons name="dots-vertical" size={20} color="#888" />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Save`)}>
                            <Text style={styles.optionStyle}> Not interested</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => alert(`Save`)}>
                            <Text style={styles.optionStyle}>Save to Watch later</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => alert(`Save`)}>
                            <Text style={styles.optionStyle}> Save to playlist</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => alert(`Save`)}>
                            <Text style={styles.optionStyle}> Download</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => alert(`Save`)}>
                            <Text style={styles.optionStyle}> Share </Text>
                        </MenuOption>
                        <MenuOption onSelect={() => alert(`Save`)}>
                            <Text style={styles.optionStyle}> Report </Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    optionStyle:{
        padding: 10,
    },
    gridStyle:{
        borderBottomWidth: 2,
        borderColor: '#eee',
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 5
    },
    imageGridStyle:{
        width: 150,
        height: 100,
    },
    imageStyle:{
        width: 'auto',
        height: 200
    },
    barStyle:{
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    titleGridContainerStyle:{
        width: 150,
    },
    titleContainerStyle: {
        flex: 2,
        width: 250,        
    },
    titleStyle: {
        fontWeight: "600",
        fontSize: 18,
        letterSpacing:-1,
        color: '#333',
    },
    titleGridStyle:{
        fontWeight: "600",
        fontSize: 15,
        letterSpacing:-1,
        color: '#333',
    },
    profileStyle:{
        height: 40,
        width: 40,
        borderRadius: 100,  
    },
    profileContainerStyle: {
        borderRadius: 100,
    },
    HideProfileStyle:{
        display: 'none'
    },
    textStyle:{
        color: '#555', 
        marginTop: 10,
    },
    textGridStyle: {
        fontSize: 12,
        marginTop: 10,
        color: '#555',
    }
})

export default VideoComponent;