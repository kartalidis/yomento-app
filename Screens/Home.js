import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SmallHorizontalScroll from './components/Home/SmallHorizontalScroll'
import LargeHorizontalScroll from './components/Home/LargeHorizontalScroll';
import GoalsAndActivities from './components/Home/GoalsAndActivities';
import Notifications from './components/Home/Notifications';

//home screen of the app, including examples of clickable notification bell, 
//progress inidicators and horizontal scroll menus with images
const Home=() =>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'transparent' }}>
      <LinearGradient colors={['#0F0F3D', '#1C1C7A']} style={{flex: 1}}>
        <ScrollView style={{ flex:1, backgroundColor:'transparent', paddingTop: 20}}>
          <Notifications />
          <GoalsAndActivities />
          <SmallHorizontalScroll />
          <LargeHorizontalScroll />
          <SmallHorizontalScroll />
          <LargeHorizontalScroll />
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

export default Home;