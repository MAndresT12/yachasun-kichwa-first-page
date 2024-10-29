// src/components/IntroduccionModulo6Intermedio.jsx

import React from 'react';
import ModuloIntroduccion from './ModuloIntroduccion';

const IntroduccionModulo6Intermedio = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../assets/images/humu/humu-talking.png')}
            introText={
                "¡Felicidades, pequeño aventurero! Has llegado al último módulo de esta increíble aventura en Kichwa. Aquí aprenderás a hablar de cosas que estaban ocurriendo en el pasado y a contar lo que estás haciendo en este mismo momento. ¡Pero aún hay más! También descubrirás cómo hablar sobre lo que harás pronto y en el futuro. Al finalizar, habrás completado todo este viaje, y tendrás un gran conocimiento para expresarte en Kichwa. ¡Vamos a disfrutar de esta última etapa juntos!"
            }
            nextScreen="ElPasadoProgresivo"
        />
    );
};

export default IntroduccionModulo6Intermedio;
