// expo install expo-web-browser expo-auth-session expo-random
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, AsyncStorage } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import History from './history';
const Stack = createNativeStackNavigator();
import pay from './pay';
import login from './login';
import HomeScreen from './screens/home';
import ListScreen from './screens/ListScreen';
import address from './address';
import cart from './cart';

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="login" 
        component={login}
        options={{
          headerShown: false,  
        }} 
      />
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
       {/* <Stack.Screen 
        name="history" 
        component={History}
        options={{
          headerShown: false,
        }} 
      /> */}
       <Stack.Screen 
        name="ListScreen" 
        component={ListScreen}
        options={{
          headerShown: false,
        }} 
      />
       <Stack.Screen 
        name="cart" 
        component={cart}
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="pay" 
        component={pay}
        options={{
          headerShown: false,  
        }} 
      />
      <Stack.Screen 
        name="address" 
        component={address}
        options={{
          headerShown: false,  
        }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;