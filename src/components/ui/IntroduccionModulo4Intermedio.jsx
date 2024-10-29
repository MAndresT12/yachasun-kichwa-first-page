// src/components/IntroduccionModulo4Intermedio.jsx

import React from 'react';
import ModuloIntroduccion from './ModuloIntroduccion';

const IntroduccionModulo4Intermedio = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../assets/images/humu/humu-talking.png')}
            introText={
                "¡Bienvenido, pequeño chef y explorador! En este módulo, descubrirás nombres de muchos objetos de la cocina en Kichwa, como la cuchara, la olla y el plato. También aprenderás cómo decir algunos verbos súper útiles, como cocinar, hervir y calentar. ¡Y aún hay más! Podrás describir cosas con adjetivos como suave, duro o sucio, y hasta explorar palabras sobre el dormitorio, la cama, las cobijas y los sueños. ¡Prepárate para aprender un montón mientras te diviertes en esta aventura lingüística!"
            }
            nextScreen="LaCocina"
        />
    );
};

export default IntroduccionModulo4Intermedio;
