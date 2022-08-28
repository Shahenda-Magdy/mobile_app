import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TextInput,AsyncStorage } from 'react-native';
import * as SecureStore from 'expo-secure-store';

interface User{
    loginData:any
    payment:any
    Address:String
  }

interface card {
    number: string;
    cvv:string
    ExpireDate:Date
  }
  export default function address() {
    const[address, setaddress]=useState('')
    const[phone, setphone]=useState('')
const getMethod = async () => {
    if(address&&phone){
        try{
        await SecureStore.setItemAsync(address,phone);}
        catch(error){
        }
    }
}
return(
<View style={styles.container}>
    <TextInput 
    autoCapitalize='none'
          placeholder='Enter your address'
          onChangeText={(text: string) => setaddress(text)}
/>
<TextInput 
    autoCapitalize='none'
          placeholder='Enter your  phone number'
          onChangeText={(text: string) => setphone(text)}
         
/>
{/* <TextInput 
    autoCapitalize='none'
          placeholder='Enter your payment card cvv'
          onChangeText={(text: string) => setcvv(text)}
/>
<TextInput 
    autoCapitalize='none'
          placeholder='Enter your card expiry date'
          onChangeText={(text: string) => setMethod(Date)}
/> */}
<Button
title='Confirm'
onPress={()=>alert("Order placed sucessfully")}></Button>
</View>
);
}
const styles = StyleSheet.create({
    container: {
      padding: 35,
      alignItems: 'center'
  }  });