import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import useResults from '../hooks/useResults'

const NotificationPanel = ({notification}) => {
    console.log(notification)
    return (
        <View style={styles.panelStyle}>
            <Text style={styles.notificationPointStyle}>.</Text>
            <Image style={styles.imageContainer} source={{uri: notification.picture.thumbnail}}  />
            <View style={styles.textContainerStyle}> 
                <Text>Welcome to the best i can ever create. This is my demo app</Text>
                <Text>12 hours ago</Text>
            </View>
            <Image style={styles.thumbnailStyle} source={require('../../assets/naruto.png')} />
        </View>
    )
}

const NotificationComponent = () => {

    const [results, errorMessage] = useResults()
    
    return (
        <FlatList 
            keyExtractor={ result => result.cell  }
            data={results}
            renderItem={ result =>  <NotificationPanel notification={result.item} />   } />
    )
}

const styles = StyleSheet.create({
    panelStyle: {
        borderWidth:3,
        borderRadius: 10,
        borderColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee'
    },
    imageContainer:{
        width:40,
        height: 40,
        borderRadius: 40,
        
    }, 
    imageStyle:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 50,
    },
    thumbnailStyle:{
        width: 80,
        height: 50
    },
    textContainerStyle:{
        flex: 2,
        paddingLeft: 10,
    },
    notificationPointStyle: {
        fontSize: 44,
        alignSelf: 'flex-start',
        padding: 0,
        margin: 0,
        display: 'flex',
        alignSelf: 'flex-start',
        alignContent: 'center',
        color: 'blue'


    }
})

export default NotificationComponent;
