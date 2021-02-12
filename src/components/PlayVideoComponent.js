import React, { useState } from 'react'
import { ScrollView, Pressable, Image, View, Text, StyleSheet, Switch } from 'react-native'
import { Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import {videoList} from '../components/VideoListComponent'
import VideoComponent from './VideoComponent'

const INITIAL_COLOR = '#888'
const ACTIVE_COLOR = '#aaa'
const SELECTED_COLOR = '#4ec5ff'

const PlayVideoComponent = ({ videoName }) => {
    const [toggleInfoDisplay, setToggleInfoDisplay] = useState(false)
    const [subscribe, setSubscribe] = useState(false) 
    const [upNext, setUpNext] = useState(true)  
    const [like, setLike] = useState(false)

    return (        
            <View style={styles.containerStyle}>
                <Image style={styles.imageStyle} source={require('../../assets/loader.gif')} />
                <ScrollView style={styles.infoContainerStyle}>
                    <Pressable onPress={()=> setToggleInfoDisplay(!toggleInfoDisplay)}  style={styles.titleContainerStyle}>
                        <View>
                            <Text style={styles.titleStyle}> {videoName}  </Text> 
                            <Text style={styles.totalViewStyle} >100k views</Text>
                        </View>
                        {toggleInfoDisplay ? <Fontisto style={styles.iconStyle} name='caret-down'  />: <Fontisto name='caret-up' style={styles.iconStyle} /> } 
                    </Pressable>
                    
                    <View style={styles.iconSetStyle}>
                        <Pressable style={styles.alignStyle} android_ripple={{color: '#eee', borderless: true}} onPress={ () => setLike(!like)}>
                            <MaterialCommunityIcons name='thumb-up' color={ like ? SELECTED_COLOR: INITIAL_COLOR} styles={iconParentStyle} size={24} />
                            <Text style={styles.iconTitleStyle}>34k</Text>
                        </Pressable>
                        <Pressable style={styles.alignStyle} android_ripple={{color: '#eee', borderless: true}}>
                            <MaterialCommunityIcons name='thumb-down' color={INITIAL_COLOR} styles={iconParentStyle} size={24}/>
                            <Text style={styles.iconTitleStyle}>6k</Text>
                        </Pressable>
                        <Pressable style={styles.alignStyle} android_ripple={{color: '#eee', borderless: true}}>
                            <MaterialCommunityIcons name='share' color={INITIAL_COLOR} styles={iconParentStyle} size={24}/>
                            <Text style={styles.iconTitleStyle}>share</Text>
                        </Pressable>
                        <Pressable style={styles.alignStyle} android_ripple={{color: '#eee', borderless: true}}>
                            <MaterialCommunityIcons name='download' color={INITIAL_COLOR} style={iconParentStyle} size={24}/>
                            <Text style={styles.iconTitleStyle}>downloaded</Text>
                        </Pressable>
                        <Pressable style={styles.alignStyle} android_ripple={{color: '#eee', borderless: true}}>
                            <MaterialIcons name="playlist-add" color={INITIAL_COLOR} style={iconParentStyle} size={24} />
                            <Text style={styles.iconTitleStyle}>save</Text>
                        </Pressable>
                    </View>
                    
                    <View style={styles.profileContainerStyle}>
                        <Image source={require('../../assets/icon.jpeg')} style={styles.profileStyle} />
                        <View style={styles.alignStyle, {flex:3, marginLeft: 10,}}>
                            <Text style={styles.titleStyle}>Naruto Fan Club.</Text>
                            <Text style={{...styles.iconTitleStyle, marginTop: -5 }}>205k subscribers</Text>
                        </View>
                        <Pressable style={{...styles.subscribeStyle, flex: subscribe?3:2  }} android_ripple={{color: '#eee', borderless: true}} onPress={()=>setSubscribe(!subscribe)}>
                            <MaterialCommunityIcons name="youtube" size={20} color={ subscribe ? INITIAL_COLOR: 'red' } />
                            { subscribe ? <Text style={{textTransform: 'uppercase', color: INITIAL_COLOR }}>Subscribed</Text> : <Text style={{textTransform: 'uppercase', color: 'red'}}>Subscribe</Text>}
                            {subscribe? <MaterialIcons name="notifications-none" size={24} color={INITIAL_COLOR} />: null}
                        </Pressable>
                        
                    </View>
                    
                    <View style={styles.iconSetStyle}>
                        <Text style={{alignSelf: 'center'}}>Up Next</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>Autoplay</Text>
                            <Switch thumbColor={INITIAL_COLOR} value={upNext} onValueChange={()=> setUpNext(!upNext)} />
                        </View>
                    </View>
                    
                    { videoList.map( item => <VideoComponent key={item.name} video={item} gridDisplay={true} /> ) }
                </ScrollView>
            </View>
    )
}

const iconParentStyle = {
    alignSelf: 'center',
}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: '#fff',
        flexDirection: 'column',
        flex: 1,
    },
    iconTitleStyle:{
        fontSize: 12,
        color:  INITIAL_COLOR
    },
    iconStyle:{
        ...iconParentStyle,
        fontSize: 13
    },
    subscribeStyle:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    alignStyle:{
        justifyContent: 'center',
    },
    iconSetStyle:{
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
    },
    totalViewStyle: {
        color: '#555',
        fontSize: 12,
    },
    infoContainerStyle:{
        paddingHorizontal:10,
        borderTopWidth: 3,
        borderColor: '#eee',
    },
    imageStyle: {
      width: 'auto',
      height: 200,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    titleContainerStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    titleStyle:{
        fontSize: 16,
        textTransform: 'uppercase',
        marginBottom: 5
    },
    profileStyle:{
        height: 40,
        width: 40,
        borderRadius: 100,
    },
    profileContainerStyle: {
        marginTop: 30,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,

    },
})

export default PlayVideoComponent;