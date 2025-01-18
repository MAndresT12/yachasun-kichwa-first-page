import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { UserContext } from '../../context/UserContext';

import { FloatingHumu } from '../animations/FloatingHumu';

import { ImageContainer } from '../ui/imageContainers/ImageContainer';

const ProfileScreen = () => {
  const { username } = useContext(UserContext);

  return (
    <LinearGradient colors={['#e9cb60', '#F38181']} style={localStyles.container}>
      <FloatingHumu initialValue={10}>
        <ImageContainer path={require('../../../assets/images/humu/humu-talking.png')} />
      </FloatingHumu>
      <View style={localStyles.contentContainer}>
        <Text style={localStyles.welcomeText}>¡Bienvenido, {username}!</Text>
        <Text style={localStyles.subText}>Este es tu progreso.</Text>
      </View>
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
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#481a0c',
  },
  subText: {
    fontSize: 16,
    color: '#6b422a',
    marginTop: 10,
  },
});

export default ProfileScreen;
