// src/components/IntroduccionModulo5Intermedio.jsx

import React from 'react';
import ModuloIntroduccion from './ModuloIntroduccion';

const IntroduccionModulo5Intermedio = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../assets/images/humu/humu-talking.png')}
            introText={
                "¡Hola, pequeño explorador del tiempo y el espacio! En este módulo, aprenderás a hablar sobre lugares y ubicaciones en Kichwa, como aquí, allí y más allá. También podrás hablar sobre el tiempo, con palabras como ayer, hoy, y hasta los días de la semana. ¡Pero eso no es todo! Podrás contar historias sobre cosas que pasaron en el pasado usando el pasado simple y el participio pasado. ¡Prepárate para descubrir cómo contar dónde, cuándo y qué pasó, en esta increíble aventura lingüística!"
            }
            nextScreen="LaUbicacion"
        />
    );
};

export default IntroduccionModulo5Intermedio;
