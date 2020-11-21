import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

const Notifications = () => {
  return(
    <View style={{marginLeft:30}}>
      <TouchableOpacity>
        <Image source={require('../../../assets/bell.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Notifications