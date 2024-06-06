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
          name="Levels"
          component={Levels}
          options={{ title: 'Niveles' }}
        />
        <Stack.Screen
          name="Instructions"
          component={Instructions}
          options={{ title: 'Instrucciones' }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Yachasun Kichwa - Los Numeros' }}
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
        <Stack.Screen
          name="ParticlesPart2"
          component={ParticlesPart2Screen}
          options={{ title: 'Las Partículas en Kichwa Parte 2' }}
        />
        <Stack.Screen
          name="ParticlesPart3"
          component={ParticlesPart3Screen}
          options={{ title: 'Las Partículas en Kichwa Parte 3' }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
