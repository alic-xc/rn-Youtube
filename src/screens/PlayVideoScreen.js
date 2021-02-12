import React, { useState } from 'react'
import { ScrollView, Pressable, Image, Modal, View, Text, StyleSheet, Switch } from 'react-native'
import { Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import PlayVideoComponent from '../components/PlayVideoComponent'
import  { useNavigation } from '@react-navigation/native'

const INITIAL_COLOR = '#888'
const ACTIVE_COLOR = '#aaa'

const PlayVideoScreen = ({route, navigation}) => {
    console.log(route)
    return <PlayVideoComponent videoName = {route.params.name}  />
}

export default PlayVideoScreen