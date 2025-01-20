import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';

import { UserContext } from '../../context/UserContext';

import { FloatingHumu } from '../animations/FloatingHumu';

import { ImageContainer } from '../ui/imageContainers/ImageContainer';
import ProgressCircleWithTrophies from '../headers/ProgressCircleWithTophies';

import { styles } from '../../../styles/globalStyles';

const ProfileScreen = () => {
  const { username } = useContext(UserContext);
  const [progressBasic, setProgressBasic] = useState(0);
  const [progress, setProgress] = useState(0);

  const trofeoKeysBasic = [
    'trofeo_modulo1_basic',
    'trofeo_modulo2_basic',
    'trofeo_modulo3_basic',
    'trofeo_modulo4_basic',
    'trofeo_modulo5_basic',
    'trofeo_modulo6_basic',
  ];

  const trofeoKeys = [
    'trofeo_modulo1_intermedio',
    'trofeo_modulo2_intermedio',
    'trofeo_modulo3_intermedio',
    'trofeo_modulo4_intermedio',
    'trofeo_modulo5_intermedio',
    'trofeo_modulo6_intermedio',
];

  const loadTrophyProgressBasic = async () => {
    let obtainedCount = 0;

    for (const key of trofeoKeysBasic) {
      const obtained = await AsyncStorage.getItem(key);
      if (obtained === 'true') {
        obtainedCount++;
      }
    }
    setProgressBasic(obtainedCount / trofeoKeysBasic.length);
  };

  const loadTrophyProgress = async () => {
    let obtainedCount = 0;

    for (const key of trofeoKeys) {
      const obtained = await AsyncStorage.getItem(key);
      if (obtained === 'true') {
        obtainedCount++;
      }
    }
    setProgress(obtainedCount / trofeoKeys.length);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadTrophyProgressBasic();
      loadTrophyProgress();
    }, [])
  );

  return (
    <LinearGradient colors={['#e9cb60', '#F38181']} style={localStyles.container}>
      <ScrollView style={styles.scrollView}>
        <FloatingHumu initialValue={10}>
          <ImageContainer path={require('../../../assets/images/humu/humu-talking.png')} />
        </FloatingHumu>
        <View style={localStyles.contentContainer}>
          <Text style={localStyles.welcomeText}>¡Bienvenido, {username}!</Text>
          
          {/* Progreso básico */}
          <Text style={localStyles.subText}>Este es tu progreso básico.</Text>
          <View style={localStyles.progressBarContainer}>
            <View style={localStyles.progressBar}>
              <View style={[localStyles.progress, { width: `${progressBasic * 100}%` }]} />
            </View>
          </View>

          {/* Progreso intermedio */}
          <Text style={localStyles.subText}>Este es tu progreso intermedio.</Text>
          <View style={localStyles.progressBarContainer}>
            <View style={localStyles.progressBar}>
              <View style={[localStyles.progress, { width: `${progress * 100}%` }]} />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20, // Add padding to prevent overflow
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20, // Add spacing between text and previous elements
    textAlign: 'center',
  },
  progressBarContainer: {
    marginTop: 10, // Space above the progress bar
    alignItems: 'center', // Center the progress bar horizontally
    width: '100%', // Match the container width
  },
  progressBar: {
    height: 20,
    width: '80%', // Adjust width as needed
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 10,
  },
});

export default ProfileScreen;
