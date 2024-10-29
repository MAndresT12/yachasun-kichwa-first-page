// src/components/IntroduccionModulo3Intermedio.jsx

import React from 'react';
import ModuloIntroduccion from './ModuloIntroduccion';

const IntroduccionModulo3Intermedio = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../assets/images/humu/humu-talking.png')}
            introText={
                "¡Hola de nuevo, explorador curioso! En este módulo, aprenderás algunos de los verbos más importantes en Kichwa, como leer, escribir y caminar. También descubrirás cómo conjugar estos verbos para hablar sobre lo que haces tú y lo que hacen los demás. ¡Y no se detiene ahí! Aprenderás a describir cosas con adjetivos como grande, pequeño o hermoso, y explorarás palabras sobre la ciudad y objetos como el carro y la bicicleta."
            }
            nextScreen="LosVerbos1"
        />
    );
};

export default IntroduccionModulo3Intermedio;
