import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import VideoComponent from '../components/VideoComponent'

const VideoListScreen = () => {
    /*  */
    return (
        <View>
            <FlatList 
                keyExtractor={} 
                data={} 
                renderItem={ (item) => <VideoComponent video={item.video}/> }
                 />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default VideoListScreen;