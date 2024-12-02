import React from 'react';
import ModuloIntroduccion from '../../ModuloIntroduccion';

const IntroduccionModulo3Basic = () => {
    return (
        <ModuloIntroduccion
            imageSource={require('../../../../../assets/images/humu/humu-talking.png')}
            introText={
                "¡Qué alegría verte de nuevo pequeño! ¡Sigamos aprendiendo! Este módulo es el 3, aquí aprenderás otras formas de referir a tú familia, las partes del cuerpo, y cómo habalr de algunas cosas que se encuentran en la casa y en el aula de clases. ¡Vamos a aprender!"
            }
            nextScreen="FamilyPart2"
            navigationTarget="CaminoLevelsBasic"
        />
    );
};

export default IntroduccionModulo3Basic;