import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';

const { width, height } = Dimensions.get('window');

const LoadingScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [videoFinished, setVideoFinished] = useState(false);
  const [skipEnabled, setSkipEnabled] = useState(false);
  const video = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(loadingInterval);
          // Trigger skip button visibility after a delay
          const skipTimer = setTimeout(() => {
            console.log('Skip button enabled'); // Debug log
            setSkipEnabled(true);
          }, 2000);
          return prev;
        }
      });
    }, 50);

    return () => clearInterval(loadingInterval);
  }, []);

  useEffect(() => {
    if (videoFinished && loadingProgress === 100) {
      console.log('Navigation triggered to Login'); // Debugging log
      navigation.replace('Login');
    }
  }, [videoFinished, loadingProgress, navigation]);

  const handleSkip = () => {
    console.log('Skipped to Login'); // Debugging log
    navigation.replace('Login');
  };

  return (
    <View style={styles.containerLoading}>
      <Video
        ref={video}
        style={styles.video}
        source={require('../../../assets/videos/Intro-01.mp4')}
        resizeMode="cover"
        shouldPlay
        onPlaybackStatusUpdate={(status) => {
          if (status.didJustFinish) {
            console.log('Video finished playing'); // Debugging log
            setVideoFinished(true);
          }
        }}
      />

      <View style={styles.overlayContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${loadingProgress}%` }]} />
        </View>
        <Text style={styles.loadingText}>Cargando... {loadingProgress}%</Text>

        {skipEnabled && (
          <ButtonDefault label="Saltar" onPress={handleSkip} />
        )}
      </View>
    </View>
  );
};

export default LoadingScreen;
