import React from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import HeaderComponent  from '../components/HeaderComponent'
import ProfileIcons from '../components/ProfileIconsComponent'

const SubscriptionScreen = () => {
    return (
        <ScrollView style={styles.Container}>
            <HeaderComponent />
            <ScrollView horizontal>
                <ProfileIcons />
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
    }
})

export default SubscriptionScreen;
