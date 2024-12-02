import React from 'react';
import ModuloIntroduccion from '../../ModuloIntroduccion';

const IntroduccionModulo4Basic = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../../../assets/images/humu/humu-talking.png')}
            introText={
                "¡Increíble! Te estás volviendo todo un experto en Kichwa, tal vez algún día puedas ser tan bueno como yo. Pero antes debes superar muchos más módulos. Este es el módulo 4, aquí aprenderás a hablar de la naturaleza, los animales y la comida. También, veremos cómo orientarnos. ¡Vamos a otra gran aventura!"
            }
            nextScreen="Nature"
            navigationTarget="CaminoLevelsBasic"
        />
    );
};

export default IntroduccionModulo4Basic;