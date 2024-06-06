// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import FoodScreen from './src/components/FoodScreen';
import AnimalsScreen from './src/components/AnimalsScreen';
import ParticlesScreen from './src/components/ParticlesScreen';
import GameScreen from './src/components/GameScreen';
import EvaluationScreen from './src/components/EvaluationScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: { backgroundColor: '#5B4D28' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          cardStyle: { backgroundColor: '#9FC516' },
        }}
      >
        {/*Aca Main debe ir otra pag pero por el momento dejarle la pag de los numeros */}
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
        <Stack.Screen
          name="Animals"
          component={AnimalsScreen}
          options={{ title: 'Los Animales' }}
        />
        {/*Combinacion de particulas pak, nkapak y tak, ta*/}
        <Stack.Screen
          name="Particles"
          component={ParticlesScreen}
          options={{ title: 'Las Partículas en Kichwa Parte 1' }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ title: 'Juego de Repaso' }}
        />
        <Stack.Screen
          name="Evaluation"
          component={EvaluationScreen}
          options={{ title: 'Evaluación' }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
