import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './Screens/Home'
import Insights from './Screens/Insights'
import Me from './Screens/Me'
import Explore from './Screens/Explore'

const BottomNavigator = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomNavigator.Navigator tabBarOptions={{
      activeTintColor: '#FFFFFF', 
      style: {backgroundColor: 'transparent',borderTopWidth: 0,
      elevation: 100}
    }}>
      <BottomNavigator.Screen name="Home" tabBarIcon component={Home} options={{tabBarLabel:'Home', tabBarIcon:({ tintColor }) => (
        <Image source={require('./assets/home.png')} />
      )}} />
      <BottomNavigator.Screen name="Explore" component={Explore} options={{tabBarLabel:'Explore',tabBarIcon:({ tintColor }) => (
        <Image source={require('./assets/explore.png')} />
      )}} />
      <BottomNavigator.Screen name="Insights" component={Insights} options={{tabBarLabel:'Insights',tabBarIcon:({ tintColor }) => (
        <Image source={require('./assets/insights.png')} />
      )}} />
      <BottomNavigator.Screen name="Me" component={Me} options={{tabBarLabel:'Me',tabBarIcon:({ tintColor }) => (
        <Image source={require('./assets/me.png')} />
      )}} />
    </BottomNavigator.Navigator>
  );
}

export default function App() {
  return (
    
    <LinearGradient colors={['#0F0F3D', '#1C1C7A']} style={{flex: 1}}>
      <StatusBar />
        <SafeAreaView style={{flex: 1}}>
          <View style={{ flex: 1 }}>
            <NavigationContainer>
              <Tabs/>
            </NavigationContainer>
          </View>
        </SafeAreaView>
    </LinearGradient>
  );
}
