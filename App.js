import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { styles } from './styles/globalStyles';

import Login from './src/components/menus/Login';
import Main from './src/components/main/Main';
import FoodScreen from './src/components/screens/misc/FoodScreen.jsx';
import AnimalsScreen from './src/components/screens/misc/AnimalsScreen.jsx';
import ParticlesPart1Screen from './src/components/screens/particles/ParticlesPart1Screen.jsx';
import GameScreen1 from './src/components/screens/games/GameScreen1';
import EvaluationScreen1 from './src/components/screens/evaluations/EvaluationScreen1';
import ParticlesPart2Screen from './src/components/screens/particles/ParticlesPart2Screen';
import ParticlesPart3Screen from './src/components/screens/particles/ParticlesPart3Screen';
import Levels from './src/components/menus/Levels';
import InstructionsBasic from './src/components/main/InstructionsBasic.jsx';
import InstructionsMid from './src/components/main/InstructionsMid.jsx';
import ParticlesPart4Screen from './src/components/screens/particles/ParticlesPart4Screen';
import LaNegacionScreen from './src/components/screens/misc/LaNegacionScreen.jsx';
import GameScreen2 from './src/components/screens/games/GameScreen2';
import EvaluationScreen2 from './src/components/screens/evaluations/EvaluationScreen2';
import LosVerbosScreen1 from './src/components/screens/verbs/LosVerbosScreen1.jsx';
import LosVerbosConjugacionesScreen1 from './src/components/screens/verbs/LosVerbosConjugacionesScreen1.jsx';
import LosAdjetivosScreen1 from './src/components/screens/adjectives/LosAdjetivosScreen1.jsx';
import VocabularioLaCiudadScreen from './src/components/screens/vocabulary/VocabularioLaCiudadScreen.jsx';
import GameScreen3 from './src/components/screens/games/GameScreen3.jsx';
import EvaluationScreen3 from './src/components/screens/evaluations/EvaluationScreen3.jsx';
import CaminoLevelsScreen from './src/components/screens/scrollPaths/CaminoLevelsScreen.jsx';
import CaminoLevelsBasicScreen from './src/components/screens/scrollPaths/CaminoLevelsBasicScreen.jsx';
import VocabularioLaCocinaScreen from './src/components/screens/vocabulary/VocabularioLaCocinaScreen.jsx';
import LosAdjetivosScreen2 from './src/components/screens/adjectives/LosAdjetivosScreen2.jsx';
import VocabularioElDormitorioScreen from './src/components/screens/vocabulary/VocabularioElDormitorioScreen.jsx';
import VocabularioLaUbicacionScreen from './src/components/screens/vocabulary/VocabularioLaUbicacionScreen.jsx';
import GameScreen4 from './src/components/screens/games/GameScreen4.jsx';
import EvaluationScreen4 from './src/components/screens/evaluations/EvaluationScreen4.jsx';
import VocabularioElTiempoScreen from './src/components/screens/vocabulary/VocabularioElTiempoScreen.jsx';
import ElPasadoSimpleScreen from './src/components/screens/conjugations/past/ElPasadoSimpleScreen.jsx';
import ElParticipioPasadoScreen from './src/components/screens/conjugations/past/ElParticipioPasadoScreen.jsx';
import ElPasadoProgresivoScreen from './src/components/screens/conjugations/past/ElPasadoProgresivoScreen.jsx';
import LosVerbosScreen2 from './src/components/screens/verbs/LosVerbosScreen2.jsx';
import GameScreen5 from './src/components/screens/games/GameScreen5.jsx';
import EvaluationScreen5 from './src/components/screens/evaluations/EvaluationScreen5.jsx';
import ConjugacionTiempoPresenteProgresivoScreen from './src/components/screens/conjugations/present/ConjugacionTiempoPresenteProgresivoScreen.jsx';
import ElFuturoProximoScreen from './src/components/screens/conjugations/future/ElFuturoProximoScreen.jsx';
import ElFuturoSimpleScreen from './src/components/screens/conjugations/future/ElFuturoSimpleScreen.jsx';
import GameScreen6 from './src/components/screens/games/GameScreen6.jsx';
import EvaluationScreen6 from './src/components/screens/evaluations/EvaluationScreen6.jsx';

import HangmanGame from './src/components/ui/HangmanGame.jsx';
import MatchGame from './src/components/ui/MatchGame.jsx';
import Module1 from './src/components/modules/Module1.jsx';
import IntroduccionJuegoScreen from './src/components/screens/misc/IntroduccionJuegosScreen.jsx';
import ProgresoScreen from './src/components/menus/ProgresoScreen.jsx';
import CarouselExampleScreen from './src/components/ui/CarouselExampleScreen.jsx';

//Module 1 Basic
import Alphabet from './src/components/screens/basic/module1/Alphabet.jsx';
import FirstNumbers from './src/components/screens/basic/module1/FirstNumbers.jsx';
import Colors from './src/components/screens/basic/module1/Colors.jsx';
import ToCount from './src/components/screens/basic/module1/ToCount.jsx';
import GamesBasicModule1 from './src/components/screens/basic/module1/GamesBasicModule1.jsx';
import EvaluationBasicModule1 from './src/components/screens/basic/module1/EvaluationBasicModule1.jsx';
import EndModule1 from './src/components/screens/basic/module1/EndModule1.jsx';

//Module 2 Basic
import Greetings from './src/components/screens/basic/module2/Greetings.jsx';

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
        name="InstructionsBasic"
        component={InstructionsBasic}
        options={{ title: 'Instrucciones Básicas' }}
      />
      <Stack.Screen
        name="InstructionsMid"
        component={InstructionsMid}
        options={{ title: 'Instrucciones Básicas' }}
      />
      <Stack.Screen
        name="CaminoLevels"
        component={CaminoLevelsScreen}
        options={{ title: 'Niveles' }}
      />
      <Stack.Screen
        name="CaminoLevelsBasic"
        component={CaminoLevelsBasicScreen}
        options={{ title: 'Niveles' }}
      />
      <Stack.Screen
        name="Alphabet"
        component={Alphabet}
        options={{ title: 'Yachasun Kichwa - El Alfabeto' }}
      />
      <Stack.Screen
        name="FirstNumbers"
        component={FirstNumbers}
        options={{ title: 'Yachasun Kichwa - Los Números del 1 al 500' }}
      />
      <Stack.Screen
        name="Colors"
        component={Colors}
        options={{ title: 'Yachasun Kichwa - Los Colores' }}
      />
      <Stack.Screen
        name="ToCount"
        component={ToCount}
        options={{ title: 'Yachasun Kichwa - Los Números Ordinales' }}
      />
      <Stack.Screen
        name="GamesBasicModule1"
        component={GamesBasicModule1}
        options={{ title: 'Yachasun Kichwa - Básico Módulo 1: Juegos de Repaso' }}
      />
      <Stack.Screen
        name="EvaluationBasicModule1"
        component={EvaluationBasicModule1}
        options={{ title: 'Yachasun Kichwa - Básico Módulo 1: Evaluación' }}
      />
      <Stack.Screen
        name="EndModule1"
        component={EndModule1}
        options={{ title: 'Yachasun Kichwa - Básico Módulo 1: Puntuación Final' }}
      />
      <Stack.Screen
        name="Greetings"
        component={Greetings}
        options={{ title: 'Yachasun Kichwa - Los saludos' }}
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
      <Stack.Screen
        name="ParticlesPart1"
        component={ParticlesPart1Screen}
        options={{ title: 'Las Partículas en Kichwa Parte 1' }}
      />
      <Stack.Screen
        name="IntroduccionJuegosScreen1"
        component={IntroduccionJuegoScreen}
        options={{ title: 'Games' }}
      />
      <Stack.Screen
        name="Module1"
        component={Module1}
        options={{ title: 'Games - Parte 1' }}
      />
      <Stack.Screen
        name="HangmanGame"
        component={HangmanGame}
        options={{ title: 'Ahorcado - Parte 1' }}
      />
      <Stack.Screen
        name="MatchGame"
        component={MatchGame}
        options={{ title: 'Emparejar - Parte 1' }}
      />
      <Stack.Screen
        name="Game1"
        component={GameScreen1}
        options={{ title: 'Juego de Repaso Evaluación - Parte 1' }}
      />

      <Stack.Screen
        name="Evaluation1"
        component={EvaluationScreen1}
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
