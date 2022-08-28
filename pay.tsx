import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TextInput,AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';


interface User{
    loginData:any
    payment:any
    Address:String
  }

interface card {
    number: string;
    cvv:string;
    ExpireDate:string;
  }
  export default function pay() {
    const[method, setMethod]=useState('')
    const[cardno, setCard]=useState('')
    const[cvv, setcvv]=useState('')
    const navigation = useNavigation();
    const[cardexpire, setexDate]=useState('')
const getMethod = async () => {
    if(method=='isa'){
        try{
            await SecureStore.setItemAsync(cardno,cvv,cardexpire);
           }catch(error){
             
           }
    }
}
return(
<View style={styles.container}>
    <TextInput 
    autoCapitalize='none'
          placeholder='Enter your payment method'
          onChangeText={(text: string) => setMethod(text)}
/>
<TextInput 
    autoCapitalize='none'
          placeholder='Enter your payment card number'
          onChangeText={(text: string) => setCard(text)}
         
/>
<TextInput 
    autoCapitalize='none'
          placeholder='Enter your payment card cvv'
          onChangeText={(text: string) => setcvv(text)}
/>
<TextInput 
    autoCapitalize='none'
          placeholder='Enter your card expiry date'
          onChangeText={(text: string) => setexDate(text)}
/>
<Button
title='continue'
   onPress={() =>navigation.navigate("address" as never) }/>
</View>
);
}
const styles = StyleSheet.create({
    container: {
      padding: 35,
      alignItems: 'center'
  }  });