import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//item that shows the counters for goals and activities
const GoalsAndActivities=() =>{
  return (
    <View>
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1, width:72}}>
          <View style={{flex:1 }}>
            <Text style={styles.indicatorText}>3</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.indicatorFooterText}>Weekly Goal</Text>
          </View>
        </View>
        <View style={{flex:1}}>
          <View style={{flex:1}}>
            <Text style={styles.indicatorText}>1</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.indicatorFooterText}>Completed Activities</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.hint}>Complete 2 Sessions to reach your goal!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  indicatorText: {
    fontSize:54, 
    alignSelf:'center', 
    color:'white',
    textAlign:'center'
  },
  indicatorFooterText: {
    fontSize:14, 
    alignSelf:'center', 
    color:'white', 
    textAlign:'center'
  },
  stats: {
    flex:1, 
    alignSelf:'center', 
    width:72, 
    height:60
  },
  hint: {
    opacity: 0.8,
    width: 263,
    height: 19,
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    alignSelf: 'center',
    textAlign: 'center'
  }
});

export default GoalsAndActivities;