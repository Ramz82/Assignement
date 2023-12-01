import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');

  const saveSignupDetails = async () => {
    try {
      // Save signup details to AsyncStorage
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      await AsyncStorage.setItem('name', name);

      // Navigate to FormScreen after saving details
      navigation.navigate('Home', {
        email,
       password,
      });
    } catch (error) {
      console.error('Error saving signup details:', error);
    }
  };

  return (
    <View style={styles.container}>
       <Image
        style={{width:350,height:400,justifyContent:'flex-start', 
        position:'absolute',top:25}}
        resizeMode='cover'
        source={require('./assets/bg.png')}
      />
      <View style={styles.circle}>
      <Image
        style={{width:50,height:50,flex: 1,
       }}
        resizeMode='center'
        
        source={require('./assets/icons8-user-100.png')}
      />
      </View>
      <TextInput
        style={styles.textInput3}
        placeholder="   Name"
        placeholderTextColor="rgba(8, 154, 120, 1)"
        value={name}
        onChangeText={(text) => setname(text)}
      />
      <TextInput
        style={styles.textInput1}
        placeholder="   Email"
        placeholderTextColor="rgba(8, 154, 120, 1)"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="   Password"
        placeholderTextColor="rgba(8, 154, 120, 1)"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      
      <TouchableOpacity style={styles.customButton} onPress={saveSignupDetails}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      {/* Your existing UI components */}
      <View style={styles.labelsContainer}>
        <TouchableOpacity onPress={() => {
            navigation.navigate("Home")
        }}>
        <Text style={styles.label}>
          <Icon name="user-plus" size={20} />   Already Have an account!!
        </Text>
        
        </TouchableOpacity>
      </View>
    </View>
  );
};

 // define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      width: 80,
      height: 80,
      borderRadius:100,
      backgroundColor: 'rgba(8, 154, 120, 1)',
      borderStyle: "solid",
      borderWidth: 2,
      position:'absolute',
      top:100,
      borderColor: 'rgba(236, 244, 239, 1)',
      justifyContent: 'center', alignItems: 'center'
    },
    textInput1: {
      width: 300, // Set your desired width
      height: 60, // Set your desired height
      borderColor: 'rgba(67, 176, 143, 1)',
      borderRadius:30,
      borderWidth: 3,
      top:260,
      position:'absolute',
      marginTop: 20, // Adjust the margin to your liking
      paddingLeft: 10,
      backgroundColor: 'rgba(236, 244, 239, 1)',
    },
    textInput: {
      width: 300, // Set your desired width
      height: 60, // Set your desired height
      borderColor: 'rgba(67, 176, 143, 1)',
      borderRadius:30,
      borderWidth: 3,
      
      position:'absolute',
      top:360, // Adjust the margin to your liking
      paddingLeft: 10,
      backgroundColor: 'rgba(236, 244, 239, 1)',
    },textInput3: {
        width: 300, // Set your desired width
        height: 60, // Set your desired height
        borderColor: 'rgba(67, 176, 143, 1)',
        borderRadius:30,
        borderWidth: 3,
        
        position:'absolute',
        top:200, // Adjust the margin to your liking
        paddingLeft: 10,
        backgroundColor: 'rgba(236, 244, 239, 1)',
      },
    customButton: {
      width: 300, // Set your desired width
      height: 60, // Set your desired height
      backgroundColor: 'rgba(248, 86, 9, 1)',
      padding: 15,
      position:'absolute',
      top: 470,
      borderColor:'rgba(248, 157, 113, 1)',
      borderWidth:2,
      borderRadius: 50,
    },
    buttonText: {
      color: 'white',
      fontWeight:'bold',
      fontSize: 20,
      textAlign: 'center',
    },
    labelsContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      position:'absolute',
      top: 550,
    },
    label: {
      flexDirection: 'row',
      marginTop:20,
      color:'rgba(8, 154, 120, 1)',
      fontSize:15,
      fontWeight:'bold',
      alignItems: 'center',
    },
  
});

export default Signup;
