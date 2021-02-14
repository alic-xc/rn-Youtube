import React from 'react'
import {ScrollView, View, Text, StyleSheet, Picker} from 'react-native'
import HeaderComponent  from '../components/HeaderComponent'
import ProfileIcons from '../components/ProfileIconsComponent'
import VideoListComponent from '../components/VideoListComponent'

const SubscriptionScreen = () => {
    return (
        <ScrollView style={styles.Container}>
            <HeaderComponent />
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <ProfileIcons />
            </ScrollView>
            <VideoListComponent gridDisplay={false} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor: '#fff',
        marginTop: 25


    }
})

export default SubscriptionScreen;
