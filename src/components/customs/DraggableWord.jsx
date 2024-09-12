// src/components/DraggableWord.jsx
import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';

const DraggableWord = ({ word, onDrop }) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value
            });
            pan.setValue({ x: 0, y: 0 });
        },
        onPanResponderMove: Animated.event(
            [null, { dx: pan.x, dy: pan.y }],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: (evt, gestureState) => {
            onDrop({ x: gestureState.moveX, y: gestureState.moveY, word });
            pan.flattenOffset();
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false
            }).start();
        }
    });

    return (
        <Animated.View {...panResponder.panHandlers} style={[styles.draggable, pan.getLayout()]}>
            <Text style={styles.text}>{word}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    draggable: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    },
});

export default DraggableWord;
