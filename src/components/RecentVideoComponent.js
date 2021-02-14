import React from 'react'
import { Image, TouchableOpacity, FlatList, View, Text, StyleSheet } from 'react-native'
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import { MaterialCommunityIcons, } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

const VideoGridComponent = ({video}) => {
    const navigation = useNavigation()

    return (
        <View style={styles.ContainerStyle}>
            <TouchableOpacity>
                <Image source={require('../../assets/naruto.png')} style={styles.imageStyle} />
            </TouchableOpacity>
            <View style={styles.barStyle}>
                <TouchableOpacity style={styles.titleContainerStyle} onPress={() => navigation.navigate('Details', {name: video.name}) }>
                    <Text style={styles.titleStyle}>{video.name}</Text>
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


const RecentVideoComponent = () => {

    const movieList = [
        {'name': 'Jide Jendo', 'views': '34.5k'},
        {'name': 'Kunle Poly', 'views': '12k'},
        {'name': 'Sammu Alajo', 'views': '23k'},
        {'name': 'Naruto vs Madara ', 'views': '23k'},
        {'name': 'How to repair Laptop', 'views': '73k'},
        {'name': 'Get rich while you die', 'views': '203k'},
        {'name': 'Sajo', 'views': '239k'},
    ]

    return (
        <View style={{ borderBottomWidth:1, borderBottomColor: '#eee' }}>
            <Text style={{ fontSize: 14, padding:5, }}>Recent Video</Text>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={movieList} renderItem={ result => <VideoGridComponent video={result.item} /> } keyExtractor={ item => item.name } />
        </View>
    )
}

const styles = StyleSheet.create({
    optionStyle:{
        padding: 10,
    },
    ContainerStyle:{
        width: 160,
        padding:5,
        height: 'auto',
    },
    imageStyle:{
        width: 'auto',
        height: 80
    },
    barStyle:{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        backgroundColor: '#fff',
    },
    titleContainerStyle: {
        flex: 2,
        width: 250,        
    },
    titleStyle: {
        fontWeight: "600",
        fontSize: 14,
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
    textStyle:{
        color: '#555', 
        marginTop: 10,
    },
})


export default RecentVideoComponent;
