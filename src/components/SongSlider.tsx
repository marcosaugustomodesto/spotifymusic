import Slider from '@react-native-community/slider';
import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import {useProgress} from 'react-native-track-player'

const SongSlider = () =>  {
    const {position, duration} = useProgress()
    console.log('postion:' + position)
    console.log('duration:' + duration)
  return (
    <View>
        <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor='#4b5fc4'
        maximumTrackTintColor='#4b5fc4'
        style={styles.sliderContainer}
        />
        <View style={styles.timeContainer}>
            <Text style={styles.time}>
                {new Date(position*1000).toISOString().substring(15, 19)}
            </Text>
            <Text style={styles.time}>
                {new Date((duration-position)*1000).toISOString().substring(15, 19)}
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sliderContainer: {
      width: 350,
      height: 40,
      marginTop: 25,
  
      flexDirection: 'row',
    },
    timeContainer: {
      width: 340,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    time: {
      color: '#4b5fc4',
    },
  });

export default SongSlider