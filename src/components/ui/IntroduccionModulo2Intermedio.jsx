// src/components/IntroduccionModulo2Intermedio.jsx

import React from 'react';
import ModuloIntroduccion from './ModuloIntroduccion';

const IntroduccionModulo2Intermedio = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../assets/images/humu/humu-talking.png')}
            introText={
                "¡Bienvenido a la siguiente etapa, pequeño aventurero! En este módulo, descubrirás cómo hablar del origen de las cosas y expresar con quién estás. Aprenderás a dar énfasis en tus palabras y explorar lugares, direcciones, ¡e incluso límites! Y algo muy importante, conocerás cómo decir que no en Kichwa. ¡Prepárate para una emocionante aventura lingüística!"
            }
            nextScreen="ParticlesPart2"
        />
    );
};

export default IntroduccionModulo2Intermedio;
