import React from 'react';
import ModuloIntroduccion from '../../ModuloIntroduccion';

const IntroduccionModulo5Basic = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../../../assets/images/humu/humu-talking.png')}
            introText={
                "¡Eres un gran explorador, mi amigo! Haz sido capaz de llegar al módulo 5. En este módulo, aprenderás a pluralizar, hablar de cantidades, tamaños, y el género de lo que te rodea. ¿Estás listo para aprender? ¡Vamos a comenzar!"
            }
            nextScreen="Pluralization"
            navigationTarget="CaminoLevelsBasic"
        />
    );
};

export default IntroduccionModulo5Basic;