// src/components/IntroduccionModulo1Intermedio.jsx

import React from 'react';
import ModuloIntroduccion from './ModuloIntroduccion';
const IntroduccionModulo1Intermedio = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../assets/images/humu/humu-talking.png')}
            introText={"¡Hola, pequeño aventurero! En este módulo 1, explorarás el fascinante mundo de los números, aprenderás a hablar de comidas y animales, ¡y hasta a hacer preguntas curiosas! También descubrirás palabras para describir cosas que te pertenecen. ¡Prepárate para aprender un montón mientras te diviertes!"}
            nextScreen="Main"
        />
    );
};

export default IntroduccionModulo1Intermedio;
