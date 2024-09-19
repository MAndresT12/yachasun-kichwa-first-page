import React, { useEffect, useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/globalStyles';
import { ButtonDefault } from '../ui/buttons/ButtonDefault';

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
          const timer = setTimeout(() => {
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
      navigation.replace('Login');
    }
  }, [videoFinished, loadingProgress]);

  const handleSkip = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.containerLoading}>
      <Video
        ref={video}
        style={styles.video}
        source={require('../../../assets/videos/test-video.mp4')}
        resizeMode="contain"
        shouldPlay
        onPlaybackStatusUpdate={(status) => {
          if (status.didJustFinish) {
            setVideoFinished(true);
          }
        }}
      />

      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${loadingProgress}%` }]} />
      </View>
      <Text style={styles.loadingText}>Cargando... {loadingProgress}%</Text>

      {skipEnabled && (
        <ButtonDefault label="Saltar" onPress={handleSkip} />
      )}
    </View>
  );
};

export default LoadingScreen;
