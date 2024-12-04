import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from '../../../styles/globalStyles';

const CreditsScreen = () => {
  const [volume, setVolume] = useState(0.5);
  const handleVolumeChange = (value) => {
    setVolume(value);
    console.log('Volumen ajustado a:', value);
  };

  return (
    <View style={styles.containerSettings}>
      <Text style={styles.titleSettings}>Configuración de Volumen</Text>
      <Text style={styles.labelSettings}>Volumen: {Math.round(volume * 100)}%</Text>
      <Slider
        style={styles.sliderSettings}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={handleVolumeChange}
        minimumTrackTintColor="#4caf50"
        maximumTrackTintColor="#ddd"
        thumbTintColor="#4caf50"
      />
    </View>
  );
};

export default CreditsScreen;
