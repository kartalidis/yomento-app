import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LargeImageItem = (props) => {
  return(
    <TouchableOpacity>
      <View style={{height:200, width:273, marginLeft:20}}>
        <Image source={props.imageUri} style={{flex:1, width: null, height: null, resizeMode:'cover', borderRadius:10}} />
      </View>
    </TouchableOpacity>
  )
}

export default LargeImageItem