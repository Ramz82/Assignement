import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home.js'
import cv from './cv_page.js'
import FontLoader from './FontLoader.js';
import FormScreen from './FornScreen.js';
import Signup from './signup.js';
const Stack = createNativeStackNavigator();

function App(  ){
  return (
    <FontLoader><NavigationContainer>
    <Stack.Navigator screenOptions ={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="CV" component={cv}/>
      <Stack.Screen name="FormScreen" component={FormScreen}/>
      <Stack.Screen name="Signup" component={Signup}/>

    </Stack.Navigator>
    
  </NavigationContainer></FontLoader>
    
    
  );
}
export default App;