import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const NotificationScreen = () => {
    return (
        <View style={styles.Container}>
            <Text>Notification Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
    }
})

export default NotificationScreen;
