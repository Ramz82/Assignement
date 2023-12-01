import React, { useState } from 'react';
import {TouchableOpacity, View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const FormScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [schoolPassingYear, setSchoolPassingYear] = useState('');
  const [schoolMarks, setSchoolMarks] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [collegePassingYear, setCollegePassingYear] = useState('');
  const [collegeMarks, setCollegeMarks] = useState('');
  const [universityName, setUniversityName] = useState('');
  const [universityPassingYear, setUniversityPassingYear] = useState('');
  const [universityMarks, setUniversityMarks] = useState('');
  const [unistatus, setunistatus] = useState('');
  const [Degreetitle, setDegreetitle] = useState('');

  const saveDetails = async () => {
    try {
      // Save form details to AsyncStorage
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('phoneNumber', phoneNumber);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('address', address);
      await AsyncStorage.setItem('schoolName', schoolName);
      await AsyncStorage.setItem('schoolPassingYear', schoolPassingYear);
      await AsyncStorage.setItem('schoolMarks', schoolMarks);
      await AsyncStorage.setItem('collegeName', collegeName);
      await AsyncStorage.setItem('collegePassingYear', collegePassingYear);
      await AsyncStorage.setItem('collegeMarks', collegeMarks);
      await AsyncStorage.setItem('universityName', universityName);
      await AsyncStorage.setItem('universityPassingYear', universityPassingYear);
      await AsyncStorage.setItem('universityMarks', universityMarks);
      await AsyncStorage.setItem('unistatus', unistatus);
      await AsyncStorage.setItem('Degreetitle', Degreetitle);

      // Navigate to CV screen
      navigation.navigate('CV', {
        name,
        phoneNumber,
        email,
        address,
        schoolName,
        schoolPassingYear,
        schoolMarks,
        collegeName,
        collegePassingYear,
        collegeMarks,
        universityName,
        universityPassingYear,
        universityMarks,
        unistatus,
        Degreetitle,
      });
    } catch (error) {
      console.error('Error saving details:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Personal Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="white"
          value={name}
          onChangeText={text => setName(text)}

        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="white"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="white"
          value={address}
          onChangeText={text => setAddress(text)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Educational Details</Text>

        <Text style={styles.subHeading}>School</Text>
        <TextInput
          style={styles.input}
          placeholder="School Name"
          placeholderTextColor="white"
          value={schoolName}
          onChangeText={text => setSchoolName(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Passing Year"
          value={schoolPassingYear}
          onChangeText={text => setSchoolPassingYear(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Marks or Grade"
          placeholderTextColor="white"
          value={schoolMarks}
          onChangeText={text => setSchoolMarks(text)}
        />

        <Text style={styles.subHeading}>College</Text>
        <TextInput
          style={styles.input}
          placeholder="College Name"
          placeholderTextColor="white"
          value={collegeName}
          onChangeText={text => setCollegeName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Passing Year"
          placeholderTextColor="white"
          value={collegePassingYear}
          onChangeText={text => setCollegePassingYear(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Marks or Grade"
          placeholderTextColor="white"
          value={collegeMarks}
          onChangeText={text => setCollegeMarks(text)}
        />

        <Text style={styles.subHeading}>University</Text>
        <TextInput
          style={styles.input}
          placeholder="University Name"
          value={universityName}
          placeholderTextColor="white"
          onChangeText={text => setUniversityName(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Passing Year"
          value={universityPassingYear}
          onChangeText={text => setUniversityPassingYear(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Marks or Grade"
          placeholderTextColor="white"
          value={universityMarks}
          onChangeText={text => setUniversityMarks(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Degree Title"
          value={Degreetitle}
          onChangeText={text => setDegreetitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="for underGraduate 1, for graduate 2"
          placeholderTextColor="white"
          value={unistatus}
          onChangeText={text => setunistatus(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.customButton}
        onPress={saveDetails}
      >
        <Text style={styles.buttonText}>Save Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  section: {
    marginBottom: 20,
    backgroundColor:'rgba(8, 154, 120, 1)',
    padding: 20,
    borderRadius: 10,
    alignContent: 'center',
    width: '100%',
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color:'white',

  },
  customButton: {
    width: 300, // Set your desired width
    height: 50, // Set your desired height
    backgroundColor: 'rgba(248, 86, 9, 1)',
    padding: 15,
    borderColor:'rgba(248, 157, 113, 1)',
    alignItems:'center',
    borderWidth:2,
    borderRadius: 50,
  },
  input: {
    height: 40,
    borderColor: 'rgba(248, 86, 9, 1)',
    borderWidth: 1,
    marginBottom: 10,
    color:'white',
    
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight:'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default FormScreen;
