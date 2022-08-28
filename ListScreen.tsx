import React, { useState } from "react";
import { useEffect } from "react";
import * as axios from 'axios';
import { Button, Dimensions, View, FlatList, Image, SafeAreaView, StyleSheet, Text ,ScrollView} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import CarouselClass from "../components/CarouselClass";
import NavOptions from '../components/NavOptions';


// const item= ({name,price, image }) => (
//     <View>
//         <Card containerStyle={{ justifyContent: "center" }}>
       
//             <Carousel
//               data={image}
//               sliderWidth={327}
//               itemWidth={300}
//             />
//             <Card.Divider />
//             <Card.Title>{name}</Card.Title>
//             <Card.Divider />
//         </Card>
//     </View>
// );

// const slideshow = ({item, index}) => {
    
//     return (
//      <View>
//       style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
//       <Carousel
//         layout="default"
//         sliderWidth={350}
//         itemWidth={350}
//         data={item.image}
//         renderItem={({ item, index }) => (
//           <Image
//             key={index}
//             style={{ width: "100%", height: 200 , borderRadius:5}}
//             resizeMode="contain"
//             source={{
//               uri:
//                 item
//                   ? item
//                   : "https://static.thenounproject.com/png/944120-200.png",}}
//           />)}
//           /></View>
// );}
export default function ListScreen(props: NavProps){
    const route = useRoute<RouteProps>();
    const { term } = route.params;
    const[icecream, SetCream]=useState<icecream>();
    const navigation = useNavigation();
    

    useEffect(() => {
        Promise.all([
          axios.default.get(`http://192.168.1.15:3000/icecream/${term}`),
        ])
          .then(([{ data:searchresult }]) => {
            if (searchresult) SetCream(searchresult);
          });
      }, []);


    //   const renderItem = ({ item }) => (
    //     <Item name={item.name} price={item.price}  image={item.image} />
    // );



    return (
        <View >
           {/* Icecream.name=="vanilla"{
                   
                  Icecream.name=="chocolate"{
                   <Image style={{marginTop:50}} source={require("../assets/low-carb-chocolate-ice-cream1.jpg")}></Image>}
                  Icecream.name=="strawberry"{
                   <Image style={{marginTop:50}} source={require("../assets/strawR.jpg")}></Image>}
                  Icecream.name=="mango"{
                   <Image style={{marginTop:50}} source={require("../assets/DSC_0209.webp")}></Image>} */}
          {
            icecream?.map((Icecream, index: number) => (
              <Card
                key={index}
              >
                   <Card.Title style={{ fontWeight: "bold", fontSize: 17 }}>
                    {Icecream.name}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {Icecream.price}
                    {"\n"}
                     

                  </Card.Title>
                  <Card.Image style={{width: 350, height: 480}} source={{uri:Icecream.image?Icecream.image: "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg"}}  resizeMode="cover"></Card.Image> 
                  <Card.Divider />
                  {/* <Image style={styles.image} source={require("../assets/low-carb-chocolate-ice-cream1.jpg")}></Image> */}
                  
                  <Button
        title='Add to cart'
        onPress={()=>alert("added")}></Button>
                  </Card>))}
                  
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
      width: 350,
      height: 480,
      alignItems:'center',
      justifyContent:"center"
        
    },
});

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

  type icecream = {
    name: string;
    price: number;
    image:Array<string>;
  };
