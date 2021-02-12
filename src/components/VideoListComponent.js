import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import VideoComponent from './VideoComponent'

export const videoList = [
    {'name': 'Jide Jendo', 'views': '34.5k'},
    {'name': 'Kunle Poly', 'views': '12k'},
    {'name': 'Sammu Alajo', 'views': '23k'},
    {'name': 'Naruto vs Madara ', 'views': '23k'},
    {'name': 'How to repair Laptop', 'views': '73k'},
    {'name': 'Get rich while you die', 'views': '203k'},
    {'name': 'Sajo', 'views': '239k'},


]

const VideoListComponent = ({gridDisplay})=> {
    return (
        <FlatList scrollEnabled={false} keyExtractor={ (item) => item.name } data={videoList} renderItem={ result => <VideoComponent gridDisplay={gridDisplay} video={result.item} /> } />
    )
}

export default VideoListComponent;