import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
import TrendsScreen from './src/screens/TrendsScreen'
import SubscriptionScreen from './src/screens/SubscriptionScreen'
import LibraryScreen from './src/screens/LibraryScreen'
import PlayVideoScreen from './src/screens/PlayVideoScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import  NotificationScreen from './src/screens/NotificationScreen'
import { Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { MenuProvider } from 'react-native-popup-menu'

const HomeStack = createStackNavigator()
const TrendStack = createStackNavigator()
const SubscriptionStack = createStackNavigator()
const Stack = createStackNavigator()
const YoutubeTabs  = createBottomTabNavigator()


function TabsScreen(){
  return (
      <YoutubeTabs.Navigator 
            tabBarOptions={
                {
                  activeTintColor: 'red', 
                  inactiveTintColor: 'black',
                  labelStyle: {
                    fontWeight: '100',
                    paddingBottom: 5,
                  },
                  }}>
            <YoutubeTabs.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Fontisto name="home" size={20} color={color}  />}} />
            <YoutubeTabs.Screen name="Trending" component={TrendsScreen} options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="fire" size={20} color={color} /> }} />
            <YoutubeTabs.Screen name="Subscriptions" component={SubscriptionScreen} options={{ tabBarIcon: ({ color }) =><MaterialIcons name="subscriptions" size={20} color={color} /> }} />
            <YoutubeTabs.Screen name="Notifications" component={NotificationScreen} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="notifications" size={20} color={color} /> }} />
            <YoutubeTabs.Screen name="Library" component={LibraryScreen} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="folder" size={20} color={color} /> }} />
      </YoutubeTabs.Navigator>
  )
}

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
          <Stack.Navigator headerMode={false}>
              <Stack.Screen name='Tabs' component={TabsScreen} />
              <Stack.Screen name='Details' component={PlayVideoScreen}P />
              <Stack.Screen name='Profile' component={ProfileScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
