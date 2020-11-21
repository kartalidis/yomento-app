import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SmallImageItem from './SmallImageItem'

//horizontal scroll for small items
const SmallHorizontalScroll=() =>{
  return (
    <View>
      <Text style={{fontSize:24, fontWeight:'400', paddingHorizontal:20,paddingTop:20, color:'white', opacity:0.8}}>
        Small horizontal scroll
      </Text>
      <View style={{height:146, marginTop:20}}>
        <ScrollView horizontal={true}>
          <SmallImageItem imageUri={require('../../../assets/small-actions1.png')}/>
          <SmallImageItem imageUri={require('../../../assets/small-actions2.png')}/>
          <SmallImageItem imageUri={require('../../../assets/small-actions1.png')}/>
          <SmallImageItem imageUri={require('../../../assets/small-actions2.png')}/>
        </ScrollView>
      </View>
    </View>
  );
}

export default SmallHorizontalScroll;