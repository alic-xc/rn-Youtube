import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const LibraryScreen = () => {
    return (
        <View style={styles.Container}>
            <Text>Library Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
    }
})

export default LibraryScreen;
