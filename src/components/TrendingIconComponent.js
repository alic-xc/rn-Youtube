import React from 'react'
import {Pressable, View, Text, StyleSheet} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import {Fontisto, MaterialCommunityIcons} from '@expo/vector-icons'

const TrendingIcons = () => {
    return (
        <View style={styles.ContainerStyle}>
            <Pressable style={styles.iconContainerStyle}>
                <MaterialCommunityIcons name="music" size={40} color="white" />
                <Text style={styles.textStyle}>Music</Text>
            </Pressable>
            <Pressable style={styles.iconContainerStyle}>
                <MaterialCommunityIcons name="youtube-gaming" size={40} color="white" />
                <Text style={styles.textStyle}>Gaming</Text>
            </Pressable>
            <Pressable style={styles.iconContainerStyle}>
                <Fontisto name="hacker-news" size={40} color="white" />         
                <Text style={styles.textStyle}>News</Text>
            </Pressable>
            <Pressable style={styles.iconContainerStyle}>
                <MaterialCommunityIcons name="movie" size={40} color="white" />    
                <Text style={styles.textStyle}>Movies</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerStyle: {
        flex:1,
        flexDirection: 'row',
  
    },
    textStyle:{
        color: 'white'
    },
    iconContainerStyle: {
        borderWidth: 1,
        width: 80,
        height: 80,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginRight: 10,
        backgroundColor: '#555',
    }

})

export default TrendingIcons;
