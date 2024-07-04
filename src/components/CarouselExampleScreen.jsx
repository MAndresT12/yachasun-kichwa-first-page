// src/components/CarouselExampleScreen.jsx

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const CarouselExampleScreen = () => {
    const data = [
        { title: 'Slide 1', text: 'This is the first slide' },
        { title: 'Slide 2', text: 'This is the second slide' },
        { title: 'Slide 3', text: 'This is the third slide' },
    ];

    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={screenWidth}
                height={250}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    slide: {
        width: screenWidth - 40,
        height: 200,
        borderRadius: 8,
        padding: 20,
        backgroundColor: '#5B4D28',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    text: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
    },
});

export default CarouselExampleScreen;
