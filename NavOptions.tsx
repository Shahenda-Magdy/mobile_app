import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: 1,
    title: 'Enter',
    screen: 'HomeScreen',}
  // id: 2,
  // title: 'pay',
  // screen: 'pay',}
]

const NavOptions = (props: NavProps) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => props.term && navigation.navigate(item.screen as never, {
              term: props.term,
            } as never)}
            style={styles.button}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    backgroundColor: "#f8f9fa",
    padding: 10,
    marginTop: 100 
  },
  text: {
    color: "black",
    textAlign: "center",
  },
});

type NavProps = {
  term: string;
}

export default NavOptions