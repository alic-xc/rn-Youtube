import React from 'react'
import {ScrollView, View, Text, StyleSheet, SafeAreaView} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import VideoListComponent from '../components/VideoListComponent'
import TrendingIcons from '../components/TrendingIconComponent'


const TrendsScreen = () => {
    return (
        <ScrollView style={styles.Container}>
            <HeaderComponent />
            <ScrollView horizontal>
                <TrendingIcons />
            </ScrollView>
            <VideoListComponent gridDisplay={false} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        marginTop: 25
    }
})

export default TrendsScreen;
