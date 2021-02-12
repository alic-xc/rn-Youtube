import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import VideoListComponent from '../components/VideoListComponent'

const HomeScreen = () => {
    return (
        <View style={styles.Container}>
            <HeaderComponent />
            <VideoListComponent gridDisplay={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        marginTop: 25
    }
})

export default HomeScreen;
