import React from 'react';
import ModuloIntroduccion from '../../ModuloIntroduccion';

const IntroduccionModulo6Basic = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../../../assets/images/humu/humu-talking.png')}
            introText={
                "Haz llegado lejos mi pequeño saltamontes. Ahora es momento de pasar la última prueba. El temido módulo 6. Primero aprenderás como hablar de forma imperativa, para luego, por fin crear oraciones simples. ¡Sé que no me decepcionarás, eres muy capaz!"
            }
            nextScreen="Imperative"
            navigationTarget="CaminoLevelsBasic"
        />
    );
};

export default IntroduccionModulo6Basic;