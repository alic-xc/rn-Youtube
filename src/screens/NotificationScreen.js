import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import NotificationComponent from '../components/NotificationComponent'

const NotificationScreen = () => {
    return (
        <View style={styles.Container}>
            <NotificationComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        marginTop: 25,
        backgroundColor: '#fff'
    }
})

export default NotificationScreen;
