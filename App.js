import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

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
import EvaluationScreen3 from './src/components/EvaluationScreen3.jsx';
import CaminoLevelsScreen from './src/components/CaminoLevelsScreen.jsx';
import VocabularioLaCocinaScreen from './src/components/VocabularioLaCocinaScreen.jsx';
import LosAdjetivosScreen2 from './src/components/LosAdjetivosScreen2.jsx';
import VocabularioElDormitorioScreen from './src/components/VocabularioElDormitorioScreen.jsx';
import VocabularioLaUbicacionScreen from './src/components/VocabularioLaUbicacionScreen.jsx';
import GameScreen4 from './src/components/GameScreen4.jsx';
import EvaluationScreen4 from './src/components/EvaluationScreen4.jsx';
import VocabularioElTiempoScreen from './src/components/VocabularioElTiempoScreen.jsx';
import ElPasadoSimpleScreen from './src/components/ElPasadoSimpleScreen.jsx';
import ElParticipioPasadoScreen from './src/components/ElParticipioPasadoScreen.jsx';
import ElPasadoProgresivoScreen from './src/components/ElPasadoProgresivoScreen.jsx';
import LosVerbosScreen2 from './src/components/LosVerbosScreen2.jsx';
import GameScreen5 from './src/components/GameScreen5.jsx';
import EvaluationScreen5 from './src/components/EvaluationScreen5.jsx';
import ConjugacionTiempoPresenteProgresivoScreen from './src/components/ConjugacionTiempoPresenteProgresivoScreen.jsx';
import ElFuturoProximoScreen from './src/components/ElFuturoProximoScreen.jsx';
import ElFuturoSimpleScreen from './src/components/ElFuturoSimpleScreen.jsx';
import GameScreen6 from './src/components/GameScreen6.jsx';
import EvaluationScreen6 from './src/components/EvaluationScreen6.jsx';
import { View, Text } from 'react-native';
import { styles } from './styles/globalStyles';
import ProgresoScreen from './src/components/ProgresoScreen.jsx';
import CarouselExampleScreen from './src/components/CarouselExampleScreen.jsx';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#003366' }, //5B4D28
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
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Yachasun Kichwa - Los Numeros' }}
      />
      <Stack.Screen
        name="Food"
        component={CarouselExampleScreen}
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
        options={{ title: 'Los Adjetivos - Parte 1' }}
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
      <Stack.Screen
        name="LaCocina"
        component={VocabularioLaCocinaScreen}
        options={{ title: 'Vocabulario - La Cocina' }}
      />
      <Stack.Screen
        name="LosVerbos2"
        component={LosVerbosScreen2}
        options={{ title: 'Los Verbos - Parte 2' }}
      />
      <Stack.Screen
        name="LosAdjetivos2"
        component={LosAdjetivosScreen2}
        options={{ title: 'Los Adjetivos - Parte 2' }}
      />
      <Stack.Screen
        name="ElDormitorio"
        component={VocabularioElDormitorioScreen}
        options={{ title: 'Vocabulario - El Dormitorio' }}
      />
      <Stack.Screen
        name="Game4"
        component={GameScreen4}
        options={{ title: 'Juego de Repaso - Parte 4' }}
      />
      <Stack.Screen
        name="Evaluation4"
        component={EvaluationScreen4}
        options={{ title: 'Evaluación - Parte 4' }}
      />
      <Stack.Screen
        name="LaUbicacion"
        component={VocabularioLaUbicacionScreen}
        options={{ title: 'Vocabulario - La Ubicación' }}
      />
      <Stack.Screen
        name="ElTiempo"
        component={VocabularioElTiempoScreen}
        options={{ title: 'Vocabulario - El Tiempo' }}
      />
      <Stack.Screen
        name="ElPasadoSimple"
        component={ElPasadoSimpleScreen}
        options={{ title: 'El Pasado Simple' }}
      />
      <Stack.Screen
        name="ElParticipioPasado"
        component={ElParticipioPasadoScreen}
        options={{ title: 'El Participio Pasado' }}
      />
      <Stack.Screen
        name="Game5"
        component={GameScreen5}
        options={{ title: 'Juego de Repaso - Parte 5' }}
      />
      <Stack.Screen
        name="Evaluation5"
        component={EvaluationScreen5}
        options={{ title: 'Evaluación - Parte 5' }}
      />
      <Stack.Screen
        name="ElPasadoProgresivo"
        component={ElPasadoProgresivoScreen}
        options={{ title: 'El Pasado Progresivo' }}
      />
      <Stack.Screen
        name="ConjugacionPresenteProgresivo"
        component={ConjugacionTiempoPresenteProgresivoScreen}
        options={{ title: 'Conjugación Presente Progresivo' }}
      />
      <Stack.Screen
        name="FuturoProximo"
        component={ElFuturoProximoScreen}
        options={{ title: 'Futuro Próximo' }}
      />
      <Stack.Screen
        name="FuturoSimple"
        component={ElFuturoSimpleScreen}
        options={{ title: 'Futuro Simple' }}
      />
      <Stack.Screen
        name="Game6"
        component={GameScreen6}
        options={{ title: 'Juego de Repaso - Parte 6' }}
      />
      <Stack.Screen
        name="Evaluation6"
        component={EvaluationScreen6}
        options={{ title: 'Evaluación - Parte 6' }}
      />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = 'home-outline';
          } else if (route.name === 'Progreso') {
            iconName = 'star-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeStack}
        options={{ headerShown: false }} // Ocultar encabezado solo en esta pestaña
      />
      <Tab.Screen
        name="Progreso"
        component={ProgresoScreen}
        options={{
          headerStyle: { backgroundColor: '#003366' }, //5B4D28
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          cardStyle: { backgroundColor: '#9FC516' },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          headerStyle: { backgroundColor: '#003366' }, //5B4D28
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          cardStyle: { backgroundColor: '#9FC516' },
        }}
      />
    </Tab.Navigator>
  );
};

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Perfil</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <TabNavigator />
    </NavigationContainer>
  );
}
