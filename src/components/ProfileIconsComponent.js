import React from 'react'
import {Pressable, View, Text, StyleSheet, Image} from 'react-native'
import useResults  from '../hooks/useResults'

const Icons = (props) => {
    console.log(props.picture)
    return (
        <Pressable style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={{uri: props.picture.thumbnail  }} />
            <Text></Text>
        </Pressable>
    )
}

const ProfileIcons = () => {
    let counter = 0
    const [results, errorMessage  ] = useResults()
    return (
        <View style={styles.Container}>
            { results.map( result => {
                return <Icons key={result.cell} picture={result.picture} /> 
                }) }
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'red',
        padding: 10
    },
    imageContainer:{
        width:50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'red',        
        flexWrap: 'wrap',
        margin: 5,
        padding: 2
    }, 
    imageStyle:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 50,
    }
})

export default ProfileIcons;
