import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // You can use the email and password state variables
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <TextInput
          style={styles.inputEmail}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.loginButton}>
          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#A9A9A9',
  },
  inputEmail: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    marginTop: 200,
    fontWeight: 'bold',
    alignSelf: 'center',
    borderBottomWidth: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 10,
  },
  inputPassword: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
    borderBottomWidth: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 10,
  },
  loginButton: {
    marginTop: -15,
    padding: 100,
    width: '100%',
  },
});

export default LoginScreen;
