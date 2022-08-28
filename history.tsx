import { StyleSheet, View, Text, Image, Button, AsyncStorage, AccessibilityInfo } from 'react-native';
import NavOptions from './components/NavOptions';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store';
import { Card } from 'react-native-elements/dist/card/Card';
const History = () => {
    const route = useRoute<RouteProps>();
    const navigation = useNavigation();
    const[history,setHis]=useState<hist[]>([]);
    const { term } = route.params;
    const getHistory = async () => {
        try{
            const his=await SecureStore.getItemAsync(0);
            setHis(his);
            console.log(history);
        }catch(error){

        }
}
return(
<View> 
    <Text style={{justifyContent:"center"}}>
      Hello
      {term &&
            history?.map((info, index: number) => (
          <Card
          key={index}>
          <Card.Title>
          {info.address}
          {info.payment}
          </Card.Title>
          <Card.Divider />
          </Card>
        ))}
    </Text>

</View>
)}
type RouteParams = {
    term: string;
  };
  
  type RouteProps = {
    params: RouteParams
    name: string;
    key: string;
  };
  type NavProps = {
    term: string;
  };
  type hist ={
    address:string[];
    payment:string[];
  }
export default History;