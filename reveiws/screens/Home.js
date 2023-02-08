import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { globalStyles } from '../styles/global'


const Home = ({navigation}) => {
  const press=()=>{
    navigation.navigate('ReviewDetails')
  }
  const [reviews,setReviews]=useState([
    {title:"Not so final",rating:40,body:"lorem ipsum",key:'1'},
    {title:"tala",rating:40,body:"lorem ipsum",key:'2'},
    {title:"hi dear",rating:40,body:"lorem ipsum",key:'3'},
    {title:"just so u know",rating:40,body:"lorem ipsum",key:'4'},
  ])
  return (
    <View style={globalStyles.container}>
  <FlatList data={reviews
  } renderItem={({item})=>(
  <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
    <Text style={globalStyles.titleText}>{item.title}</Text>
  </TouchableOpacity>
  )}></FlatList>
    </View>
  )
}

export default Home

