import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen/index'; // Importe o componente da tela de login

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={LoginScreen}
          options={{
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { color: 'white', alignSelf: 'center' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
