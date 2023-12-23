import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonColor, setButtonColor] = useState('green');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigation = useNavigation();

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Please fill all empty fields');
      return;
    }

    setErrorMessage(null);

    setIsSubmitting(true);

    const url = 'https://agile-forest-15442-13dfc75c01e7.herokuapp.com/user/login';

    axios
      .post(url, { username, password })
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== 'SUCCESS') {
          setErrorMessage(message);
        } else {
          navigation.navigate('Welcome', { ...data[0] });
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('Error. Check your network and try again');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <Text style={[styles.title, styles.heading]}>LOGIN</Text>
        <Text style={styles.text}>Welcome to HydroApp</Text>
        <TextInput
          style={[styles.textInput]}
          placeholder="Username"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={[styles.textInput]}
          placeholder="Password"
          placeholderTextColor={'gray'}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        {isSubmitting ? (
          <ActivityIndicator size="large" color="#999999" />
        ) : (
          <TouchableOpacity onPress={handleLogin}>
            <View style={[styles.button, { backgroundColor: buttonColor }]}>
              <Text style={[styles.buttonText]}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.errorContainer}>
        {errorMessage && <Text style={[styles.errorText, { color: 'red' }]}>{errorMessage}</Text>}
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.smallText}>No account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.smallText, styles.linkGreen]}>Register Here</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[styles.smallText, styles.linkGreen]}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'green', 
    width: '80%',
    marginBottom: 10,
    padding: 8,
    color: 'white'
  },
  heading: {
    marginBottom: 8,
    fontSize: 25,
  },
  text: {
    marginBottom:30,
    color: 'lightgreen'
  },
  smallText: {
    fontSize: 12,
    color: 'white'
  },
  linkGreen: {
    color: 'green',
    textDecorationLine: 'underline',
  },
  image: {
    width: 80, 
    height: 80,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 25, 
    marginTop: 20,
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
