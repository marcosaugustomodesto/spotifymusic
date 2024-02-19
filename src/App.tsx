import React, {useState, useEffect, StrictMode} from 'react';
import type {PropsWithChildren} from 'react';
import { setupPlayer, addTrack } from '../musicPlayerService';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MusicPlayer from './screens/MusicPlayer';


function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  
  async function setup (){
    let isSetup = await setupPlayer()
    console.log("isSetup: " + isSetup)
    if(isSetup){
      await addTrack()
    } 
    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])
  
  if(!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
     <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
