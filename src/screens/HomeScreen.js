import React from 'react'
import {SafeAreaView, View, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderComponent from '../components/HeaderComponent'
import VideoListComponent from '../components/VideoListComponent'

const HomeScreen = () => {
    return (
        <ScrollView style={styles.Container}>
            <View>
                <HeaderComponent />
                <VideoListComponent gridDisplay={false} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        marginTop: 25
    }
})

export default HomeScreen;
