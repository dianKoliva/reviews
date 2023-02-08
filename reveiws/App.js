import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import HomeStack from './routes/HomeStack';


const getFonts=()=>{
  return Font.loadAsync({
    'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
  })
}


export default function App() {

  const[fontsloaded,setfontsLoaded]=useState(false);
  if(fontsloaded){
    return(
   <HomeStack></HomeStack>
    );
  }
  else {
    return(
      <AppLoading startAsync={getFonts} 
      onFinish={()=>setfontsLoaded(true)}
      onError={console.warn}
      />
    )
   
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
