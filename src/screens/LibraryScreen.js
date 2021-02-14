import React from 'react'
import { ScrollView, FlatList, View, Text, StyleSheet, Pressable } from 'react-native'
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import useResults from '../hooks/useResults'
import HeaderComponent from '../components/HeaderComponent'
import RecentVideoComponent from '../components/RecentVideoComponent'

const LibraryScreen = () => {
    return (
        <ScrollView style={styles.Container}>
            <HeaderComponent />
            <RecentVideoComponent />
            <View>
                <Pressable style={styles.listStyle} >
                    <MaterialIcons name="history" size={24} color="black" />
                    <Text>History</Text>
                </Pressable>
                <Pressable style={styles.listStyle}>
                    <MaterialCommunityIcons name="download" size={24} color="black" />
                    <Text>Downloads</Text>
                </Pressable>
                <Pressable style={styles.listStyle}>
                    <MaterialIcons name="video-collection" size={24} color="black" />  
                    <Text>Your videos</Text>
                </Pressable>
                <Pressable style={styles.listStyle}>
                    <MaterialIcons name="local-movies" size={24} color="black" />   
                    <Text>Your movies</Text>
                </Pressable>
                <Pressable style={styles.listStyle}>
                    <MaterialIcons name="watch-later" size={24} color="black" />
                    <Text>Watch later</Text>
                </Pressable>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor: '#fff',
        marginTop: 25
    },
    listStyle: {
        flexDirection: 'row',
        padding: 15,
    }
})

export default LibraryScreen;
