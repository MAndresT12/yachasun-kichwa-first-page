import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import Main from './src/components/Main';
//Ojo cualquier cosa que sea tocable (onClick por ejm) en react native, usar ejm Touchable usar import TouchableWithoutFeedback

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Main />
    </>
  );
}

