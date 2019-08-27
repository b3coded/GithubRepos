import React from 'react';
import {ButtonContainer, ButtonText} from './styles';

const Button = ({text = '', onPress}) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
);

export default Button;
