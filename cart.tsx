import { useEffect, useState } from 'react';
import { useLinkProps, useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View,AsyncStorage } from 'react-native'
import NavOptions from './components/NavOptions';
import { ViewPropTypes } from 'react-native';


const cart = () => {
const route = useRoute<RouteProps>();
const { term } = route.params;
const navigation = useNavigation();

// const tot={term}

// const flav=term;
//  setTot(+35)


return(




<View style={{justifyContent:"center",marginHorizontal:30, marginTop:50}}>
    <Text style={{justifyContent: "center",fontStyle:"bold, underlined", marginTop:60}}>
        Cart
    </Text>
    <Text style={{justifyContent: "center"}}>
        {term}
    </Text>
    <Text style={{justifyContent: "center"}}>
        price:35
    </Text>
    {/* <Text style={{justifyContent: "center"}}>
       Total: {tot}
    </Text> */}
    <Button
        title='checkout'
        onPress={() =>
        navigation.navigate("pay" as never )}/>
</View>
);
}
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
export default cart;