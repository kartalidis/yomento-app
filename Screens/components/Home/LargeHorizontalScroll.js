import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LargeImageItem from './LargeImageItem'

//horizontal scroll for large items
const LargeHorizontalScroll=() =>{
  return (
    <View>
          <Text style={{fontSize:24, fontWeight:'400', paddingHorizontal:20, paddingTop:20,  color:'white', opacity:0.8}}>
            Large horizontal scroll
          </Text>
          <View style={{height:200, marginTop:20}}>
            <ScrollView horizontal={true}>
              <LargeImageItem imageUri={require('../../../assets/large-actions1.png')}/>
              <LargeImageItem imageUri={require('../../../assets/large-actions2.png')}/>
              <LargeImageItem imageUri={require('../../../assets/large-actions1.png')}/>
              <LargeImageItem imageUri={require('../../../assets/large-actions2.png')}/>
            </ScrollView>
          </View>
        </View>
  );
}

export default LargeHorizontalScroll;