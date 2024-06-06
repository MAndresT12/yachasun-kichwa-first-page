// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Login from './src/components/Login';
import Main from './src/components/Main';
import FoodScreen from './src/components/FoodScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#5B4D28' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          cardStyle: { backgroundColor: '#9FC516' },
        }}
      >
        {/*Aca Main debe ir otra pag pero por el momento dejarle la pag de los numeros */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Aprender con amigos' }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Yachasun Kichwa' }}
        />
        <Stack.Screen
          name="Food"
          component={FoodScreen}
          options={{ title: 'Los Alimentos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
