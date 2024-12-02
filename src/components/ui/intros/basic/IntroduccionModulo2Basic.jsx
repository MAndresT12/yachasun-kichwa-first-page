import React from 'react';
import ModuloIntroduccion from '../../ModuloIntroduccion';

const IntroduccionModulo2Basic = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../../../assets/images/humu/humu-talking.png')}
            introText={
                "¡Eres muy bueno en esto pequeño aventurero! Mira que rápido hemos llegado al módulo 2. En este módulo aprenderás a presentarte y a saludar en Kichwa. Además, te enseñaré como hablar de tu familia y los pronombres personales. ¿Preparado?"
            }
            nextScreen="GreetingsPart1"
            navigationTarget="CaminoLevelsBasic"
        />
    );
};

export default IntroduccionModulo2Basic;
