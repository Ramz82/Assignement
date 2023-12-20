import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import queryString from 'query-string';

const TranslationApp = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = async () => {
   

    const params = {
      source_language: 'en',
      target_language: 'ar',
      text: inputText,
    };

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'c4f9baab28msh9a77c9812a1736ep13096cjsn8ff86f42a3cc',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      data: queryString.stringify(params),
    };

    try {
      const response = await axios.request(options);
     // const responseString = '{"data": {"translatedText": "Siapa namamu"}, "status": "success"}';

     // const responseObject = JSON.parse(response);
      setTranslatedText(response.data.data.translatedText);
      console.log(response.data.data.translatedText);

    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while translating the text. Please try again.');
    }
  };

  return (
    <View style={{ padding: 20,marginTop:40 }}>
      <Text style={{fontSize:20,fontWeight:'bold',marginBottom:20,alignSelf:'center'}}>English to Arabic Translator</Text>
      <TextInput
        placeholder="Enter text to translate"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <Button title="Translate" onPress={translateText} />
      {translatedText !== '' && (
        <View style={{ marginTop: 20 }}>
          <Text>
            Translated Text:
            {' '}
            {translatedText}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TranslationApp;
