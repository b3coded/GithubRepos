import React from 'react';
import {Input} from './styles';

const TextInput = ({
  placeholder = '',
  onChangeText,
  autoCapitalize,
  autoCorrect = false,
}) => (
  <Input
    placeholder={placeholder}
    onChangeText={onChangeText}
    autoCapitalize={autoCapitalize}
    autoCorrect={autoCorrect}
  />
);

export default TextInput;
