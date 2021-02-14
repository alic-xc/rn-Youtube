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
                    <MaterialIcons style={styles.iconStyle} name="history" size={24} color="black" />
                    <Text style={styles.textStyle}>History</Text>
                </Pressable>
                <Pressable style={styles.listStyle}>
                    <MaterialCommunityIcons style={styles.iconStyle} name="download" size={24} color="black" />
                    <Text style={styles.textStyle}>Downloads</Text>
                </Pressable>
                <Pressable style={styles.listStyle}>
                    <MaterialIcons style={styles.iconStyle} name="video-collection" size={24} color="black" />  
                    <Text style={styles.textStyle}>Your videos</Text>
                </Pressable>
                <Pressable style={styles.listStyle}>
                    <MaterialIcons style={styles.iconStyle} name="local-movies" size={24} color="black" />   
                    <Text style={styles.textStyle}>Your movies</Text>
                </Pressable>
                <Pressable style={styles.listStyle}>
                    <MaterialIcons style={styles.iconStyle} name="watch-later" size={24} color="black" />
                    <Text style={styles.textStyle}>Watch later</Text>
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
        alignItems: 'center',
        padding: 15,
    },
    iconStyle:{
        color: '#aaa'
    },
    textStyle: {
        paddingLeft: 20,
        fontSize: 17,
    }
})

export default LibraryScreen;
