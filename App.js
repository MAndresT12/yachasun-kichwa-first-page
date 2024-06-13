// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Login from './src/components/Login';
import Main from './src/components/Main';
import FoodScreen from './src/components/FoodScreen';
import AnimalsScreen from './src/components/AnimalsScreen';
import ParticlesScreen from './src/components/ParticlesScreen';
import GameScreen from './src/components/GameScreen';
import EvaluationScreen from './src/components/EvaluationScreen';
import ParticlesPart2Screen from './src/components/ParticlesPart2Screen';
import ParticlesPart3Screen from './src/components/ParticlesPart3Screen';
import Levels from './src/components/Levels';
import Instructions from './src/components/Instructions';
import ParticlesPart4Screen from './src/components/ParticlesPart4Screen';
import LaNegacionScreen from './src/components/LaNegacionScreen.jsx';
import GameScreen2 from './src/components/GameScreen2';
import EvaluationScreen2 from './src/components/EvaluationScreen2';
import LosVerbosScreen1 from './src/components/LosVerbosScreen1.jsx';
import LosVerbosConjugacionesScreen1 from './src/components/LosVerbosConjugacionesScreen1.jsx';
import LosAdjetivosScreen1 from './src/components/LosAdjetivosScreen1.jsx';
import VocabularioLaCiudadScreen from './src/components/VocabularioLaCiudadScreen.jsx';
import GameScreen3 from './src/components/GameScreen3.jsx';
import EvaluationScreen3 from './src/components/EvaluationScren3.jsx';
import CaminoLevelsScreen from './src/components/CaminoLevelsScreen.jsx';


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
          name="CaminoLevels"
          component={CaminoLevelsScreen}
          options={{ title: 'Niveles kichuanos' }}
        />
        {/*Modulo 1, en lugar de main deberia existir otra pantalla que tenga cada circulo para dirigirse a una Screen*/}
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
        <Stack.Screen
          name="Particles"
          component={ParticlesScreen}
          options={{ title: 'Las Partículas en Kichwa Parte 1' }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ title: 'Juego de Repaso - Parte 1' }}
        />
        <Stack.Screen
          name="Evaluation"
          component={EvaluationScreen}
          options={{ title: 'Evaluación - Parte 1' }}
        />
        {/*Modulo 2*/}
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
        <Stack.Screen
          name="ParticlesPart4"
          component={ParticlesPart4Screen}
          options={{ title: 'Las Partículas en Kichwa Parte 4' }}
        />
        <Stack.Screen
          name="LaNegacion"
          component={LaNegacionScreen}
          options={{ title: 'La Negación' }}
        />
        <Stack.Screen
          name="Game2"
          component={GameScreen2}
          options={{ title: 'Juego de Repaso - Parte 2' }}
        />
        <Stack.Screen
          name="Evaluation2"
          component={EvaluationScreen2}
          options={{ title: 'Evaluación - Parte 2' }}
        />
        {/*Modulo 3*/}
        <Stack.Screen
          name="LosVerbos1"
          component={LosVerbosScreen1}
          options={{ title: 'Los Verbos - Parte 1' }}
        />
        <Stack.Screen
          name="LosVerbosConjugaciones1"
          component={LosVerbosConjugacionesScreen1}
          options={{ title: 'Los Verbos 1 - Conjugaciones' }}
        />
        <Stack.Screen
          name="LosAdjetivos1"
          component={LosAdjetivosScreen1}
          options={{ title: 'Los Adjevitos - Parte 1' }}
        />
        <Stack.Screen
          name="LaCiudad"
          component={VocabularioLaCiudadScreen}
          options={{ title: 'Vocabulario - La Ciudad' }}
        />
        <Stack.Screen
          name="Game3"
          component={GameScreen3}
          options={{ title: 'Juego de Repaso - Parte 3' }}
        />
        <Stack.Screen
          name="Evaluation3"
          component={EvaluationScreen3}
          options={{ title: 'Evaluación - Parte 3' }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
