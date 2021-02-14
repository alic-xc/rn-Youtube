import React from 'react'
import {Pressable, View, Text, StyleSheet, Image} from 'react-native'
import useResults  from '../hooks/useResults'

const Icons = (props) => {

    const truncate = (arr) => {
        const str = arr.join(' ')
        return `${str.substring(0, 10)}...`
    }

    return (
        <Pressable>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={{uri: props.data.picture.thumbnail  }} />
            </View>
            <Text style={styles.textStyle}>{ truncate([props.data.name.first, props.data.name.last]) }</Text>
        </Pressable>

    )
}

const ProfileIcons = () => {

    let counter = 0
    const [results, errorMessage  ] = useResults()

    return (
        <View style={styles.Container}>
            { results.map( result => {
                return <Icons key={result.cell} data={result} /> 
                }) }
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        flexDirection: 'row',
        paddingVertical: 10,
    
    },
    imageContainer:{
        width:60,
        height: 60,
        borderRadius: 60,
        flexWrap: 'wrap',
        margin: 5,
        padding: 2
    }, 
    imageStyle:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 50,
    },
    textStyle: {
        fontSize: 10,
        fontWeight: '500' ,
        textAlign: 'center'
    }
})

export default ProfileIcons;
