import React from 'react';
import ModuloIntroduccion from '../../ModuloIntroduccion';

const IntroduccionModulo1Basic = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../../../assets/images/humu/humu-talking.png')}
            introText={
                "¡Saludos! ¿Recuerdas mi nombre? Soy Humu y debo decir que soy muy bueno hablando el Kichwa. Esta será el primer paso de nuestro viaje a este mundo. Este es el módulo 1, donde aprenderás el alfabeto, los colores y los números en Kichwa. ¡Vamos a aprender juntos!"
            }
            nextScreen="Alphabet"
            navigationTarget="CaminoLevelsBasic"
        />
    );
};

export default IntroduccionModulo1Basic;