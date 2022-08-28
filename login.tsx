// expo install expo-web-browser expo-auth-session expo-random
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, AccessibilityInfo } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';
import pay from './pay';
import NavOptions from './components/NavOptions';
import * as SecureStore from 'expo-secure-store';

// Allows authentication session to complete and return results back here
WebBrowser.maybeCompleteAuthSession();
interface User{
  loginData:any
  payment:any
  Address:String
}
export default function App() {
  // const db = SQLite.openDatabase('Users');
  const navigation = useNavigation();
  const [User ,setUsers]=useState<User[]>()
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [message, setMessage] = useState();
  const[happ,setHAPP]=useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "749664747195-mqq15mc5etudat2nv5fsnepffepgo05h.apps.googleusercontent.com",
    iosClientId: "749664747195-ovabj111a3cc2obecpgimtni8ao495lb.apps.googleusercontent.com",
    expoClientId: "749664747195-0a5pkuik05r3amfl95h758gcdn6qgtmf.apps.googleusercontent.com"
  });
// db.transaction(tx =>{
//   tx.executeSql(sqlStatement, arguments, (_,{rows})=>{
//     const result = rows._array;
//   }
//    , error)
// }, error, success)
  useEffect(() => {
    setMessage(JSON.stringify(response));
    console.log('response :>> ', response);
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    console.log('accessToken :>> ', accessToken);
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    userInfoResponse.json().then(data => {
      console.log('userInfoResponse :>> ', data);
      setUserInfo(data);
      
      try{
       SecureStore.setItemAsync(userInfo);
      }catch(error){
        
      }
    });
  }

  function showUserInfo() {
    return (
      <View style={styles.userInfo}>
        <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
        <Text>Welcome {userInfo.name}</Text>
        <Text>{userInfo.email}</Text>
      </View>
    );
  }
//   <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen 
//       name="pay" 
//       component={pay}
//       options={{
//         headerShown: false,  
//       }} 
//     />
//     </Stack.Navigator>
// </NavigationContainer>
  return (
    <View style={styles.container}>
    {userInfo && showUserInfo()}
    <Button
      title={"login"}
      onPress={accessToken ? getUserData : () => { promptAsync({ useProxy: true, showInRecents: true }) }}
    />
     <NavOptions term={userInfo} />
    <StatusBar />
   
    </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 320 
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 50,
    height: 50
  },
});
